const playlist = [
"U can do it",
"We Are",
"Give it Up",
"Lost in Paradise",
"Black Catcher"
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