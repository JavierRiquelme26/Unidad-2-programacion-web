$(function()
{
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/
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
        if(! esValidoElRut($('.txtRut').val(),$('.txtDv').val()))
        {
            alert('El rut no es válido');
            $('.txtRut').focus();
        }
        if(!$.trim($('.txtNombre').val()))
        {
            alert('Falta el Nombre');
            $('.txtNombre').focus();
        }
        if(!emailRegex.test($('.txtEmail').val()))
        { //verifica que el formato del correo este correcto
            alert('El formato del correo no es correcto');
            $('.txtEmail').focus();
        }
    });
    $('.btnLimpiar').click(function(){
        $('.txtRut,.txtDv,.txtNombre,.txtEmail').val('');
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
    function esValidoElRut(Rut,Digito)
    {
        Digito = Digito.toUpperCase();
		var longitud        = Rut.length;
		var factor          = 2;
		var sumaProducto    = 0;
		var con             = 0;
		var caracter     	= 0;
 
		for( con=longitud-1; con>=0; con--)
		{
			caracter = Rut.charAt(con);
			sumaProducto += (factor * caracter);
			if (++factor > 7)
				factor=2;		
		}
 
        var digitoAuxiliar	= 11-(sumaProducto % 11);   
        var caracteres		= "-123456789K0";
        var digitoCaracter= caracteres.charAt(digitoAuxiliar);
        return digitoCaracter == Digito ? 1 : 0;            
    } 
})
