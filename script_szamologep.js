/* functions */
function szamotOsszead() {
    let x = +document.getElementById("elsoSzam").value;
    let y = +document.getElementById("masodikSzam").value;
    let eredmeny = x + y
    document.getElementById("eredmeny").innerHTML = (eredmeny);
}

function szamotKivon(p1, p2) {
    document.getElementById("eredmeny").innerHTML = (p1-p2);
}

function szamotSzoroz(p1, p2) {
    document.getElementById("eredmeny").innerHTML = (p1*p2);
}

function szamotOszt(p1, p2) {
    document.getElementById("eredmeny").innerHTML = (p1/p2);
}

function gyokotVon(p1) {
    document.getElementById("eredmeny").innerHTML = (Math.sqrt(p1));
}

function pirosHatter(){
    document.body.style.background = "red";  
}

function kekHatter(){
    document.body.style.background = "blue";  
}

function zoldHatter(){
    document.body.style.background = "green";  
    document.body.style.color = "cyan"
}


