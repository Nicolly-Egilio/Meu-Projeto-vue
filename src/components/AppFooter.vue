<template>
    <footer class="footer">
      <div class="conteudo-footer">
        <p>© 2024 Todos os direitos reservados ®</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "AppFooter",
  };
  </script>
  
  <style scoped>
  /* Estilos para o footer fixo na parte inferior */
  .footer {
    position: fixed;  /* Fixar o footer na parte inferior */
    bottom: 0;        /* Coloca o footer no fundo da página */
    left: 0;          /* Alinha o footer à esquerda */
    width: 100%;      /* O footer ocupa toda a largura da tela */
    background-color: #166459; /* Cor de fundo */
    color: white;     /* Cor do texto */
    text-align: center; /* Centraliza o texto */
    padding: 10 px;   /* Espaçamento interno */
    z-index: 10;     /* Garante que o footer fique acima de outros conteúdos */
  }
  
  /* Para os links do footer (caso haja) */
  .footer a {
    color: #086232;
    text-decoration: none;
  }
  
  .footer a:hover {
    text-decoration: underline;
  }
  
  /* Adiciona um espaçamento inferior ao conteúdo para que o footer não sobreponha */
  body {
    margin-bottom: 50px; /* Espaçamento para dar espaço ao footer fixo */
  }
  </style>
  