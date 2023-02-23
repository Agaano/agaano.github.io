let addition = 25;
let obj = document.getElementsByClassName("img");
let intId = [obj.length];
const objWidth = Number(getComputedStyle(obj[0]).width.slice(0,-2).valueOf());
const objHeight = Number(getComputedStyle(obj[0]).height.slice(0,-2).valueOf());
if (window.screen.height < window.screen.width)
{
    for (let i = 0; i < obj.length; i++) {
        obj[i].addEventListener('mouseenter', () => blockanimon(obj[i],i));
        obj[i].addEventListener('mouseleave', () => blockanimoff(obj[i],i));
    }
}
else {   
    for (let i = 0; i < obj.length; i++) {
    obj[i].addEventListener('click', () => blockanimon(obj[i],i)); 
    obj[i].addEventListener('mouseout', () => blockanimoff(obj[i],i));
    }
}


function blockanimon(obj,i) {
    clearInterval(intId[i]);
    let style = getComputedStyle(obj);
    let height = Math.trunc(Number(style.height.slice(0,-2)));
    let maxheight = objHeight + addition;
    intId[i] = setInterval(() => {
        height += 10;
        obj.style.height = height + "px";
        if (height >= maxheight) 
        {
            clearInterval(intId[i]);    
        }
    }, 10);
    obj.children[0].style.display = "block";
} 
 
function blockanimoff(obj,i) {
    clearInterval(intId[i]);
    let style = getComputedStyle(obj);
    let height = Math.trunc(Number(style.height.slice(0,-2)));
    let minheight = objHeight;
    intId[i] = setInterval(() => {
        height -= 1;
        obj.style.height = height + "px";
        if (height <= minheight)
        {
            clearInterval(intId[i]);
        }
    }, 1)
    obj.children[0].style.display = "none";
} 