/* eslint-disable no-extend-native */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-empty-function */
import axios from "axios";
import {load} from "cheerio";
import {extract} from "./util/extractor/racaty.js";
import {extract as krakenExtract} from "./util/extractor/krakenfiles.js";
export const name = "Otakudesu";
export const lang = "ID";
const baseUrl = "https://otakudesu.lol/";
export const url = baseUrl;


interface Anime {
  title: string;
  thumbnail_url: string;
  url: string;
  totalEps: string;
}

interface homePage {
  latest: Anime[];
  popular: Anime[];
}

interface detailAnime {
  title: string;
  thumbnail_url: string;
  synopsis: string;
  episodes: Episode[];
}

interface Episode {
  title: string;
  url: string;
  date: string;
}

interface EpsWatch {
  title: string;
  next?: string;
  prev?: string;
  more?: ListMore[];
  video: Video[];
  downloads: download[]
}

interface ListMore {
  title: string;
  id: string;
}

interface download {
  quality: string;
  links: linkDownload[]
}

interface linkDownload {
  provider: string;
  url: string;
}

interface Video {
  url: string;
  quality: string;
  iframe?: boolean;
}

export async function getHome(page="1"): Promise<homePage> {
  const OngoingData = await axios.get(baseUrl + `ongoing-anime/page/${page}`, {
    headers: {"Accept-Encoding": "gzip,deflate,compress"},
  });

  const Latest$ = load(OngoingData.data);
  const Latest: Anime[] = [];

  Latest$(
      "#venkonten > div > div.venser > div.venutama > div.rseries > div > div.venz > ul > li",
  ).each((_i, el) => {
    const name = Latest$(el).find("div > div.thumb > a > div > h2").text()!;
    const thumbnail_url = Latest$(el)
        .find("div > div.thumb > a > div > img")
        .attr("src")!;
    const url = Latest$(el).find("div > div.thumb > a").attr("href")!.split("/anime/")[1];
    const totalEps = Latest$(el).find("div > div.epz").text()!;
    Latest.push({
      title: name,
      thumbnail_url,
      url,
      totalEps,
    });
  });

  const popularData = await axios.get(baseUrl + `complete-anime/page/${page}`, {
    headers: {"Accept-Encoding": "gzip,deflate,compress"},
  });

  const Popular$ = load(popularData.data);
  const Popular: Anime[] = [];

  Popular$(
      "#venkonten > div > div.venser > div.venutama > div.rseries > div > div.venz > ul > li",
  ).each((_i, el) => {
    const name = Popular$(el).find("div > div.thumb > a > div > h2").text()!;
    const thumbnail_url = Popular$(el)
        .find("div > div.thumb > a > div > img")
        .attr("src")!;
    const url = Popular$(el).find("div > div.thumb > a").attr("href")!.split("/anime/")[1];
    const totalEps = Popular$(el).find("div > div.epz").text();
    Popular.push({
      title: name,
      thumbnail_url,
      url,
      totalEps,
    });
  });

  return {
    latest: Latest,
    popular: Popular,
  };
}

export async function search(q: string, page="1") {
  const searchData = await axios.get(
      baseUrl + `/page/${page}/?s=${q.split(" ").join("+")}&post_type=anime`,
      {
        headers: {"Accept-Encoding": "gzip,deflate,compress"},
      },
  );
  const $ = load(searchData.data);
  const result: Anime[] = [];

  $("#venkonten > div > div.venser > div > div > ul > li").each((_i, el) => {
    const name = $(el).find("h2").text()!;
    const thumbnail_url = $(el).find("img").attr("src")!;
    const url = $(el).find("h2 > a").attr("href")!.split("/anime/")[1];
    const texts: string[] = [];
    $(el)
        .find(".set")
        .each(function(_i, el) {
          texts.push($(el).text());
        });
    const totalEps = texts.join("\n");
    result.push({
      title: name,
      thumbnail_url,
      url,
      totalEps,
    });
  });

  return result;
}
export async function detail(id: string): Promise<detailAnime> {
  const detailData = await axios.get(baseUrl + `/anime/${id}`, {
    headers: {"Accept-Encoding": "gzip,deflate,compress"},
  });
  const $ = load(detailData.data);

  const result: detailAnime = {
    title: "",
    thumbnail_url: "",
    synopsis: "",
    episodes: [],
  };
  $("#venkonten > div.venser > div.fotoanime > div.infozin > div > p").each(
      (_i, el) => {
        if ($(el).text().toLowerCase().includes("judul")) {
          result.title = $(el).text().split(":")[1]!;
        }
      },
  );
  result.synopsis = $(
      "#venkonten > div.venser > div.fotoanime > div.sinopc",
  ).text();
  result.thumbnail_url = $(
      "#venkonten > div.venser > div.fotoanime > img",
  ).attr("src")!;
  result.episodes = [];
  $("#venkonten > div.venser > div.episodelist").each((_i, el) => {
    if ($(el).find("div").text().toLowerCase().includes("batch")) return;
    $(el)
        .find("ul > li")
        .each((_j, el2) => {
          const url = $(el2).find("a").attr("href")!.split("/episode/")[1];
          const title = $(el2).find("a").text();
          const date = $(el2).find("span.zeebr").text();
          result.episodes.push({
            title,
            url,
            date,
          });
        });
  });
  return result;
}


