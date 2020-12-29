function unserialize(qstr) {
  var r = /([^&=]+)=([^&]*)/g,
    p = {},
    m;
  while ((m = r.exec(qstr)))
    p[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  return p;
}

if (location.hash.substr() != "") {
  var params = unserialize(location.hash.substr(1));
  console.log(params);
}
