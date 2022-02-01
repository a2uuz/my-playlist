const playlist = [
"ناصر القطامي",
"علي عبدالله جابر",
"ياسر الدوسري",
"سعود الشريم",
];

function music(array){
 let items = '';
  for(let i = 0; i < array.length; i++){
    items+= `<li>${array[i]}</li>`;
  }
  return items;
}

document.querySelector('main')
.innerHTML = `<ol>${music(playlist)}</ol>`;