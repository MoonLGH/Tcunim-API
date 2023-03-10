/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-empty-function */
import axios from "axios";
import {load} from "cheerio";
export const name = "Otakudesu";
export const lang = "ID";
const baseUrl = "https://otakudesu.bid/";
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
  video: Video[];
  downloads: download[]
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
}

export async function getHome(page="1"): Promise<homePage> {
  const OngoingData = await axios.get(baseUrl + `ongoing-anime/page/${page}`, {
    headers: {"Accept-Encoding": "gzip,deflate,compress"},
  });

  const Latest$ = load(OngoingData.data);
  const Latest: Anime[] = [];

  Latest$(
      "#venkonten > div > div.venser > div.venutama > div.rseries > div > div.venz > ul > li",
  ).each((i, el) => {
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
  ).each((i, el) => {
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

  $("#venkonten > div > div.venser > div > div > ul > li").each((i, el) => {
    const name = $(el).find("h2").text()!;
    const thumbnail_url = $(el).find("img").attr("src")!;
    const url = $(el).find("h2 > a").attr("href")!.split("/anime/")[1];
    const texts: string[] = [];
    $(el)
        .find(".set")
        .each(function(i, el) {
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
      (i, el) => {
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
  $("#venkonten > div.venser > div.episodelist").each((i, el) => {
    if ($(el).find("div").text().toLowerCase().includes("batch")) return;
    $(el)
        .find("ul > li")
        .each((j, el2) => {
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
export async function watch(id: string): Promise<EpsWatch> {
  const EpsData = await axios.get(baseUrl + `/episode/${id}`, {
    headers: {"Accept-Encoding": "gzip,deflate,compress"},
  });
  const $ = load(EpsData.data);

  let prev;
  let next;
  $(
      "#venkonten > div.venser > div.venutama > div.prevnext > div.flir > a",
  ).each((i, el) => {
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
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const url = await parse($(element).find("a:nth-child(2)").attr("href")!);
    const quality = $(element).find("strong").text();
    const downloadList:linkDownload[] = [];
    $(element).find("a").each((i, el) => {
      downloadList.push({provider: $(el).text(), url: $(el).attr("href")!});
    });

    downloads.push({
      quality,
      links: downloadList,
    });

    videos.push({
      quality,
      url,
    });
  }

  return {
    downloads,
    title,
    prev,
    next,
    video: videos,
  };
}

async function parse(url: string) {
  console.log(url);
  const res = await axios.get(url, {
    headers: {
      "Accept-Encoding": "gzip,deflate,compress",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
    },
  });

  url = "https://" + res.data.split("\"text\": \"https://")[1].split("\"")[0];
  url = url.replace("/v/", "/d/").replace("/file.html", "");
  const $ = load(res.data);
  const scr = $("body").html()!;
  const num = parseInt(scr.match(/.omg = (\d+)%78956/)![1]);
  const lastStr = scr.match(/\+"(.+?)"/);
  const link = url+ "/" + (num+18) + lastStr![1];
  console.log(link);
  return link;
}
