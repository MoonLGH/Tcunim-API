import axios from 'axios';
import { load } from 'cheerio';


const headers = {
  'origin': 'https://9xbuddy.xyz',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
  'x-requested-domain': '9xbuddy.xyz',
  'x-requested-with': 'xmlhttprequest'
};

test("https://racaty.io/asslnc57ncii")

async function test(url) {
  let data = await axios.get("https://9xbuddy.xyz/process?url="+encodeURIComponent(url),{
    headers:{
      "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
    }
  })
  let css = getcss(data)[1]
  let auth = await getAuth(url)
  console.log(auth)
  headers["x-auth-token"] = auth
  const token = await axios.post("https://ab.9xbud.com/token",{},{headers})

  console.log(token.data)
  
  headers["x-access-token"] = token.data.access_token
  const postResponse = await axios.post("https://ab.9xbud.com/extract", {
    searchEngine:"yt",
    url,
  },{
    headers
  });

  // console.log(postResponse.data)
  doDecrpyt(postResponse.data, css)
  // console.log(postResponse.data.response.formats)
}

function doDecrpyt(data,css){
  let res = []
  let token = data.response.token
  let cssMain = css
  let s = "SORRY_MATE"

  for (let index = 0; index < data.response.formats.length; index++) {
    const element = data.response.formats[index];
    let i = hexbin(element.url).split("").reverse().join("")
    let a = "".concat(s).concat("9xbuddy.xyz".length).concat(cssMain).concat(token)
    res.push(decrypt(i,a))
  }

  console.log(res)
}

function hexbin(e) {
  var t, r = [], n = 0;
  for (t = (e += "").length; n < t; n += 2) {
      var s = parseInt(e.substr(n, 1), 16)
        , a = parseInt(e.substr(n + 1, 1), 16);
      if (isNaN(s) || isNaN(a))
          return !1;
      r.push(s << 4 | a)
  }
  return String.fromCharCode.apply(String, r)
}

function ord(e) {
  var t = ''.concat(e),
    r = t.charCodeAt(0)
  if (r >= 55296 && r <= 56319) {
    var n = r
    return 1 === t.length
      ? r
      : 1024 * (n - 55296) + (t.charCodeAt(1) - 56320) + 65536
  }
  return r
}

function decrypt(e, t) {
  var r = ''
  e = decode64(e)
  for (var n = 0; n < e.length; n++) {
    var s = e.substr(n, 1),
      a = t.substr((n % t.length) - 1, 1)
    s = Math.floor(ord(s) - ord(a))
    r += String.fromCharCode(s)
  }
  return r
}

function decode64(e) {
  if (
    ((e = e.replace(/\s/g, '')),
    /^[a-z0-9\+\/\s]+\={0,2}$/i.test(e) && !(e.length % 4 > 0))
  ) {
    var t,
      r,
      n = 0,
      s = []
    for (e = e.replace(/=/g, ''); n < e.length; ) {
      switch (
        ((t =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.indexOf(
            e.charAt(n)
          )),
        n % 4)
      ) {
        case 1:
          s.push(String.fromCharCode((r << 2) | (t >> 4)))
          break
        case 2:
          s.push(String.fromCharCode(((15 & r) << 4) | (t >> 2)))
          break
        case 3:
          s.push(String.fromCharCode(((3 & r) << 6) | t))
      }
      r = t
      n++
    }
    return s.join('')
  }
}


async function getAuth(url) {
  let data = await axios.get("https://9xbuddy.xyz/process?url="+encodeURIComponent(url),{
    headers:{
      "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
    }
  })
  return doEncrypt(data)
}

function doEncrypt(data){
  let json = JSON.parse(data.data.split("__INIT__")[1].split("</script>")[0].replace(" = ",""))

  let s = getcss(data)

  let a = s[1].split("").reverse().join("")
  let ua = json.ua.split("").reverse().join("").substr(0, 10)
  let o = "SORRY_MATE"
  let i = json.appVersion
  let u = "9xbuddy.xyz" + a + ua + o + "xxbuddy-v8" + i

  return encrypt(u,a)
}

function getcss(data){
  let $ = load(data.data)
  let head = $("head").html()
  let s = /\/build\/main\.([^"]+?).css/g.exec(head);
  return s
}

function encode64(e) {
  if (/([^\u0000-\u00ff])/.test(e))
      throw new Error("Can't base64 encode non-ASCII characters.");
  for (var t, r, n, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = []; a < e.length; ) {
      switch (t = e.charCodeAt(a),
      n = a % 3) {
      case 0:
          c.push(s.charAt(t >> 2));
          break;
      case 1:
          c.push(s.charAt((3 & r) << 4 | t >> 4));
          break;
      case 2:
          c.push(s.charAt((15 & r) << 2 | t >> 6)),
          c.push(s.charAt(63 & t))
      }
      r = t,
      a++
  }
  return 0 == n ? (c.push(s.charAt((3 & r) << 4)),
  c.push("==")) : 1 == n && (c.push(s.charAt((15 & r) << 2)),
  c.push("=")),
  c.join("")
}

function encrypt(e, t) {
  for (var r = "", n = 0; n < e.length; n++) {
      var s = e.substr(n, 1)
        , a = t.substr(n % t.length - 1, 1);
      s = Math.floor(ord(s) + ord(a)),
      r += s = String.fromCharCode(s)
  }
  return encode64(r)
}