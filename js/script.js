function verificar(){
    let textonombre = document.getElementById("nombre").value;
    let textotelefono = document.getElementById("tel").value;
    let correo = document.getElementById("correo").value;
    let textociudad = document.getElementById("ciudad").value;
    let textoregion = document.getElementById("region").value;
    let checkfavorito = document.getElementById("favorito").checked

    if(textonombre =="" || textotelefono=="" || correo=="" || textociudad==""||textoregion==""){
        window.alert("debes rellenar los campos de texto");
        return;
    }

    if(!checkfavorito){
        window.alert("debes completar el check")
    }
}

