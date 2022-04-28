//Me parecio emocionante resolver los problemas con un entorno visual, por ende cree el siguiente codigo

/*------------------ejercicio1---------------------------------------------------------- */
let on;
const handleChange=(event)=>{
    const [...arrayPalabra]=event.target.value
    on=arrayPalabra;
}

const handleSubmit=(event)=>{
    const arrayPalabra=on;
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
    //corta con la naturaleza del submit que es recargar la pagina
    event.preventDefault();
}

/* -------------------ejercicio 2--------------------------------------------------------- */
let on2;
const handleChange2=(event)=>{
    const [...arrayPalabra]=event.target.value
    on2=arrayPalabra;
}
const handleSubmit2=(event)=>{//
    arrayPalabra=on2;
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
        //condicion para el 2.1
        if(aux[i]==="0" && aux[i+1]==="1" && aux[i+2]==="0"){
            r=arrayPalabra[i+1];
            r2=r2.concat(r,arrayPalabra[i+2])
            aux2.push(r2);
            r="";
            r2="";
            console.log(aux2);
            if(aux[0]==="0"){
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


    }
    aux2.splice(0,0,aux3[0])
    console.log(aux2);

    //corta con la naturaleza del submit que es recargar la pagina
    event.preventDefault();
}

/*---------------------------------Ejercicio 3-------------------------------------------- */
let on3;
const handleChange3=(event)=>{
    const [...contraseña]=event.target.value
    on3=contraseña;
}

const handleSubmit3=(event)=>{
    const contraseña=on3;
    let mayusContraseña=[];
    let simbolos=["*","_","-", "¿", "¡", "?", "#", "$"];
    const esNumero=(a)=>{
        return !isNaN(a)
    }
    console.log(contraseña);
    if(7<contraseña.length && contraseña.length<16){
        
        for (let j = 0; j < contraseña.length; j++) {
            if(contraseña[j]===" "){
                console.log("Error la contraseña no puede tener espacios en blanco");
                break;
            }
            mayusContraseña.push(contraseña[j].toUpperCase());
        }
        
        let cont3=0;
       for (let i = 0; i < contraseña.length; i++) {
            if(contraseña[i]===mayusContraseña[i]){
                cont3++;
            }   
        }
        
        if(cont3<2){
            console.log("Error la contraseña debe tener 2 Mayusculas");  
        }

        let contadorSimbolos=0;
        for (let z = 0; z < contraseña.length; z++) {
            for (let x = 0; x < contraseña.length; x++) {
                if(contraseña[z]===simbolos[x]){
                    contadorSimbolos++;
                }
            }             
        }
        if(contadorSimbolos<1){
            console.log("Debe contener al menos 1 carácter de esta lista (* _ - ¿ ¡ ? # $)");
        }

        let repNum=0,num=0;
        for (let x = 0; x < contraseña.length; x++) {
            if(esNumero(contraseña[x])){
                if(contraseña[x]===contraseña[x+1]){
                    repNum++;
                }
                num++;
            }
            
        }
        if(num!=0){
            if(repNum!=0){
                console.log("Error la contraseña no debe tener números repetidos");
                if(num<3){
                    console.log("Error la contraseña debe terner almenos 3 numeros");
                }
            }
            else if(num<3){
                console.log("Error la contraseña debe terner almenos 3 numeros");
            }
        }
        else if(num<3){
            console.log("Error la contraseña debe terner almenos 3 numeros");
        }
    }
    else{
        
        for (let j = 0; j < contraseña.length; j++) {
            if(contraseña[j]===" "){
                console.log("Error la contraseña no puede tener espacios en blanco");
                break;
            }
            mayusContraseña.push(contraseña[j].toUpperCase());
            
        }
        
        let cont3=0;
        for (let i = 0; i < contraseña.length; i++) {
            if(contraseña[i]===mayusContraseña[i]){
                cont3++;
            }   
        }
        if(cont3<2){
            console.log("Error la contraseña debe tener 2 Mayusculas");
            
        }
    
        let contadorSimbolos=0;
        for (let z = 0; z < contraseña.length; z++) {
            for (let x = 0; x < contraseña.length; x++) {
                if(contraseña[z]===simbolos[x]){
                    contadorSimbolos++;
                }
            }             
        }

        if(contadorSimbolos<1){
            console.log("Debe contener al menos 1 carácter de esta lista (* _ - ¿ ¡ ? # $)");
        }

        let repNum=0,num=0;
        for (let x = 0; x < contraseña.length; x++) {
            if(esNumero(contraseña[x])){
                if(contraseña[x]===contraseña[x+1]){
                    repNum++;
                }
                num++;
            }
            
        }
        if(num!=0){
            if(repNum!=0){
                console.log("Error la contraseña no debe tener números repetidos");
                if(num<3){
                    console.log("Error la contraseña debe terner almenos 3 numeros");
                }
            }
            else if(num<3){
                console.log("Error la contraseña debe terner almenos 3 numeros");
            }
        }
        else if(num<3){
            console.log("Error la contraseña debe terner almenos 3 numeros");
        }
        console.log("Error la contraseña debe tener entre 8 y 15 caracteres");

        
    }

    event.preventDefault();
}