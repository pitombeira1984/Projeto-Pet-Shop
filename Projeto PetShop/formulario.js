document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Resposta da API:', result);
                alert('Formulário enviado com sucesso!');
                form.reset();
            } else {
                alert('Erro ao enviar o formulário. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Ocorreu um erro inesperado. Verifique sua conexão com a internet e tente novamente.');
        }
    });
});

