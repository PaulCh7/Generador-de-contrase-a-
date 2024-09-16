let cantidad = document.getElementById('cantidad');
let botonG = document.getElementById('generar');
let botonE = document.getElementById('borrar')
let contrasena = document.getElementById('contrasena'); 
let validar = document.getElementById('textoVariable');

const cadenaMayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const cadenaMin = 'abcdefghijklmnopqrstuvwxyz';
const cadenaNum = '0123456789';
const cadenaEsp = '/@#$%^&()*_+=';
const cadenaCaracteres = cadenaMayus + cadenaMin + cadenaNum + cadenaEsp;

function generar(){

     let numeroDigitado = parseInt (cantidad.value);
    
     if( numeroDigitado < 8){
         alert("La cantidad de caracteres tiene que ser mayor que 8");
    }

     let password = '';
     for(let i=0; i < numeroDigitado; i++ ){
     let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
    
         password+=caracterAleatorio;
    }
      contrasena.value = password;
      Validarpassword(password);
     }

function borrar(){
    contrasena.value = '';
    cantidad.value = '';
}
function Validarpassword(password){
    const valMay = /[A-Z]/.test(password);
    const valMin = /[a-z]/.test(password);
    const valNum = /\d/.test(password);
     const valEsp = /[/@#$%^&()*_+=]/.test(password);
    if (!valMay || !valMin || !valNum || !valEsp) { 
        alert("Contraseña Vulnerable");
 }  else {
        alert("Contraseña Segura");
     }
} 