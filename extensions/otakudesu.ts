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
  latest: Anime[]
  popular: Anime[]
}

interface detailAnime {
  title: string;
  thumbnail_url: string;
  synopsis: string;
  episodes: Episode[]
}

interface Episode {
  title: string;
  url: string;
}

interface EpsWatch {
  url: string;
}


export async function getHome():Promise<homePage> {
  const OngoingData = await axios.get(baseUrl+"ongoing-anime/", {
    headers: {"Accept-Encoding": "gzip,deflate,compress"},
  });

  const Latest$ = load(OngoingData.data);
  const Latest:Anime[] = [];

  Latest$("#venkonten > div > div.venser > div.venutama > div.rseries > div > div.venz > ul > li").each((i, el)=>{
    const name = Latest$(el).find("div > div.thumb > a > div > h2").text()!;
    const thumbnail_url = Latest$(el).find("div > div.thumb > a > div > img").attr("src")!;
    const url = Latest$(el).find("div > div.thumb > a").attr("href")!;
    const totalEps = Latest$(el).find("div > div.epz").text()!;
    Latest.push({
      title: name,
      thumbnail_url,
      url,
      totalEps,
    });
  });

  const popularData = await axios.get(baseUrl+"complete-anime/", {
    headers: {"Accept-Encoding": "gzip,deflate,compress"},
  });

  const Popular$ = load(popularData.data);
  const Popular:Anime[] = [];

  Popular$("#venkonten > div > div.venser > div.venutama > div.rseries > div > div.venz > ul > li").each((i, el)=>{
    const name = Popular$(el).find("div > div.thumb > a > div > h2").text()!;
    const thumbnail_url = Popular$(el).find("div > div.thumb > a > div > img").attr("src")!;
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

export async function search(q:string) {
  const searchData = await axios.get(baseUrl+`?s=${q.split(" ").join("+")}&post_type=anime`, {
    headers: {"Accept-Encoding": "gzip,deflate,compress"},
  });
  const $ = load(searchData.data);
  const result:Anime[] = [];

  $("#venkonten > div > div.venser > div > div > ul > li").each((i, el)=>{
    const name = $(el).find("h2").text()!;
    const thumbnail_url = $(el).find("img").attr("src")!;
    const url = $(el).find("h2 > a").attr("href")!;
    const texts:string[] = [];
    $(el).find(".set").each(function(i, el) {
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
export async function detail(id:string) {}
export async function watch(id:string) {}
