// Importa as funções necessárias para criar um roteador.
import { createRouter, createWebHistory } from 'vue-router';

// Importa os componentes que serão usados nas rotas.
import Home from '@/views/homePage.vue';
import Sobre from '@/views/sobrePage.vue';
import Gênero from'@/views/generoPage.vue';
import Livros from '@/views/livrosPage.vue';

// Define as rotas do site.
const routes = [
  // Rota inicial: quando o usuário acessa o site pela primeira vez.
  {
    path: '/', // A barra '/' indica a rota inicial.
    name: 'Home', // Nome da rota para referência.
    component: Home // O componente Home será exibido nesta rota.
  },
  // Rota para a página "Sobre Nós".
  {
    path: '/sobre', // A URL será '/sobre'.
    name: 'sobre', // Nome da rota.
    component: Sobre // O componente Sobre será exibido.
  },
  //Rota para a págine"Gênero"
  {
    path: '/genero', // A URL será '/genero'.
    name: 'Gênero', // Nome da rota.
    component: Gênero // O componente Gênero será exibido.
  },
  // Rota para a página de livros.
  {
    path: '/livros', // A URL será '/livros'.
    name: 'Livros', // Nome da rota.
    component: Livros // O componente Livros será exibido.
  }
];

// Cria o roteador usando as rotas definidas acima.
const router = createRouter({
  history: createWebHistory(), // Usa o histórico HTML5 para navegação.
  routes // Passa as rotas definidas anteriormente.
});

// Exporta o roteador para que ele possa ser usado em outras partes da aplicação.
export default router;


