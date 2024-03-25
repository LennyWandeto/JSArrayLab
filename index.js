// Write your solution here!

let cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return cats.concat(name);
}

function prependCat(name) {
     return cats.toSpliced(0, 0, name);
}

function removeLastCat(name){
    return cats.slice(0,-1)
}

function removeFirstCat(name){
   return cats.slice(1)
}
