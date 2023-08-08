// Adicione qualquer script JavaScript necessário aqui, como ações de formulário ou interatividade adicional.
AOS.init();


    document.getElementById("btnWhatsapp").addEventListener("click", function() {
        // Substitua o número abaixo pelo número do telefone que deseja redirecionar, incluindo o código do país.
        const phoneNumber = "+5517996295819"; // Exemplo: +55 (12) 34567-890

        // Crie o link de redirecionamento do WhatsApp
        const whatsappLink = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(5517996295819);

        // Redirecione para o link do WhatsApp
        window.location.href = whatsappLink;
    });


