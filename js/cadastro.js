// Função para formatar o telefone com separadores automáticos
function formatarTelefone() {

    // Obtém o valor atual do campo de telefone

    var telefone = document.getElementById("telefone").value;

    // Remove todos os caracteres que não são números

    telefone = telefone.replace(/\D/g, '');


    // Formata o número com os separadores

    var formatted = '';
    if (telefone.length > 0) {
      formatted += '(' + telefone.substring(0, 2) + ') ';
    }

    if (telefone.length >= 3) {
      formatted += telefone.substring(2, 7) + '-';
    }

    if (telefone.length >= 8) {
      formatted += telefone.substring(7, 11);
    }
    // Insere o valor formatado no campo de telefone

    document.getElementById("telefone").value = formatted;
}

// Adiciona um listener para o evento "input" do campo de telefone

document.getElementById("telefone").addEventListener("input", formatarTelefone);