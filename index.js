//Funciones de conveniencia

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

//Codigo principal

const btn = document.getElementById("query-btn");
const scopeInput = document.getElementById("scope");
const urlInput = document.getElementById("url");
btn.addEventListener("click", () => {
  btn.href += scopeInput.value + "&state=" + urlInput.value;
});

//Llamado a la API

if (location.hash.substr(0, 25) === "#state=null&access_token=") {
  let params = unserialize(location.hash.substr(1));
  const apiUrl = "https://twinoid.com/graph/" + params.state;
  callApi(apiUrl, params.access_token, (obj) => {
    console.log(obj);
  });
}
