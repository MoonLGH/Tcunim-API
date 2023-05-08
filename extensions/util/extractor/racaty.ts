import axios from "axios";
import cheerio from "cheerio";

export async function extract(url:string) {
  console.log(url);
  url = url.replace(".net", ".io").replace("http://", "https://");
  const headers = {
    "referer": "https://racaty.io",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36",
    "accept": "application/json",
  };

  const regex = /(https?:\/\/racaty\.(io|net)\/([a-zA-Z\d]{12}))/;
  const match = url.match(regex)!;
  const _id = match[3];

  const payload = "op=download2&id=" + _id + "&rand=&referer=&method_free=&method_premium=";

  const response = await axios.post(url, payload, {headers});
  console.log(response.data);
  const $ = cheerio.load(response.data);
  url = $("#uniqueExpirylink").attr("href")!.replace(" ", "%20");
  const filename = /\/\/.*\/.*\/(.*)/.exec(url)![1];

  console.log(url, filename);
  return {url, filename};
}
