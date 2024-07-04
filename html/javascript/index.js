document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('formulario');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var pesoInput = document.getElementById('peso');
        var alturaInput = document.getElementById('altura');

        var peso = Number(pesoInput.value);
        var altura = Number(alturaInput.value);

        if (altura > 0 && peso > 0) {
            var imc = calcularIMC(peso, altura);
            var mensagem = `Seu IMC é ${imc.toFixed(2)}.`;

            if (imc < 17) {
                mensagem += " Muito abaixo do peso.";
            
                
            } else if (imc >= 17 && imc <= 18.4) {
                mensagem += " Abaixo do peso.";
            } else if (imc > 18.4 && imc <= 24.9) {
                mensagem += " Peso normal.";
            } else if (imc > 24.9 && imc <= 29.9) {
                mensagem += " Acima do peso.";
            } else if (imc > 29.9 && imc <= 34.9) {
                mensagem += " Obesidade Grau I.";
            } else if (imc > 34.9 && imc <= 39.9) {
                mensagem += " Obesidade Grau II.";
                
            } else {
                mensagem += " Obesidade Grau III.";
            }

            mostrarResultado(mensagem, true);
        } else {
            mostrarResultado('Dados inválidos. Por favor, tente novamente.', false);
        }

        form.reset(); // Limpa os campos do formulário após processar
    });

    function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    }

    function mostrarResultado(msg, isValid) {
        var resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = ''; 

        var paragrafo = document.createElement('p');
        paragrafo.textContent = msg;

        if (!isValid) {
            paragrafo.classList.add('mensagem-erro');
        }

        resultadoDiv.appendChild(paragrafo);
    }
});
