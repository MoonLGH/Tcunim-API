/* eslint-disable @typescript-eslint/no-empty-function */
import axios from "axios";
export const name = "Otakudesu";
export const lang = "ID";
const baseUrl = "https://otakudesu.bid/";
export const url = baseUrl;

import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
puppeteer.use(StealthPlugin());
import {Page} from "puppeteer";

async function bypass(page:Page, url:string) {
  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36 OPR/87.0.4390.58");
  const response = await page.goto(url, {timeout: 30000, waitUntil: "domcontentloaded"});
  if (response && response.status() === 503) return page.waitForNavigation();
  return response;
}

export async function getHome() {
  const pup = await puppeteer.launch({});
  const res = await bypass((await pup.newPage()), baseUrl);
  console.log(await res!.text());
  return (await res?.text());
}
export async function search(q:string) {}
export async function detail(id:string) {}
export async function watch(id:string) {}
