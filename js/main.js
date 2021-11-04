function play(num) {

    let video = document.getElementById("video" + num);
    let img = document.getElementById("img" + num);
    let icon = document.getElementById("i" + num);

    icon.style.display = "none";
    img.style.display="none";
    video.style.display="block";
    video.play();

    console.log("Reproduciendo video " + num + "...");

}