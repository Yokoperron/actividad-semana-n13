function agregar(){
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let tipo = document.getElementById("tipo").value;
    let email = document.getElementById("email").value;
    let direccion = document.getElementById("direccion").value;
    if(nombre==="" || telefono===""||tipo===null || email===""){
        alert("completa todos los campos")
    }
    else{
        let contacto={
        nombre:nombre,
        telefono:telefono,
        tipo:tipo,
        email:email,
        direccion:direccion
        };
        let contactos =JSON.parse(localStorage.getItem("contactos"));
        if(contactos ===null){
            contactos=[];
        }
        contactos.push(contacto);
        
        localStorage.setItem("contactos",JSON.stringify(contactos));
        alert("Contacto agregado")
    }
    mostrar();
    
}

function mostrar(){
    let contactos =JSON.parse(localStorage.getItem("contactos"));
    let html=""
    contactos.forEach((c,i) =>{
        html+=`
        <div class="contenedor3">
            <button onclick="eliminar(${c,i})">x</button>
            <h1>${c.nombre}</h1>
            <p>fono: ${c.telefono}</p>
            <p>email: ${c.email}</p>
            <p>tipo: ${c.tipo}</p>
            <p>direccion:${c.direccion}</p>
        </div>
        `;
    })
    document.getElementById("resultado").innerHTML=html;
}
function eliminar(i){
    let contactos = JSON.parse(localStorage.getItem("contactos"));
    contactos.splice(i,1);
    localStorage.setItem("contactos",JSON.stringify(contactos));
    mostrar()

}