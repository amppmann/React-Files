function toggleText(){
    var value=document.querySelector("button").value;
    if(value==="1"){
        document.querySelector("h1").classList.add("invisible");
        document.querySelector("button").value="0";
    } else {
        document.querySelector("h1").classList.remove("invisible");
        document.querySelector("button").value="1";
    }
}



document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href","https://www.github.com");