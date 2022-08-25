var nome = window.document.getElementById('nome');
var nomeOk = false;
var email = window.document.getElementById('email');
var emailOk= false;
var telefone = window.document.getElementById('telefone');
var telefoneOK = false;
var assunto = window.document.getElementById('assunto');
var assuntoOk = false;
var mapa =window.document.getElementById('mapa');

// nome.style.width = '100%';

function validarNome() {
    let txtNome = document.getElementById('txtNome')
    if (nome.value.length < 2) {
        txtNome.innerHTML = 'Nome inválido!';    //inner.HTML ~  Insere no HTML o texto.
        txtNome.style.color = 'red';
        nomeOk = false;
    } else {
        txtNome.innerHTML = 'Nome válido!';
        txtNome.style.color = 'green';
        nomeOk = true;
    }
}

function validarEmail() {
    let txtEmail = document.getElementById('txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email inválido!';
        txtEmail.style.color = 'red';
    } else {
        txtEmail.innerHTML = 'Email válido!';
        txtEmail.style.color = 'green';
        emailOk = true;
    }
}

function validarTelefone() {
    let txtTelefone = document.getElementById('txtTelefone')
    if (telefone.value.length < 11) {
        txtTelefone.innerHTML = 'Telefone inválido!';   
        txtTelefone.style.color = 'red';
    } else {
        txtTelefone.innerHTML = 'Telefone válido!';
        txtTelefone.style.color = 'green';
        telefoneOk = true;
    }
}

function validarAssunto() {
    let txtAssunto = document.getElementById('txtAssunto')
    if (assunto.value.length > 1000) {
        txtAssunto.innerHTML = 'Você excedeu o número máximo de 1000 caracteres.';
        txtAssunto.style.color = 'red';
    } else {
        txtAssunto.innerHTML = 'Campo preenchido corretamente!';
        txtAssunto.style.color = 'green';
        assuntoOk = true;
    }
}

function enviar() {
    if (nomeOk = true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Preencha corretamente!');
    }
}

function mapaZoom(){
    mapa.style.width = '600px';
    mapa.style.height = '450px';
}

function mapaNormal(){
    mapa.style.width = '400px';
    mapa.style.height = '250px';
}
