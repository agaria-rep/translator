let params = new URLSearchParams(document.location.search);

var from_t = "RUS".toUpperCase(); // params.get("from").toUpperCase();
var to_t = params.get("to").toUpperCase();

document.querySelectorAll(".type-from").forEach((e) => {e.innerText = from_t});
document.querySelectorAll(".type-to").forEach((e) => {e.innerText = to_t});
document.querySelector("title").innerText = to_t+" Translator";
