<template>
    <div>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/sobre">Sobre</router-link> |
        <router-link to="/genero">Gênero</router-link> |
        <router-link to="/livros">Livros</router-link>
      </nav>
      <router-view/>
    </div>
  </template>
  
    <script>
  export default{
      name: "AppNav",
  };
  </script>

  <style>
  /* Estilização da barra de navegação */
  nav {
    background-color: #166459; /* Cor de fundo */
    padding: 1rem; /* Espaçamento interno */
    text-align: center; /* Alinhamento do texto */
  }
  
  /* Estilização dos links de navegação */
  nav a {
    color: white; /* Cor do texto */
    text-decoration: none; /* Remove o sublinhado padrão */
    margin: 0 1rem; /* Margem entre os links */
  }
  
  /* Estilização dos links quando o mouse passa por cima */
  nav a:hover {
    text-decoration: underline; /* Adiciona sublinhado ao passar o mouse */
  }
  footer{ 
    background-color: #166459; /* cor de fundo */
  }
  </style>
  