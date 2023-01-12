// Funcionamiento del boton encriptador
var btn_encriptador = document.querySelector(".boton-encriptar");
btn_encriptador.addEventListener("click", encriptar);

// PARA ENCRIPTAR
function encriptar(e) {
     e.preventDefault();
     document.querySelector(".muneco").style.display = "none";
     document.querySelector(".mensaje-encontrado").style.display = "none";
     document.querySelector(".mensaje-encontrado2").style.display = "none";
     letra_minuscula = (document.querySelector(".caja").value).toLowerCase();
     texto_caja = letra_minuscula;
     document.querySelector(".caja-vertical").value = texto_caja
     palabra = texto_caja;
     largo = palabra.length;

     numero = 0
     definicion = ""


     for (i=0; i<largo; i++) {
          if (palabra[i] != "e" && palabra[i] != "i" && palabra[i] != "a" && palabra[i] != "o" && palabra[i] != "u") {
               definicion = definicion + palabra[i]
          }
          if (palabra[i] == "e") {
               definicion = definicion + "enter";
          }
          if (palabra[i] == "i") {
               definicion = definicion + "imes";
          }
          if (palabra[i] == "a") {
               definicion = definicion + "ai";
          }
          if (palabra[i] == "o") {
               definicion = definicion + "ober";
          }
          if (palabra[i] == "u") {
               definicion = definicion + "ufat";
          }
     }
     document.querySelector(".caja").value = null;
     document.querySelector(".caja-vertical").value = definicion;

     
}


// Boton pada desencriptar
var btn_desencriptador = document.querySelector(".boton-desencriptar")
btn_desencriptador.addEventListener("click", desencriptar )



// PARA DESENCRIPTAR
function desencriptar(e){
     e.preventDefault();
     document.querySelector(".muneco").style.display = "none";
     document.querySelector(".mensaje-encontrado").style.display = "none";
     document.querySelector(".mensaje-encontrado2").style.display = "none";

     texto_caja = document.querySelector(".caja").value;
     document.querySelector(".caja-vertical").value = texto_caja
     palabra = texto_caja;

     palabra =  palabra.replaceAll("enter", "e") 
     palabra =  palabra.replaceAll("imes", "i")
     palabra =  palabra.replaceAll("ai", "a")
     palabra =  palabra.replaceAll("ober", "o")
     palabra =  palabra.replaceAll("ufat" , "u")

     document.querySelector(".caja").value = null;
     document.querySelector(".caja-vertical").value = palabra;


}
// Funcionamiento del boton Copiar
var btn_copiar = document.querySelector(".boton-copiar");
btn_copiar.addEventListener("click", copiar);

// Para copiar
function copiar(e) {
     e.preventDefault();
     copiado = document.querySelector(".caja-vertical").value;
     navigator.clipboard.writeText(copiado);
     
}






