$(function()
{
    $('.btnAceptar').click(function(){
        
        
        if(!$('.txtRut').val())
        {
            alert('Falta el rut');
            $('.txtRut').focus();
        }
        if(!$('.txtDv').val())
        {
            alert('Falta el Dv');
            $('.txtDv').focus();
        }
        if(!$('.txtNombre').val())
        {
            alert('Falta el Nombre');
            $('.txtNombre').focus();
        }
    });
    $('.btnLimpiar').click(function(){
        $('.txtRut,.txtDv,.txtNombre').val('');
        $('.txtRut').focus();
    });

    // definir patrones de caracteres a permitir
    let numeros = '12334567890';
    $('.txtRut').keypress(function(e){
        //Obtiene el codigo del caracter presionado y es convertido a el mismo caracter
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter)<0) //verifica si el caracter está en el patrón
            return false; //evita que se escriba el caracter presionado
    });
    let dv = numeros + 'Kk';
    $('.txtDv').keypress(function(e){
        //Obtiene el codigo del caracter presionado y es convertido a el mismo caracter
        let caracter = String.fromCharCode(e.which);
        if(dv.indexOf(caracter)<0) //verifica si el caracter está en el patrón
            return false; //evita que se escriba el caracter presionado
    });
    let letras = 'qwertyuiopñlkjhgfdsazxcvbnmQWERTYUIOPÑLKJGFDSAZXCVBNMÁÉÍÓÚáéíóú ';
    $('.txtNombre').keypress(function(e){
        //Obtiene el codigo del caracter presionado y es convertido a el mismo caracter
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter)<0) //verifica si el caracter está en el patrón
            return false; //evita que se escriba el caracter presionado
    });
})
