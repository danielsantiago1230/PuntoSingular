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
/* ------------Ejercicio 2.1---------------- */
let input2;
const handleChange2=(event)=>{
    let [...inputPalabra]=event.target.value
    input2=inputPalabra
}
const handleSubmit2=(event)=>{//
    respuesta=document.querySelector("#respuesta21");
    const arrayPalabra=input2
    let palabra="";
    for (let i = 0; i < arrayPalabra.length; i++) {      
        palabra+=arrayPalabra[i];
    }
    /* regex vocal:/[aeiou]/  consonante:/[^aeiou]/  
    consonante seguida de consonante:[^aeiou](?=[^aeiou])
    */
    const silabas=/[^aeiou]*[aeiou]/gi //primer ejercicio
    const silabas2=/[aeiou][^aeiou]|[^aeiou][aeiou][^aeiou]|[^aeiou][aeiou]$/gi //segundo paso 
    //excepciones:
    const silabas3=/[^aeiou]*[aeiou]|[^aeiou][^aeiou][aeiou]/gi //ch, ll ,rr
    
    let matchPalabraSilabas=palabra.match(silabas);
    let palabraConcant=""
    for (let i = 0; i < matchPalabraSilabas.length; i++) {
        if(i===(matchPalabraSilabas.length-1)){
            palabraConcant+=matchPalabraSilabas[i];
        }
        else{
            palabraConcant+=matchPalabraSilabas[i]+"-";;
        }
            
    }
    respuesta.innerHTML=`${palabraConcant}`

    //corta con la naturaleza del submit que es recargar la pagina
    event.preventDefault();
}

/* ---------------Ejercicio 2.2 --------------------*/
let input22;
const handleChange22=(event)=>{
    let [...inputPalabra]=event.target.value
    input2=inputPalabra
}
const handleSubmit22=(event)=>{//
    respuesta=document.querySelector("#respuesta22");
    const arrayPalabra=input2
    
    let palabra="";
    for (let i = 0; i < arrayPalabra.length; i++) {      
        palabra+=arrayPalabra[i];
    }
    
    const silabas=/[aeiou][^aeiou]|[^aeiou][aeiou][^aeiou]|[^aeiou][aeiou]$/gi //segundo paso
    const silabas2=/[^aeiou]*[aeiou]|[^aeiou][^aeiou][aeiou]/gi //ch, ll ,rr
    const silabas3=/[^aeiou][^aeiou][aeiou][^aeiou]/gi // Sería la otra condición pero no me estaría saliendo
    console.log(palabra.match(silabas3));

    let matchPalabraSilabas;
    if(palabra.includes("ll")|| palabra.includes("ch") || palabra.includes("rr")){
        matchPalabraSilabas=palabra.match(silabas2);
    }
    else{
        matchPalabraSilabas=palabra.match(silabas)
    }
    
    let palabraConcant="";
    for (let i = 0; i < matchPalabraSilabas.length; i++) {
        if(i===(matchPalabraSilabas.length-1)){
            palabraConcant+=matchPalabraSilabas[i];
        }
        else{
            palabraConcant+=matchPalabraSilabas[i]+"-";;
        }
            
    }
    respuesta.innerHTML=`${palabraConcant}`
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
       
        console.log(contraseña);
        /* filtro de los espacios en blanco le  corresponde el validez[1] */
        if(contraseña.includes(" ")){
            validez[1]=1;
            console.log("Error la contraseña no puede tener espacios en blanco");
        } 
       
        /*Filtro 2 mayusculas minimo */
        
        let contMayus=0;
        for (let j = 0; j < contraseña.length; j++) {
            if(!esNumero(contraseña[j])){
                if(contraseña[j].toUpperCase()===contraseña[j]){
                    contMayus++;
                } 
            } 
        }
        if(contMayus<2){
            validez[2]=1;
            console.log("Error la contraseña debe tener minimo 2 Mayusculas");
        }

        /* Aqui estaremos en el filtro de simbolos, si no contiene almenos un simbolo especial validez[3]=1 */
        let contSimbolos=0;
        for (let i = 0; i < simbolos.length; i++) {
            if(contraseña.includes(simbolos[i])){
                contSimbolos++;
            }
        }
        if(contSimbolos===0){
            validez[3]=1;
            console.log("La contraseña tener almenos alguno de los siguientes caracteres especiales (* _ - ¿ ¡ ? # $)");
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
        console.log(contraseña);
        validez[0]=1;
        /* filtro de los espacios en blanco le  corresponde el validez[1] */
        if(contraseña.includes(" ")){
            validez[1]=1;
            console.log("Error la contraseña no puede tener espacios en blanco");
        } 
       
        /*Filtro 2 mayusculas minimo */
        
        let contMayus=0;
        for (let j = 0; j < contraseña.length; j++) {
            if(!esNumero(contraseña[j])){
                if(contraseña[j].toUpperCase()===contraseña[j]){
                    contMayus++;
                } 
            } 
        }
        if(contMayus<2){
            validez[2]=1;
            console.log("Error la contraseña debe tener minimo 2 Mayusculas");
        }

        /* Aqui estaremos en el filtro de simbolos, si no contiene almenos un simbolo especial validez[3]=1 */
        let contSimbolos=0;
        for (let i = 0; i < simbolos.length; i++) {
            if(contraseña.includes(simbolos[i])){
                contSimbolos++;
            }
        }
        if(contSimbolos===0){
            validez[3]=1;
            console.log("La contraseña tener almenos alguno de los siguientes caracteres especiales (* _ - ¿ ¡ ? # $)");
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
        const point3=document.querySelector("#contraseñaValida");
        point3.style.display="none";//siempre que entre apague contenedor decontraseña valida
        const point=document.querySelector("#errores");
        point.style.display="block";// active contedor errores
        const point2=document.querySelectorAll(".validez");//provemos validez
        
        for (let k = 0; k < validez.length; k++){
            point2[k].style.color="";//setea al valor incial y despues se fija si lo marca rojo
            if(validez[k]===1){
                point2[k].style.color="red";
            } 
        }
        
    }

    else if(validez[0]==0 && validez[1]==0 && validez[2]==0 && validez[3]==0 && validez[4]==0 && validez[5]==0){
        const point=document.querySelector("#contraseñaValida");
        point.style.display="block";
        
        const point2=document.querySelector("#errores");
        point2.style.display="none";
        
    }

    // ahora estaría lista para enviar al servidor si paso todos los filtros

    event.preventDefault();
}