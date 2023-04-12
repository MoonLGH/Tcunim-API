import axios from 'axios';

const headers = {
  'origin': 'https://9xbuddy.xyz',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
  'x-auth-token': 'at7D1paa32ao392cxJZrapdvYpuUnMSWa2qXb2KblGiwn4VnfouAq5y5sLOEj8WFcbqortuXrpiVsF+raZ+Pk2Bs',
  'x-requested-domain': '9xbuddy.xyz',
  'x-requested-with': 'xmlhttprequest'
};


async function test(url) {
  const newAuth = await axios.post("https://9xbuddy.xyz/action/token",{},{
    headers
  })
  console.log(newAuth.data)

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
  // doDecrpyt(postResponse.data)
  // console.log(postResponse.data.response.formats)
}


function doDecrpyt(data){
  let res = []
  let token = data.response.token
  let cssMain = "15271495c6cf08f62aaf"
  let s = "SORRY_MATE"

  for (let index = 0; index < data.response.formats.length; index++) {
    const element = data.response.formats[index];
    let i = hexbin(element.url).split("").reverse().join("")
    let a = "".concat(s).concat("9xbuddy.xyz".length).concat(cssMain).concat(token)
    res.push(decrypt(i,a))
  }

  console.log(res)
}

// test("https://www.tiktok.com/@arsalforyouu/video/7216540425748811034")
// racaty("https://racaty.io/6b2vijgi0w3m")
test("https://racaty.io/asslnc57ncii")

// test2()

let res = ""
let e = "3d3d675a6c36705868576e6930784b6b4a2b336649796f644a577073322b62754f58497836697330506a397557544c6f53625a5947377476677258353979493654587478456a4d344a584c334f6a727270444f7968574f7a70576533494f396e6e58386c6762647a35703233656635346761743467663977516a4d316e6d4b70546e7475704e4e6e4e4338774d62383068705a6c7268326c64574b7a6a4a4c715371356b6e2b31596974727830796e6a5457737744666370"
let i = hexbin(e).split("").reverse().join("")
let token = "aGZjY3BoYm1rkWeWmpis2qalm5CVcqaUo5mVrmCgn3ehp9KjyJVhaZdkYo+RlGlOhY+bkqebZmZncGOWbJSWYHE="
let s = "SORRY_MATE"
let filename = "15271495c6cf08f62aaf"
let a = "".concat(s).concat("9xbuddy.xyz".length).concat(filename).concat(token)

// console.log(a)
// console.log("-----")
// console.log(i)
// res = decrypt(i,a)

console.log(res)
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