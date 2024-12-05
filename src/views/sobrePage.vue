
<template>
  <!-- Contêiner principal da página -->
  <div class="sobre-container">
    <!-- Título principal da seção -->
    <h1 class="titulo">Sobre</h1>
    
    <!-- Descrição  -->
    <p class="introducao">Esse site foi criado para explorar informações sobre livros!</p>
    
    <!-- Detalhes adicionais -->
    <p class="detalhes">Aqui você encontrará todos os seus livros preferidos pelo nome dele ou do(a) autor(a)!</p>
    
    <!-- sobre nós -->
    <p class="nos">Nós somos um grupo de estudantes do ensino médio e decidimos criar essa aplicção para te ajudar escolher suas próximas leituras!! </p>

  </div>
  <div class="container-sobre">
  <!-- Convidando o usuário a explorar o site -->
    <p class="chamada">Está pronto(a) para essa aventura?</p>
  </div>
  
</template>

<style scoped>
  /* Estilos para o contêiner principal da página */
  .sobre-container {
    background-color: #fff5e6; /* Cor de fundo suave /
    border-radius: 10px; /* Bordas arredondadas */
    padding: 20px; /* Espaçamento interno */
    max-width: 800px; /* Largura máxima para limitar o tamanho do conteúdo */
    margin: 0 auto; /* Centraliza o contêiner na tela */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra  */
    font-family: 'Arial', sans-serif; /* Fonte  */
  }

  /* Estilos para o título principal 'Sobre' */
  .titulo {
    color: #2c5035; /* Cor escura para o título */
    text-align: center; /* Centraliza o título */
    font-size: 2.5rem; /* Tamanho grande para chamar a atenção */
    margin-bottom: 20px; /* Espaço abaixo do título */
  }

  /* Estilos para o parágrafo de introdução */
  .introducao {
    color: #345e4d; /* Cor mais suave para o texto */
    font-size: 1.25rem; /* Tamanho de fonte um pouco maior */
    line-height: 1.8; /*  Altura entre as linhas */
    margin-bottom: 15px; /* Espaço abaixo do parágrafo */
  }

  /* Estilos para o parágrafo de detalhes adicionais */
  .detalhes {
    color: #7f8c8d; /* Cor neutra para os detalhes */
    font-size: 1.1rem; /* Tamanho de fonte menor que o anterior */
    line-height: 1.6; /* Altura de linha */
    margin-bottom: 15px; /* Espaço abaixo do parágrafo */
  }

  /* Estilos para o parágrafo sobre nós */
  .nos {
    color: #345e4d; /* Cor mais suave para o texto */
    font-size: 1.25rem; /* Tamanho de fonte um pouco maior */
    line-height: 1.8; /*Altura entre as linhas */
    margin-bottom: 15px; /* Espaço abaixo do parágrafo */
  }
  
  /* Estilos para o contêiner principal da página */
  .container-sobre{
    background-color: #fff5e6; /* Cor de fundo suave  /
    border-radius: 10px; /* Bordas arredondadas */
    padding: 20px; /* Espaçamento interno */
    max-width: 800px; /* Largura máxima para limitar o tamanho do conteúdo */
    margin: 0 auto; /* Centraliza o contêiner na tela */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra  */
    font-family: 'Arial', sans-serif; /* Fonte  */
  }
  /* Estilos para a chamada (última frase) */
  .chamada {
    color: #086232; /* Cor vibrante  para chamar atenção */
    font-size: 1.3rem; /* Tamanho de fonte maior que os outros parágrafos */
    font-weight: bold; /* Deixa o texto em negrito */
    text-align: center; /* Centraliza o texto */
    margin-top: 20px; /* Espaço acima do parágrafo */
    
    /* Animação de fade-in faz o texto aparecer suavemente */
    animation: fadeIn 2s ease-in-out;
  }
    

  /* Definindo a animação fadeIn */
  @keyframes fadeIn {
    from {
      opacity: 0; /* Começa invisível */
    }
    to {
      opacity: 1; /* Torna-se visível no final */
    }
  }
</style>

