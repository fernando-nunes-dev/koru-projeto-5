async function consultarCep() {
    console.log("Bem-vindo ao Consultor de CEP!");

    const cep = process.argv[2];

    if (!cep || cep.length !== 8 || !/^\d+$/.test(cep)) {
        console.error("\nErro: Você precisa informar um CEP válido!");
        console.log("Uso: node index.js <apenas_os_8_numeros_do_cep>");
        console.log("Exemplo: node index.js 89201000\n");
        return;
    }

    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
    console.log(`\nBuscando informações para o CEP: ${cep}...`);

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.erro) {
            console.error("\nCEP não encontrado ou inválido. Verifique e tente novamente.");
            return;
        }

        console.log("\n--- Resultado da Consulta ---");
        console.log(`CEP: ${data.cep}`);
        console.log(`Logradouro: ${data.logradouro}`);
        console.log(`Complemento: ${data.complemento || 'Nenhum'}`);
        console.log(`Bairro: ${data.bairro}`);
        console.log(`Cidade: ${data.localidade}`);
        console.log(`Estado: ${data.uf}`);
        console.log("-----------------------------\n");

    } catch (error) {
        console.error("\nOcorreu um erro ao fazer a consulta:", error.message);
    }
}

// Executa a função principal
consultarCep();