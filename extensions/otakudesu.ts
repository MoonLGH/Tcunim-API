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
  next?: string;
  prev?: string;
  video: Video[];
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
    const url = Latest$(el).find("div > div.thumb > a").attr("href")!;
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
    const url = Popular$(el).find("div > div.thumb > a").attr("href")!;
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
    const url = $(el).find("h2 > a").attr("href")!;
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
          const url = $(el2).find("a").attr("href")!;
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
      prev = $(el).attr("href");
    } else if ($(el).text().toLowerCase().includes("next")) {
      next = $(el).attr("href");
    }
  });

  const videos:Video[] = [];

  const elements = $(
      "#venkonten > div.venser > div.venutama > div.download > ul > li > a:nth-child(2)",
  );
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    let quality = "";
    const url = await parse($(element).attr("href")!);
    if (url.includes("360")) {
      quality = "360p";
    } else if (url.includes("480")) {
      quality = "480p";
    } else if (url.includes("720")) {
      quality = "720p";
    } else if (url.includes("1080")) {
      quality = "1080p";
    } else {
      quality = "UNKNOWN";
    }
    videos.push({
      quality,
      url,
    });
  }

  return {
    prev,
    next,
    video: videos,
  };
}

async function parse(url: string) {
  const res = (await axios.get(url, {
    headers: {"Accept-Encoding": "gzip,deflate,compress"},
  }));
  url = "https://" + res.data.split("\"text\": \"https://")[1].split("\"")[0];
  const $ = load(res.data);
  const scr = $("#dlbutton").parent().find("script").html()!;
  let link = url.substring(0, url.indexOf("/v/"));
  const firstString = scr!.substring(
    scr!.indexOf(" = \"") + 4,
    scr!.indexOf("\" + ("),
  );
  const num = parseInt(scr.split("+ (")[1].split("%")[0]);
  console.log(num);
  const lastString = scr!.substring(
    scr!.indexOf("913) + \"") + 8,
    scr!.indexOf("\";"),
  );
  const nums = (num % 51245 + num % 913);
  link += firstString + nums.toString() + lastString;
  return link;
}
