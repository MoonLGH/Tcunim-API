// Wont be needing these eslint rule in template
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

export const name = "Extension Name"; // no space please
export const lang = "XX"; // Country code based on ISO 3166-1 alpha-2
const baseUrl = "https://Website"; // Website baseUrl
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
    date: string;
}


interface EpsWatch {
    next?:string;
    prev?:string;
    video: Video[];
  }
  
  interface Video {
    url: string;
    Quality: string;
  }
// export async function getHome():Promise<homePage[]> {} // returnhomePage
// export async function search(q:string):Promise<Anime[]> {} // return Anime[]
// export async function detail(id:string):Promise<detailAnime> {}
// export async function watch(id:string):Promise<EpsWatch | null> {}


// EXAMPLES

// Cloudflare bypass or example using puppeteer

// import puppeteer from "puppeteer-extra";
// import StealthPlugin from "puppeteer-extra-plugin-stealth";
// puppeteer.use(StealthPlugin());
// import {Page} from "puppeteer";
// async function bypass(page:Page, url:string) {
//   await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36 OPR/87.0.4390.58");
//   const response = await page.goto(url, {timeout: 30000, waitUntil: "domcontentloaded"});
//   if (response && response.status() === 503) return page.waitForNavigation();
//   return response;
// }
// const pup = await puppeteer.launch({});
// const res = await bypass((await pup.newPage()), baseUrl);
// console.log(await res!.text());


// Using axios

// import axios from "axios";
// const data = await axios.get(baseUrl, {
//   headers: {"Accept-Encoding": "gzip,deflate,compress"},
// });
