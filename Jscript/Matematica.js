function FcnCalculo() {
    //Variables
    var Ln_Numero1=parseFloat(document.getElementById('Txt_Numero1').value);
    var Ln_Numero2=parseFloat(document.getElementById('Txt_Numero2').value);
    var Lv_Operador =document.getElementById('Sel_Operador').value;

    //Referenciar para in y para el Out
    var Ln_Result = document.getElementById('Div_Result');
    var Ln_Result = document.getElementById('Txt_Result');

    //Estructura if
    if(isNaN(Ln_Numero1)) {//si el valor ingresado es numero o texto
        Div_Result.innerHTML ="Ingresó texto, no se puede calcular"; //Que le asigne el mensaje ingresado
        Txt_Result.innerHTML ="Ingresó texto, no se puede calcular"; //Que le asigne el mensaje ingresado
    }
    else if (isNaN(Ln_Numero2)){
        Div_Result.innerHTML ="Ingresó texto, no se puede calcular"; //Que le asigne el mensaje ingresado
        Txt_Result.innerHTML ="Ingresó texto, no se puede calcular"; //Que le asigne el mensaje ingresado
    }else{
        if (Lv_Operador == '+'){
            Ln_Result = Ln_Numero1 + Ln_Numero2;
        }else{
            Ln_Result = Ln_Numero1 - Ln_Numero2;
        }
        Div_Result.innerHTML = 'El resultado es: ' + Ln_Result;
        Txt_Result.innerHTML = 'El resultado es: '+ Ln_Result;
    } 
}
window.onbeforeunload = function () {
    return "Gracias, no vuelva pronto."
}