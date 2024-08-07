let buton = document.getElementById("light/dark");
let yenitema = localStorage.getItem("tema");
let temadegis = document.getElementById("temalar");

function degis(yenitema) {
  yenitema = localStorage.getItem("tema");
  if (yenitema == "lighttema.css") {
    temadegis.href = yenitema;
    buton.value = "dark";
  } else if (yenitema == "darktema.css") {
    temadegis.href = yenitema;
    buton.value = "light";
  } else {console.log("error")  }
}

function myFunction() {
  yenitema = localStorage.getItem("tema");
  if (yenitema == "darktema.css") {
    localStorage.setItem("tema", "lighttema.css");
    degis(yenitema);
  } else if (yenitema == "lighttema.css"){
    localStorage.setItem("tema", "darktema.css");
    degis(yenitema);
  }
  else{
    localStorage.setItem("tema", "darktema.css");
    degis(yenitema);
  }
}

degis();
  