async function DesuStream(body:string) {
  const $ = load(body);
  const desuStream = $(
      ".player-embed > .responsive-embed-stream > iframe",
  ).attr("src");

  // getting desu video]
  console.log(desuStream);
  return desuStream;
}

export async function watch(id: string): Promise<EpsWatch> {
  const EpsData = await axios.get(baseUrl + `/episode/${id}`, {
    headers: {"Accept-Encoding": "gzip,deflate,compress"},
  });
  const $ = load(EpsData.data);

  const more: ListMore[] = [];
  $("#selectcog > option").each((_i, el) => {
    const url = $(el).attr("value");
    const title = $(el).text();
    if (url) {
      more.push({
        title,
        id: url.split("/episode/")[1],
      });
    }
  });


  let prev;
  let next;
  $(
      "#venkonten > div.venser > div.venutama > div.prevnext > div.flir > a",
  ).each((_i, el) => {
    if ($(el).text().toLowerCase().includes("prev")) {
      prev = $(el).attr("href")?.split("/episode/")[1];
    } else if ($(el).text().toLowerCase().includes("next")) {
      next = $(el).attr("href")?.split("/episode/")[1];
    }
  });

  const title = $("#venkonten > div.venser > div.venutama > h1").text();

  const videos:Video[] = [];

  const elements = $(
      "#venkonten > div.venser > div.venutama > div.download > ul > li",
  );

  const downloads:download[] = [];

  const desuS = await DesuStream(EpsData.data).catch((e)=>{
    console.log(e);
    return null;
  });

  if (desuS) {
    videos.push({
      quality: "DESUSTREAM",
      iframe: true,
      url: desuS,
    });
  }
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const url = (await parse($(element).find("a").filter(function() {
      // eslint-disable-next-line no-invalid-this
      return $(this).text().toLowerCase().includes("kfile");
    }).attr("href")!).catch(()=>{
      return null;
    }));

    const url2 = (await parse($(element).find("a").filter(function() {
      // eslint-disable-next-line no-invalid-this
      return $(this).text().toLowerCase().includes("racaty");
    }).attr("href")!).catch(()=>{
      return null;
    }));

    const downloadList:linkDownload[] = [];
    $(element).find("a").each((_i, el) => {
      downloadList.push({provider: $(el).text(), url: $(el).attr("href")!});
    });

    const quality = $(element).find("strong").text();

    if (url && typeof url === "string") {
      videos.push({
        quality,
        url,
      });
    }
    if (url2 && typeof url2 === "string") {
      videos.push({
        quality,
        url: url2,
      });
    }
    downloads.push({
      quality,
      links: downloadList,
    });
  }

  return {
    downloads,
    title,
    prev,
    next,
    more,
    video: videos,
  };
}

async function parse(url: string) {
  console.log("test", url);
  const res = await axios.get(url);
  if (res.request._redirectable._redirectCount > 0) {
    const redirectUrl = res.request._redirectable._currentUrl;
    url = redirectUrl;
  }

  console.log(url);
  let data;
  if (url.includes("racaty")) {
    data = (await extract(url)).url;
  } else if (url.includes("krakenfiles")) {
    data = await krakenExtract(url);
  }
  return data;
}
