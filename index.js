function unserialize(qstr) {
  var r = /([^&=]+)=([^&]*)/g,
    p = {},
    m;
  while ((m = r.exec(qstr)))
    p[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  return p;
}

function callApi(url, token, callback) {
  $.ajax({
    url: url + (url.indexOf("?") >= 0 ? "&" : "?") + "access_token=" + token,
    data: null,
    success: callback,
    dataType: "jsonp",
  });
}

if (location.hash.substr() != "") {
  var params = unserialize(location.hash.substr(1));
  console.log(params);
  const btn = document.getElementById("query-btn");
  const apiUrl = "https://twinoid.com/graph/me";
  btn.addEventListener(
    "click",
    callApi(apiUrl, params.access_token, (obj) => {
      console.log(obj);
    })
  );
}
