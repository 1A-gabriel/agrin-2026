# agrin-2026
Este código estrutura a interface de um jogo de perguntas e respostas (Quiz) interativo voltado para o tema "Agricultura Sustentável", intitulado "Agro Forte, Futuro Sustentável".

A página é estruturada em uma única tela (Single Page Application) que alterna entre três momentos principais por meio de identificadores (id):

Tela de Introdução (#intro-screen): Apresenta o título do quiz, uma breve descrição, dados estatísticos rápidos (10 questões, 6 categorias, 4 níveis) e um botão para iniciar a partida. Inclui também uma faixa informativa com os temas abordados.

Tela de Jogo (#playing-screen): Exibe o andamento do quiz em tempo real, contendo o logotipo, uma barra de progresso visual, um contador de pontuação e o contêiner dinâmico (#question-container) onde as perguntas e alternativas serão renderizadas pelo JavaScript.

Tela de Resultados (#result-screen): Mostra o desempenho final do jogador com uma mensagem personalizada, uma nota circular centralizada, a porcentagem de acertos, uma lista detalhada dos erros/acertos por categoria (#breakdown-list) e um botão para reiniciar o jogo.

A parte visual é importada de um arquivo externo (style.css) junto com as fontes do Google (Merriweather e Lato), e toda a lógica de funcionamento, cliques e teclado é gerenciada pelo script vinculado (script.js).
