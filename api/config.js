// appid的值
const appid = 'wxd114542303074ab3';
//api的值
// const APIURL = "http://106.13.28.21:8081";
const APIURL = "http://192.168.43.202:8080"; 

// chuanyi
// const APIURL =  "http://192.168.40.117:8080";

// const url= "http://192.168.43.202:8080";
const url_post="api/bbs/submit_post";
const url_post_list="api/bbs/look_post_list";
const url_search_post="api/search/post";
const url_comment="api/bbs/comments/submit_comment";
const url_comment_get="api/bbs/comments/list";

module.exports = {
  appid,
  APIURL,

  url_post,
  url_post_list,
  url_search_post,
  url_comment,
  url_comment_get,
}