
const myColor = ["Red", "Green", "White", "Black"];
let print_string = myColor.toString();
document.getElementById('Demo').innerHTML = print_string;
document.getElementById('Demo').style.color = "blue";
document.getElementById('Demo').style.fontSize = "30px";
document.getElementById('Demo').style.textAlign = "center";
document.getElementById('Demo').style.textDecoration = "underline 2px red";


const Color = ["Red", "Green", "White", "Black"];
document.getElementById('Demo_1').innerHTML = Color.join(" + ");
document.getElementById('Demo_1').style.color = "red";
document.getElementById('Demo_1').style.fontSize = "30px";
document.getElementById('Demo_1').style.textAlign = "center";
document.getElementById('Demo_1').style.textDecoration = "underline 2px blue";

