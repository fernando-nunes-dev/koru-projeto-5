document.addEventListener('DOMContentLoaded', () => {
    
    const cepInput = document.getElementById('cep-input');
    const searchBtn = document.getElementById('search-btn');
    const resultBox = document.getElementById('result-box');

    searchBtn.addEventListener('click', buscarCep);

    cepInput.addEventListener('keyup', (event) => {
        if (event.key === "Enter") {
            buscarCep();
        }
    });

    // Função para buscar o CEP
    async function buscarCep() {
        const cep = cepInput.value.replace(/\D/g, '');
        
        if (cep.length !== 8) {
            resultBox.innerHTML = `<p style="color: red;">CEP inválido. Digite 8 números.</p>`;
            return;
        }

        const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
        resultBox.innerHTML = `<p>Buscando...</p>`;

        try {
            const response = await fetch(apiUrl);
            
            if (!response.ok) {
                throw new Error('Não foi possível conectar à API.');
            }

            const data = await response.json();

            if (data.erro) {
                resultBox.innerHTML = `<p style="color: red;">CEP não encontrado.</p>`;
            } else {
                resultBox.innerHTML = `
                    <p><strong>CEP:</strong> ${data.cep}</p>
                    <p><strong>Logradouro:</strong> ${data.logradouro || 'Não informado'}</p>
                    <p><strong>Bairro:</strong> ${data.bairro || 'Não informado'}</p>
                    <p><strong>Cidade:</strong> ${data.localidade}</p>
                    <p><strong>Estado:</strong> ${data.uf}</p>
                `;
            }
        } catch (error) {
            resultBox.innerHTML = `<p style="color: red;">Ocorreu um erro ao buscar o CEP.</p>`;
            console.error(error);
        }
    }
});