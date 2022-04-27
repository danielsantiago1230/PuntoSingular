//Me parecio emocionante resolver los problemas con un entorno visual, por ende cree el siguiente codigo

/*------------------ejercicio1---------------------------------------------------------- */
const handleChange=(event)=>{
    // 
    const [...arrayPalabra]=event.target.value
    const aux=[...arrayPalabra].sort();
    const aux2=[...arrayPalabra].sort();
    let palabra=[];
    let respuesta=document.querySelector("#respuesta");
    let cont2=0;
    let r="";
    let r2="";

    for (let i = 0; i < arrayPalabra.length; i++) {
        let cont=0;
        for (let j = 0; j < arrayPalabra.length; j++) {
            if (aux[i]==aux2[j]) {
                cont++;
            }
        }
        if(i==0){
            palabra.push(aux[i]+"->"+cont);
            cont2=cont;
        }
        else if(i==cont2)
        {
            palabra.push(aux[i]+"->"+cont);
            cont2=cont2+cont;
        }
        
        r=aux[i];
        r2=r2.concat("",r);
    }

    respuesta.innerHTML=`[${palabra}][${r2}]`
}

const handleSubmit=(event)=>{//
    //corta con la naturaleza del submit que es recargar la pagina
    event.preventDefault();
}

/* -------------------ejercicio 2--------------------------------------------------------- */