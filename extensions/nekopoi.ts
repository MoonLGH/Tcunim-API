export const name = "Nekopoi";
export const lang = "ID";
const baseUrl = "https://otakudesu.bid/";
export const url = baseUrl;
export const nsfw = true;
import axios from "axios";
import {load} from "cheerio";

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
  downloads: download[];
}

interface download {
  quality: string;
  links: linkDownload[];
}

interface linkDownload {
  provider: string;
  url: string;
}

interface Video {
  url: string;
  quality: string;
}

import {Client} from "nekowrap";

import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
puppeteer.use(StealthPlugin());
const client = new Client(puppeteer,{ args: ['--no-sandbox', '--disable-setuid-sandbox'],ignoreDefaultArgs: ['--disable-extensions']  });
export async function start() {
  await client.start();
  console.log("Client nekopoi is started");
  return;
}
export async function getHome(page = "1"): Promise<homePage> {
  const pop = await client.hentai(parseInt(page));
  const Popular = [];
  for (let i = 0; i < pop.length; i++) {
    const element = pop[i];
    Popular.push({
      title: element.title,
      thumbnail_url: element.thumb,
      url: element.id,
      totalEps: "unknown",
    });
  }

  return {
    latest: Popular,
    popular: Popular,
  };
}

export async function search(q: string, page = "1") {
  const result = [];
  const data = await client.search(q, parseInt(page));
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (element.type === "hentai") {
      result.push({
        title: element.title,
        thumbnail_url: element.thumb,
        url: element.url.split("/hentai/")[1],
        totalEps: "unknown",
      });
    }
  }
  return result;
}

export async function detail(id: string): Promise<detailAnime> {
  const detail = await client.fetchHentai(id);
  const result = {
    title: detail.japanese,
    thumbnail_url: detail.thumb,
    synopsis: `${detail.genres} ${detail.skor}`,
    episodes: [] as Episode[],
  };
  for (let i = 0; i < detail.episodeList.length; i++) {
    const element = detail.episodeList[i];
    result.episodes.push({
      title: element.title,
      url: element.id,
      date: element.date,
    });
  }
  return result;
}

export async function watch(id: string): Promise<EpsWatch> {
  const data = await client.fetchEpisode(id);
  const video: Video[] = [];
  const dl = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    dl.push({
      quality: element.title,
      links: element.list.map((item) => {
        return {
          provider: item.provider,
          url: item.link,
        };
      }),
    });
    if (element.title.includes("360")) {
      try {
        const prov = element.list.find((item) => item.provider.includes("ouo"));
        const url = await client.Ouo(prov!.link, 2);
        console.log(url);
        const downloads = await client.bypassMirrored(url!+"");
        console.log(downloads);
        dl.push({
          quality: element.title + " BYPASSED",
          links: downloads.map((dl) =>{
            return {
              provider: dl.host,
              url: dl.url,
            };
          }),
        });
        let zs = downloads!.find((ar) =>
          ar.host.toLowerCase().includes("zippy"),
        )?.url;
        if (zs) {
          zs = await parse(zs);
          video.push({
            quality: element.title,
            url: zs,
          });
        }
      } catch (e) {
        console.log("Error on ouo, throwing ouo on dl");
        const link = element.list.find((item) => item.provider.includes("ouo"));
        dl.push({
          quality: element.title + "OUO-NEEDCORS",
          links: [{provider: "OUO", url: link!.link}],
        });
        console.log(e);
      }
    }
  }
  return {
    title: id.split("-").join(" "),
    downloads: dl,
    video: video,
  };
}

async function parse(url: string) {
  const res = await axios.get(url, {
    headers: {"Accept-Encoding": "gzip,deflate,compress"},
  });
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
  const nums = (num % 51245) + (num % 913);
  link += firstString + nums.toString() + lastString;
  return link;
}
