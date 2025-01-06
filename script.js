document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um evento para o envio do formulário
    document.getElementById('form').addEventListener('submit', function(event) {
        // Impede que o formulário seja enviado de forma tradicional (evita recarregar a página)
        event.preventDefault();  

        // Coleta o valor do serviço selecionado (radio button)
        const serviceName = document.querySelector('input[name="serviceName"]:checked').value;
        
        // Coleta o valor do campo de texto "Outro Serviço" (se houver)
        const otherService = document.getElementById('otherService').value;
        
        // Coleta o valor da descrição do serviço
        const productDescription = document.getElementById('productDescription').value;
        
        // Coleta o valor do serviço selecionado para o preço (radio button)
        const productPrice = document.querySelector('input[name="servicePrice"]:checked').value;
        
        // Coleta o valor da disponibilidade para venda (select)
        const productAvailability = document.getElementById('productAvailability').value;

        // Coleta o valor digitado no campo "Outro Valor"
        const otherPrice = document.getElementById('otherPrice').value;

        // Exibe os dados coletados no console
        console.log({
            serviceName: serviceName,
            otherService: otherService,
            productDescription: productDescription,
            productPrice: productPrice,
            productAvailability: productAvailability,
            otherPrice: otherPrice
        });
    });
});