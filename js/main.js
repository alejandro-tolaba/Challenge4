//Guarda el nombre
function guardarNombre() {
let inputPlayer1 = document.getElementById("nameInput1").value;
localStorage.setItem("namePlayer1", inputPlayer1);
}