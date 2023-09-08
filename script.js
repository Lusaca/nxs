for (let i = 1; i < 30; i++) {
    let dl_area = document.createElement("div");
    dl_area.setAttribute("class", "dl-area");
    let dl_img = document.createElement("img");
    dl_img.setAttribute("src", "gallery/IMG_" + String(i) + ".webp");
    dl_img.setAttribute("loading", "lazy")
    dl_area.appendChild(dl_img);
    let a = document.createElement("a");
    a.setAttribute("href", "gallery/IMG_" + String(i) + ".JPG");
    a.setAttribute("target", "_blank");
    let btn = document.createElement("button");
    btn.textContent = "ダウンロード";
    a.appendChild(btn);
    dl_area.appendChild(a)
    document.querySelector(".gallery").appendChild(dl_area)
}