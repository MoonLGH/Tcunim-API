/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import {load} from "cheerio";

const headers:Record<string, string> = {
  "origin": "https://9xbuddy.xyz",
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
  "x-requested-domain": "9xbuddy.xyz",
  "x-requested-with": "xmlhttprequest",
};

let ontimeout = false;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


export async function extract(url:string): Promise<string[]> {
  if (ontimeout) {
    await delay(3000);
    ontimeout = false;
    return await extract(url);
  }
  const data = await axios.get("https://9xbuddy.xyz/process?url="+encodeURIComponent(url), {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
    },
  });
  const css = getcss(data)![1];
  const auth = await getAuth(url);


  headers["x-auth-token"] = auth;
  const token = await axios.post("https://ab.9xbud.com/token", {}, {headers});

  headers["x-access-token"] = token.data.access_token;

  const postResponse = await axios.post("https://ab.9xbud.com/extract", {
    searchEngine: "yt",
    url,
  }, {
    headers,
  });

  ontimeout = true;

  return doDecrpyt(postResponse.data, css);
}


function doDecrpyt(data:any, css:string) {
  const res = [];
  const token = data.response.token;
  const cssMain = css;
  const s = "SORRY_MATE";

  for (let index = 0; index < data.response.formats.length; index++) {
    const element = data.response.formats[index];
    const i = (hexbin(element.url) as string).split("").reverse().join("");
    const a = "".concat(s).concat("9xbuddy.xyz".length+"").concat(cssMain).concat(token);
    res.push(decrypt(i, a));
  }

  return res;
}

function hexbin(e:string) {
  let t; const r = []; let n = 0;
  for (t = (e += "").length; n < t; n += 2) {
    const s = parseInt(e.substr(n, 1), 16);
    const a = parseInt(e.substr(n + 1, 1), 16);
    if (isNaN(s) || isNaN(a)) {
      return !1;
    }
    r.push(s << 4 | a);
  }
  // eslint-disable-next-line prefer-spread
  return String.fromCharCode.apply(String, r);
}

function ord(e:string) {
  const t = "".concat(e);
  const r = t.charCodeAt(0);
  if (r >= 55296 && r <= 56319) {
    const n = r;
    return 1 === t.length ?
        r :
        1024 * (n - 55296) + (t.charCodeAt(1) - 56320) + 65536;
  }
  return r;
}

function decrypt(e:string, t:string) {
  let r = "";
  e = decode64(e)!;
  for (let n = 0; n < e.length; n++) {
    let s:string|number = e.substr(n, 1);
    const a = t.substr((n % t.length) - 1, 1);
    s = Math.floor(ord(s) - ord(a));
    r += String.fromCharCode(s);
  }
  return r;
}

function decode64(e:string) {
  if (
    ((e = e.replace(/\s/g, "")),
    // eslint-disable-next-line no-useless-escape
    /^[a-z0-9\+\/\s]+\={0,2}$/i.test(e) && !(e.length % 4 > 0))
  ) {
    let t;
    let r:any;
    let n = 0;
    const s = [];
    for (e = e.replace(/=/g, ""); n < e.length; ) {
      switch (
        ((t =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(
                e.charAt(n),
            )),
        n % 4)
      ) {
        case 1:
          s.push(String.fromCharCode((r << 2) | (t >> 4)));
          break;
        case 2:
          s.push(String.fromCharCode(((15 & r) << 4) | (t >> 2)));
          break;
        case 3:
          s.push(String.fromCharCode(((3 & r) << 6) | t));
      }
      r = t;
      n++;
    }
    return s.join("");
  }
}


async function getAuth(url:string) {
  const data = await axios.get("https://9xbuddy.xyz/process?url="+encodeURIComponent(url), {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
    },
  });
  return doEncrypt(data);
}

function doEncrypt(data:any) {
  const json = JSON.parse(data.data.split("__INIT__")[1].split("</script>")[0].replace(" = ", ""));

  const s = getcss(data)!;

  const a = s[1].split("").reverse().join("");
  const ua = json.ua.split("").reverse().join("").substr(0, 10);
  const o = "SORRY_MATE";
  const i = json.appVersion;
  const u = "9xbuddy.xyz" + a + ua + o + "xxbuddy-v8" + i;

  return encrypt(u, a);
}

function getcss(data:any) {
  const $ = load(data.data);
  const head = $("head").html();
  const s = /\/build\/main\.([^"]+?).css/g.exec(head!);
  return s;
}

function encode64(e: string): string {
  // eslint-disable-next-line no-control-regex
  if (/([^\u0000-\u00ff])/.test(e)) {
    throw new Error("Can't base64 encode non-ASCII characters.");
  }

  const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  let t; let r = 0; let n = 0;
  const c: string[] = [];

  for (let a = 0; a < e.length; a++) {
    t = e.charCodeAt(a);
    n = a % 3;

    switch (n) {
      case 0:
        c.push(s.charAt(t >> 2));
        break;
      case 1:
        c.push(s.charAt((3 & r) << 4 | t >> 4));
        break;
      case 2:
        c.push(s.charAt((15 & r) << 2 | t >> 6));
        c.push(s.charAt(63 & t));
        break;
    }

    r = t;
  }

  if (n === 0) {
    c.push(s.charAt((3 & r) << 4));
    c.push("==");
  } else if (n === 1) {
    c.push(s.charAt((15 & r) << 2));
    c.push("=");
  }

  return c.join("");
}


function encrypt(e:string, t:string) {
  let r = "";
  for (let n = 0; n < e.length; n++) {
    let s:string|number = e.substr(n, 1);
    const a = t.substr(n % t.length - 1, 1);
    s = Math.floor(ord(s) + ord(a)),
    r += s = String.fromCharCode(s);
  }
  return encode64(r);
}

