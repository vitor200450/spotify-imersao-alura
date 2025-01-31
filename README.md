# Spotify Clone

Este projeto é um clone da interface do Spotify, desenvolvido durante a segunda edição da Imersão Front-End da Alura.

\#Imersao-front-end-alura

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

-   `api-artists/`: Contém o arquivo JSON com os dados dos artistas.
-   `index.html`: O arquivo HTML principal que estrutura a página.
-   `README.md`: Arquivo com informações sobre o projeto.
-   `script.js`: Arquivo JavaScript para adicionar funcionalidades interativas.
-   `src/assets/`: Contém ícones e outros recursos visuais.
-   `src/styles/`: Contém os arquivos CSS para estilizar a página.

## Tecnologias Utilizadas

-   HTML
-   CSS
-   JavaScript
-   JSON Server

## Como Executar o Projeto

1. Clone o repositório para o seu ambiente local.
2. Instale o `json-server` globalmente, se ainda não o tiver:
    ```bash
    npm install -g json-server
    ```
3. Navegue até o diretório api-artists e inicie o json-server:
   `json-server --watch artists.json`
4. Abra o arquivo index.html em um navegador web.

## Funcionalidades

-   Barra lateral com navegação.
-   Seção de biblioteca e criação de playlists (estático).
-   Busca de artistas com exibição de cards dinâmicos.
-   Loading spinner para indicar carregamento de dados.
-   Responsividade para diferentes tamanhos de tela.

## Créditos

Este projeto foi desenvolvido durante a segunda edição da Imersão Front-End da Alura.

## Licença

Este projeto está sob a licença pública. Sinta-se à vontade para utilizá-lo e modificá-lo conforme necessário.
