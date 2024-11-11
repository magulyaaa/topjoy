const kep=document.getElementById("kep");
const hatter=document.getElementById("hatter");
const szoveg=document.getElementById("szoveg");
let zarva=true;
const uzik=["buzi vagy","menjunk haza","dupla sajtburger","menjunk cigizni","sajtos tripla gyros kifliben csípős szósszal hagyma nélkül"]

hatter.addEventListener("click", async function(){
    if(zarva===true){
        for (let index = 0; index < 11; index++) {
            kep.src=`images/bottlecap_${index}.png`;
            await new Promise(pr=>setTimeout(pr, 13));

        }
        const randomIndex=Math.floor(Math.random()*uzik.length)
        szoveg.textContent=uzik[randomIndex]
        zarva=false;
    }
    else{
        szoveg.textContent=""
        for (let index = 10; index >=0; index--) {
            kep.src=`images/bottlecap_${index}.png`;
            await new Promise(pr=>setTimeout(pr, 13));
        }
        zarva=true;
    }
});