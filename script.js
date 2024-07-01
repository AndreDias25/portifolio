// new Vivus('cog', {duration: 500});

function copiarTexto(texto, buttonId) {
    navigator.clipboard.writeText(texto).then(function() {
        let button = document.getElementById(buttonId);
        let originalText = button.textContent;
        button.textContent = "Copiado!";
        setTimeout(function() {
            button.textContent = originalText;
        }, 1000);
    }, function(err) {
        console.error('Erro ao copiar: ', err);
    });
}

document.querySelector('#contatos').addEventListener('click', function() {
    document.querySelector('#contatos-section').scrollIntoView({ behavior: 'smooth' });
});