//function to make increment buton interactive
let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
function increment(){
   count = count + 1;
   countEl.innerText = count;
  // console.log(count);
}

function save(){
    let entries = count + " - ";

    saveEl.innerText += entries;
    count = 0;
    countEl.innerText = 0;
}