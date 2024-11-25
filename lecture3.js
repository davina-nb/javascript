function AddNumbers(){
    let a = 10;
    let b = 100;
    return a+b;
    console.log(a+b);

    document.getElementById("Heading-two").innerText = (a+b);
    document.getElementById("para1").innerHTML = "<h1>this is final sum</h1>"
}
AddNumbers();

function AddNumbers(a,b){
    console.log(a+b);
}
AddNumbers(20,30);

document.getElementById("btn1").addEventListener('click', AddNumbers);

