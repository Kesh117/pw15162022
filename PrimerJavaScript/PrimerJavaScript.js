function FuncionAlerta(){
    alert("Di Click");
}

function QuitarSITEC(){
    let pregunta = confirm("Seguro de quitar SITEC?")
    if(!pregunta == false){
        alert("SITEC Borrado...")
        let chi = document.getElementById("Sitec")
        chi.innerHTML = "Shiiiiaaaaale";
    }
}

// alert("Mi Primer JavaScript");
/* VARIAS LINEAS DE COMENTARIOS */