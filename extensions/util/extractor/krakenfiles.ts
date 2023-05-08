/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import cheerio from "cheerio";
export async function extract(link: string) {
  console.log(link);
  const pageRes = await axios.get(link);

  const $ = cheerio.load(pageRes.data);
  const token = $("#dl-token").attr("value");
  if (!token) {
    throw new Error(`ERROR: Page link is wrong: ${link}`);
  }

  const hashes: any[] = [];
  $("[data-file-hash]").each((index, element) => {
    hashes.push($(element).attr("data-file-hash"));
  });

  if (hashes.length === 0) {
    throw new Error(`ERROR: Hash not found for: ${link}`);
  }

  const dlHash = hashes[0];
  const payload = `------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name="token"\r\n\r\n${token}\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--`;
  const headers = {
    "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
    "Cache-Control": "no-cache",
    "Hash": dlHash,
  };

  try {
    const dlLinkResp = await axios.post(`https://krakenfiles.com/download/${dlHash}`, payload, {headers});
    const dlLinkJson = dlLinkResp.data;
    if (dlLinkJson.url) {
      console.log(dlLinkJson.url);
      return dlLinkJson.url;
    } else {
      throw new Error(`ERROR: Failed to acquire download URL from kraken for: ${link}`);
    }
  } catch (error:any ) {
    throw new Error(`ERROR: ${error.response.statusText}`);
  }
}
