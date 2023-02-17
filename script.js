let activeImg;
let intId;

function addBorder(imgCount, flag = false) {
    
    const imageObj = document.getElementsByClassName("img" + imgCount).item(0);
    
    if (imageObj.style.border === "1px solid red" && !flag) { return;}
    imageObj.style.width = "50vw";
    imageObj.style.border = "none";
    imageObj.style.height = "80%";
    imageObj.children[0].style.display= "none";
    if(flag) return;
    imageObj.children[0].style.display= "block";
    clearInterval(intId);
    imageObj.style.border = "1px solid red";

    intId = setInterval(() => {
        imageObj.style.height = (Number(imageObj.style.height.slice(0,-1)) + 1).toString() + '%';
        imageObj.style.width = (Number(imageObj.style.width.slice(0,-2)) + 0.25).toString() + 'vw';
        if (Number(imageObj.style.height.slice(0,-1)) > 115) {clearInterval(intId);}
    }, 5);
    
    addBorder(imgCount === 1 ? 2 : 1, true);
    addBorder(imgCount === 2 ? 3 : imgCount === 3 ? 2 : 3, true);
}

function deleteborder(imgCount) {
    clearInterval(intId);
    const imageObj = document.getElementsByClassName("img" + imgCount).item(0);
    intId = setInterval(() => {
        imageObj.style.height = (Number(imageObj.style.height.slice(0,-1)) - 1).toString() + '%';
        imageObj.style.width = (Number(imageObj.style.width.slice(0,-2)) - 0.25).toString() + 'vw';
        if (Number(imageObj.style.height.slice(0,-1)) < 80) {clearInterval(intId);}
    }, 5);
    imageObj.style.border = "none";
    imageObj.children[0].style.display= "none";
}
