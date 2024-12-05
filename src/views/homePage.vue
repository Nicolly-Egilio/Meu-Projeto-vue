
<template>
    <!-- Contêiner principal para a página de boas-vindas -->
    <div class="bem-vindo-container">
      <!-- Título principal da página -->
      <h1 class="titulo-bem-vindo">Bem-vindo ao seu Site de Livros</h1>
      
      <!-- Descrição do que o site oferece -->
      <p class="descricao-bem-vindo">Explore nosso catálogo de livros incríveis!</p>
    </div>
  </template>
  
  <style scoped>
    /* Estilos para o contêiner principal da página de boas-vindas */
    .bem-vindo-container {
      background-color: #fff5e6; /* Cor de fundo suave*/
      border-radius: 15px; /* Bordas arredondadas */
      padding: 30px; /* Espaçamento interno maior */
      max-width: 900px; /* Largura máxima  */
      margin: 40px auto; /* Centraliza o contêiner e adiciona um espaço acima e abaixo */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Sombra suave*/
      font-family: 'Georgia', serif; /* Fontes */
    }
  
    /* Estilização para o título  */
    .titulo-bem-vindo {
      color: #2c5035; /* Cor escura */
      text-align: center; /* Centraliza */
      font-size: 3rem; /* Tamanho grande */
      margin-bottom: 25px; /* Espaço abaixo do título */
      text-transform: uppercase; /* Coloca o título em letras maiúsculas */
      letter-spacing: 2px; /* Espaçamento entre as letras */
    }
  
    /* Estilos para a descrição do site */
    .descricao-bem-vindo {
      color: #34495e; /* Cor mais suave para o texto de descrição */
      font-size: 1.4rem; /* Tamanho de fonte */
      line-height: 1.8; /* Altura entre as linhas */
      text-align: center; /* Centraliza o texto */
      margin-top: 0; /* Remove o espaço superior */
      animation: fadeInUp 2s ease-out; /* Animação para aparecer suavemente de baixo para cima */
    }
  
    /* Definindo a animação fadeInUp */
    @keyframes fadeInUp {
      from {
        opacity: 0; /* Começa invisível */
        transform: translateY(20px); /* Começa deslocado para baixo */
      }
      to {
        opacity: 1; /* Torna-se visível */
        transform: translateY(0); /* Volta para a posição original */
      }
    }
  </style>