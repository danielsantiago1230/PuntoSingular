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
const handleChange2=(event)=>{
    const [...arrayPalabra]=event.target.value
    let aux=[];
    const transformacion=()=>{
        for (let j = 0; j < arrayPalabra.length; j++) {
            switch (arrayPalabra[j]) {
                case "a":
                    aux.push("0");
                    break;
                case "e":
                    aux.push("0");
                    break;
                case "i":
                    aux.push("0");
                    break;
                case "o":
                    aux.push("0");
                    break;
                case "u":
                    aux.push("0");
                     break;
                default:
                    aux.push("1");
                    break;
            }
        }
    }
    transformacion();
    console.log(arrayPalabra);
    console.log(aux);
    let aux2=[];
    let aux3;
    let r="",r2="";

    for (let i = 0; i < arrayPalabra.length; i++) {
        if(aux[i]==="0" && aux[i+1]==="1" && aux[i+2]==="0"){
            r=arrayPalabra[i+1];
            r2=r2.concat(r,arrayPalabra[i+2])
            aux2.push(r2);
            r="";
            r2="";
            console.log(aux2);
        } 
        else if(aux[0]==="0"){
            aux3=[arrayPalabra[0]];
        }
        else if(aux[0]==="1"){
            r=arrayPalabra[0];
            r2=r2.concat(r,arrayPalabra[1])
            aux3=[r2];
            r="";
            r2="";
        }        
    }
    aux2.splice(0,0,aux3[0])
    console.log(aux2);
}
const handleSubmit2=(event)=>{//
    //corta con la naturaleza del submit que es recargar la pagina
    event.preventDefault();
}