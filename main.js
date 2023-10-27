var data;

function Conexion(){
    fetch("http://localhost:3000")
    .then(response => response.json())
    .then(json => {console.log(json);
        data = json;
})}


function Show(){
    var main=document.getElementById("Mostrar");
    main.innerHTML = data[0].clase;
}
