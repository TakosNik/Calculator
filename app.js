let x, y, res;

document.getElementById("+").onclick = function(){
    x = document.getElementById("xText").value;
    y = document.getElementById("yText").value;
    x = Number(x);
    y = Number(y);
    res = x + y;
    console.log(res)
    document.getElementById("final").innerHTML = res;
}

document.getElementById("-").onclick = function(){
    x = document.getElementById("xText").value;
    y = document.getElementById("yText").value;
    x = Number(x);
    y = Number(y);
    res = x - y;
    console.log(res)
    document.getElementById("final").innerHTML = res;
}

document.getElementById("*").onclick = function(){
    x = document.getElementById("xText").value;
    y = document.getElementById("yText").value;
    x = Number(x);
    y = Number(y);
    res = x * y;
    console.log(res)
    document.getElementById("final").innerHTML = res;
}

document.getElementById("/").onclick = function(){
    x = document.getElementById("xText").value;
    y = document.getElementById("yText").value;
    x = Number(x);
    y = Number(y);
    res = x / y;
    console.log(res);
    document.getElementById("final").innerHTML = res;
}

