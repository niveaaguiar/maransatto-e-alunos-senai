//função para totalizar valor de assinatura mensal
function totaliza()
{
    total = 0.00;
    //plano mensal
    if(document.form.planos[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if(document.form.planos[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if(document.form.planos[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if(document.form.premiere[0].checked)
        total = total + 60.00;
    //Premiere controle
    if(document.form.premiere[1].checked)
        total = total + 80.00;
    document.form.total.value = total.toFixed(2);
}

function validarNome(nome, showAlert = true) {
    try {
        let value = nome ?? document.getElementById("nome").value;
        let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
        if (!re.test(value)) {
            // campo inválido, retorna false para o formulário não ser submetido
            if (showAlert) {
                alert('Nome Inválido');
            }
            document.form.nome.focus();
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}


function validarCPF() {
    cpf = document.getElementById('cpf').value;

    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
        return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) return false
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ) return false
    return true
}

function confereCPF() {
    const valido = validarCPF();
    if (!valido) {
        alert('CPF Inválido');
        document.form.cpf.focus();
    }
    return valido;
}

function validarEmail(){
    email = document.getElementById('email').value;
    var check=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (email.search(check) == -1) {
        alert('E-mail inválido');
        document.form.email.focus();
        return false;
    }
    return true;
}

function validarTudo() {
    const formularioValido = validarNome()
                            && confereCPF()
                            && validarEmail();

    if (formularioValido) {
        document.getElementById('butassin').disabled = false;
    }
}

var contador = 1;

setInterval(function() {
    document.getElementById('tempo').innerText = contador;
    contador++;
}, 1000);

function verficarSenhaDoUsuario() {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if (login === 'Usuario' && senha === 'Abc$123') {
        alert('Parabéns! Assinatura Realizada');
    } else {
        alert('Usuário ou Senha Incorreto');
    }
}