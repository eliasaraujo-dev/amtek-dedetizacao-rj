<script>
        $(document).ready(function(){
            $('.depoimentos-carousel').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,
                arrows: false,
                fade: true,
            });
        });
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1nqEd00iEfKjKk+nLMkAg9epn" crossorigin="anonymous"></script>
     <script>
        $(document).ready(function () {
            $('.carousel').carousel({
                interval: 5000 // Ajuste a velocidade de transição dos slides (em milissegundos)
            });
        });
    </script>
    <script>
    // Este script simula o envio do formulário.  Em um ambiente real, você precisaria
    // de um servidor para processar os dados do formulário e enviar um email.
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio real do formulário

        // Coleta os dados do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const servico = document.getElementById('servico').value;
        const mensagem = document.getElementById('mensagem').value;

        // Simula o envio dos dados para o servidor (substitua por sua lógica real)
        console.log('Dados do formulário:', { nome, email, telefone, servico, mensagem });
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);

        // Limpa o formulário
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefone').value = '';
        document.getElementById('servico').value = 'limpeza';  // Reseta o select
        document.getElementById('mensagem').value = '';
    });
    </script>
