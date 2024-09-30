function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value === "undefined" ? "" : txt.value;
}

export default decodeHtml;
