function FuncionAlerta(){
    alert("Di Click");
}

function QuitarSITEC(){
    let pregunta = confirm("Seguro de quitar SITEC?")
    if(!pregunta == false){
        alert("SITEC Borrado...")
        let chi = document.getElementById("Sitec")
        chi.innerHTML = "Shiiiiaaaaale";
        console.log("Eston no se ve en la pagina, pero chale xd");
    }
}

async function TraePersona(){
    const respuesta = await fetch("https://randomuser.me/api/");
    // console.log(respuesta);
    const datos = await respuesta.json();
    // console.log(datos)
    console.log(datos.results[0].name.last)

}


// alert("Mi Primer JavaScript");
/* VARIAS LINEAS DE COMENTARIOS */