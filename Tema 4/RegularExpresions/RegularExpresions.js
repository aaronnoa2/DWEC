validarUsername = new RegExp("^((([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\\.([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\\d|-|\\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\\d|-|\\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$");
validarTelefono = new RegExp("^6[0-9]{8}$");
validadDNI = new RegExp("^[0-9]{8}[A-Z]$");
validarEmail = new RegExp("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$");


function validaDNI() {
    if(document.getElementById('DNI').value.match(validadDNI)){
        document.getElementById('corazondni').style.visibility = 'visible';
        document.getElementById('aspadni').style.visibility = 'hidden';
    }
    else{
        document.getElementById('corazondni').style.visibility = 'hidden';
        document.getElementById('aspadni').style.visibility = 'visible';
    }
}

function validaEmail() {
    if(document.getElementById('Email').value.match(validarEmail)){
        document.getElementById('corazonemail').style.visibility = 'visible';
        document.getElementById('aspaemail').style.visibility = 'hidden';
    }
    else{
        document.getElementById('corazonemail').style.visibility = 'hidden';
        document.getElementById('aspaemail').style.visibility = 'visible';
    }
}

function validaTelefono() {
    if(document.getElementById('Telefono').value.match(validarTelefono)){
        document.getElementById('corazontelefono').style.visibility = 'visible';
        document.getElementById('aspatelefono').style.visibility = 'hidden';
    }
    else{
        document.getElementById('corazontelefono').style.visibility = 'hidden';
        document.getElementById('aspatelefono').style.visibility = 'visible';
    }
}

