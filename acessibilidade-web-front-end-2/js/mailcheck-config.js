var campoEmail = document.querySelector('#email')
var sugestao = document.querySelector('#sugestao')

var domains = ['gmail.com', 'aol.com', 'outlook.com', 'alura.com.br'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org", 'br'];


campoEmail.addEventListener('blur', function() {
    Mailcheck.run({
        email: campoEmail.value,
        domains: domains,
        topLevelDomains: topLevelDomains,
        secondLevelDomains: secondLevelDomains,
        suggested: function(suggestion) {
            sugestao.style.display = 'inline-block';
            sugestao.textContent = 'Você quis dizer: ' + suggestion.full + ' ?'
            sugestao.parentNode.classList.add('contatoCampo--erro');
            campoEmail.classList.add('contatoCampo--validouErro');
        }
    });
});