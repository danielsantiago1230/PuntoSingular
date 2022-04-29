//Me parecio emocionante resolver los problemas con un entorno visual, por ende cree el siguiente codigo

/*------------------ejercicio1---------------------------------------------------------- */
let input;
const handleChange=(event)=>{
    const [...arrayPalabra]=event.target.value
    input=arrayPalabra;
}

const handleSubmit=(event)=>{
    const arrayPalabra=input;
    const arrayPalabraOrdenada=[...arrayPalabra].sort(); //js lo ordena alfabeticamente con sort 
    
    let palabraOrdenada="";
    let conteoPalabra="";
    for (let i = 0; i < arrayPalabra.length; i++) {
        let cont=0;
        if(!conteoPalabra.includes(arrayPalabra[i])){
            for (let j = 0; j < arrayPalabra.length; j++) {
                if(arrayPalabra[i]==arrayPalabra[j]){
                    cont++;
                }
            }
            if(conteoPalabra===""){
                conteoPalabra+=arrayPalabra[i]+"->"+cont;
            }
            else{
                conteoPalabra+=","+arrayPalabra[i]+"->"+cont;
            }
        }
        palabraOrdenada+=arrayPalabraOrdenada[i];
    }
    console.log(conteoPalabra,palabraOrdenada); 
    
    let respuesta=document.querySelector("#respuesta");
    respuesta.innerHTML=`[${conteoPalabra}][${palabraOrdenada}]`
    
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

let input3;
const handleChange3=(event)=>{
    const [...contraseña]=event.target.value
    input3=contraseña;
}

const handleSubmit3=(event)=>{
    // Una vez recibida la contraseña ingresada procederemos a el filtrado que se va ir dando en cascada si no es modificado el elemento [0,0,0,0,0,0] deberá presentar contraseña valida y sino un mensaje de los requisitos para la contraseña 
    let validez=[0,0,0,0,0,0] 
    const contraseña=input3;


    let mayusContraseña=[];
    let simbolos=["*","_","-", "¿", "¡", "?", "#", "$"];
    const esNumero=(a)=>{
        return !isNaN(a)
    }

    /* Inicio del primer filtro corresponde a validez[0], si pasa validez no se modificará */
    if(7<contraseña.length && contraseña.length<16){
       
        /* filtro de los espacios en blanco le  corresponde el validez[1] */
        if(contraseña.includes(" ")){
            validez[1]=1;
            console.log("Error la contraseña no puede tener espacios en blanco");
        }
       
        /*Filtro 2 mayusculas minimo */
        
        let contMayus=0;
        for (let j = 0; j < contraseña.length; j++) {
            if(contraseña[j].toUpperCase()===contraseña[j]){
                contMayus++;
            } 
        }
        if(contMayus<2){
            validez[2]=1;
            console.log("Error la contraseña debe tener 2 Mayusculas");
        }
        console.log(contMayus,contraseña);

        /* Aqui estaremos en el filtro de simbolos, si no contiene almenos un simbolo especial validez[3]=1 */

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
            validez[3]=1;
        }

        /*filtro de repeticion de numero consecutivo validez[4] y almenos 3 numeros validez[5] */
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
                validez[4]=1;
                if(num<3){
                    console.log("Error la contraseña debe terner almenos 3 numeros");
                    validez[5]=1;
                }
            }
            else if(num<3){
                console.log("Error la contraseña debe terner almenos 3 numeros");
                validez[5]=1;
            }
        }
        else if(num==0){
            console.log("Error la contraseña debe terner almenos 3 numeros");
            validez[5]=1;
        }
    }


    /*la contraseña o es superior a 15 o es inferior a 8 */
    else{
        validez[0]=1;
        
        /* validez espacio valiz[1] */
        for (let j = 0; j < contraseña.length; j++) {
            if(contraseña[j]===" "){
                console.log("Error la contraseña no puede tener espacios en blanco");
                validez[1]=1;
                break;
            }
            mayusContraseña.push(contraseña[j].toUpperCase());
            
        }
        /*validez mayuscula validez[2] */
        let cont3=0;
        for (let i = 0; i < contraseña.length; i++) {
            if(contraseña[i]===mayusContraseña[i]){
                cont3++;
            }   
        }
        if(cont3<2){
            console.log("Error la contraseña debe tener 2 Mayusculas");
            validez[2]=1;
            
        }
        
        /*filtro de simbolos validez[3] */
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
            validez[3]=1;
        }

        /*filtro de numeros, numeros consecutivos validez[4] - menos de tres numeros validez[5]  */

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
                validez[4]=1;
                console.log("Error la contraseña no debe tener números repetidos");
                if(num<3){
                    validez[5]=1;
                    console.log("Error la contraseña debe terner almenos 3 numeros");
                }
            }
            else if(num<3){
                validez[5]=1;
                console.log("Error la contraseña debe terner almenos 3 numeros");
            }
        }
        else if(num==0){
            validez[5]=1;
            console.log("Error la contraseña debe terner almenos 3 numeros");
        }
        console.log("Error la contraseña debe tener entre 8 y 15 caracteres");  
    }
    
    /* el validador va imprimir los errores a corregir en rojo y cuando sea correcta aparecera en verde */
    
    if(validez[0]==1 || validez[1]==1 || validez[2]==1 || validez[3]==1 || validez[4]==1 || validez[5]==1){
        const point=document.querySelector("#errores");
        point.style.display="block";
        const point2=document.querySelectorAll(".validez");
        
        for (let k = 0; k < validez.length; k++) {
            if(validez[k]==1){
               
                point2[k].style.color="red";
            }
            
        }
        const point3=document.querySelector("#contraseñaValida");
        point3.style.display="none";
    }

    else if(validez[0]==0 || validez[1]==0 || validez[2]==0 || validez[3]==0 || validez[4]==0 || validez[5]==0){
        const point=document.querySelector("#contraseñaValida");
        point.style.display="block";
        
        const point2=document.querySelector("#errores");
        point2.style.display="none";
        
    }

    // ahora estaría lista para enviar al servidor si paso todos los filtros

    event.preventDefault();
}