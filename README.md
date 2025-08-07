# Projeto 5: Ferramentas de Consulta de CEP
---------------------------------------------
# Consultor de CEP (CLI e Interface Web)

![Status do Projeto](https://img.shields.io/badge/status-concluído-brightgreen)

Um projeto didático que implementa duas formas de consultar endereços brasileiros a partir de um CEP: uma ferramenta de linha de comando (CLI) e uma interface web responsiva.

![Projeto-5](https://github.com/user-attachments/assets/2ce7894d-6660-4501-8bb4-2fe0c89196da)


## Sobre o Projeto

Esta aplicação foi desenvolvida como parte do programa de formação Koru, com o objetivo de praticar conceitos fundamentais de desenvolvimento com Node.js e tecnologias web. O projeto utiliza a API pública [ViaCEP](https://viacep.com.br/) para obter os dados de endereço.

A aplicação é dividida em duas partes:

1.  **CLI App (`cli-app`):** Uma ferramenta de linha de comando onde o usuário pode obter informações de endereço diretamente no terminal.
2.  **Frontend App (`frontend-app`):** Uma página web amigável e responsiva com um campo de busca para consultar o CEP e exibir o resultado de forma visual.

## Funcionalidades

-   ✅ Consulta de endereço via CEP pela linha de comando.
-   ✅ Interface web intuitiva e responsiva para consulta.
-   ✅ Validação de formato de CEP para evitar buscas inválidas.
-   ✅ Tratamento de erros para CEPs não encontrados ou inválidos.
-   ✅ Estrutura de projeto organizada, separando back-end (CLI) e front-end.

## Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias:

-   **Node.js:** Ambiente de execução para a aplicação de linha de comando.
-   **HTML5:** Estrutura da página web.
-   **CSS3:** Estilização e responsividade da interface.
-   **JavaScript (ES6+):** Lógica de programação para ambas as aplicações (CLI e Frontend).
-   **ViaCEP API:** Serviço externo para a busca dos dados de endereço.
-   **Git & GitHub:** Versionamento e hospedagem do código.

## Como Usar o Projeto

Para executar este projeto em sua máquina local, siga os passos abaixo.

### Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes softwares instalados:
-   [Node.js](https://nodejs.org/en/) (que já inclui o `npm`)
-   [Git](https://git-scm.com/)

### Instalação

1.  Clone o repositório para a sua máquina:
    ```bash
    git clone [https://github.com/fernando-nunes-dev/koru-projeto-5.git](https://github.com/fernando-nunes-dev/koru-projeto-5.git)
    ```

2.  Navegue até a pasta do projeto:
    ```bash
    cd koru-projeto-5
    ```

A aplicação de front-end não requer instalação de dependências. A aplicação CLI também não, pois utiliza o `fetch` nativo do Node.js.

### Execução

#### 1. Aplicação de Linha de Comando (CLI)

Para usar a ferramenta de terminal, navegue até a pasta `cli-app` e execute o script `index.js` passando um CEP como argumento.

```bash
# Navegue até a pasta do CLI
cd cli-app

# Execute o script com o CEP desejado (apenas números)
node index.js 89201000
```
O resultado com o endereço completo será exibido diretamente no seu terminal.

#### 2. Aplicação Web (Front-end)

Para usar a interface web, não é necessário nenhum servidor. Basta abrir o arquivo HTML em seu navegador.

1.  Navegue até a pasta `frontend-app`.
2.  Abra o arquivo `index.html` diretamente no seu navegador de preferência (ex: Google Chrome, Firefox).

A página será carregada, e você poderá digitar o CEP no campo de busca para ver o resultado dinamicamente.

## Autor

**Fernando Nunes**

-   GitHub: [@fernando-nunes-dev](https://github.com/fernando-nunes-dev)

-----

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.

-----
