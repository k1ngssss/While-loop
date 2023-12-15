//10 primeiros números naturais 
let numn = "";

for (let n = 1; n < 11; n++) {
  numn += n + ";";
}

document.getElementById("numn").innerHTML = numn;


//10 primeiros números pares 
let nump = "";
let p = 2;

do {
    nump += p + ";";
    p++;
    p < 21;
     
}
while (p % 2 == 0);

document.getElementById("nump").innerHTML = nump;
