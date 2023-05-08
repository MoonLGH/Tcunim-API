import axios from "axios"
async function test(url){
    const res = await axios.get(url);
    if (res.request._redirectable._redirectCount > 0) {
      const redirectUrl = res.request._redirectable._currentUrl;
      url = redirectUrl;
    }
  
    console.log(url);
}

test