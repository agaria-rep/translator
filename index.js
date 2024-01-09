let params = new URLSearchParams(document.location.search);

var from_t = "RUS".toUpperCase(); // params.get("from").toUpperCase();
var to_t = params.get("to").toUpperCase();

if (to_t == "" || ( to_t != "EEE" && to_t != "FYA")) {
  to_t = `<select onclick="toChoose()"><option value="" disabled>Choose</option><option value="eee">EEE</option><option value="fya">FYA</option></select>`;
}

document.querySelector(".type-from").innerText = from_t;
document.querySelector(".type-to").innerText = to_t;
document.querySelector("title").innerText = to_t+" Translator";


function toChoose() {
  window.location.href += "s";
}

alert(window.location.href);
