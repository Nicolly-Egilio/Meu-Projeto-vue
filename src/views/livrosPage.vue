<template>
  <div>
    <!-- Título da página -->
    <h1>Livros Disponíveis</h1>

    <!-- Caixa de busca -->
    <input 
      type="text" 
      v-model="consulta" 
      placeholder="Procure um livro..." 
    />

    <!-- Mensagem para quando não há livros filtrados -->
    <p v-if="livrosFiltrados.length === 0">Nenhum livro encontrado.</p>

    <!-- Lista de livros -->
    <ul>
      <li 
        v-for="livro in livrosFiltrados" 
        :key="livro.id" 
        @click="selecionarLivro(livro)" 
        style="cursor: pointer; margin-bottom: 10px; display: flex; align-items: center; gap: 10px;"
      >
        <!-- Exibe a imagem da capa -->
        <img 
          :src="livro.imagem" 
          alt="Capa do livro" 
          style="width: 100px; height: auto; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"
        />
        <!-- Exibe título e autor -->
        <div>
          <strong>{{ livro.titulo }}</strong> - {{ livro.autor || 'Autor desconhecido' }}
        </div>
      </li>
      
    </ul>

    <!-- Detalhes do livro selecionado -->
    <div v-if="livroSelecionado" style="margin-top: 20px; border-top: 1px solid #ccc; padding-top: 20px;">
      <div 
         v-if="livroSelecionado" 
         ref="detalhesLivro" 
         class="detalhes"
>  </div>

      <h2>Detalhes do Livro</h2>
      <!-- Exibe a imagem da capa do livro selecionado -->
      <img 
        :src="livroSelecionado.imagem" 
        alt="Capa do livro" 
        style="width: 150px; height: auto; margin-bottom: 20px; border-radius: 5px;"
      />
      <!-- Exibe título, autor e sinopse -->
      <p><strong>Título:</strong> {{ livroSelecionado.titulo }}</p>
      <p><strong>Autor:</strong> {{ livroSelecionado.autor || 'Autor desconhecido' }}</p>
      <p><strong>Sinopse:</strong> {{ livroSelecionado.descricao || 'Descrição não disponível.' }}</p>
      <!-- Botão para fechar os detalhes -->
      <button @click="limparSelecao">Fechar</button>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      // Dados dos livros
      livros: [
        {
          id: 1,
          titulo: "Verity",
          autor: "Colleen Hoover",
          descricao: "Lowen Ashleigh é uma escritora em dificuldades financeiras que recebe uma proposta única: terminar uma série de livros de uma famosa autora, Verity Crawford, que está gravemente doente. Ao se mudar para a casa dos Crawford, Lowen encontra um manuscrito incompleto da última obra de Verity, que revela segredos obscuros sobre a autora e sua família. O que começa como uma oportunidade profissional logo se transforma em uma jornada perturbadora, quando Lowen descobre mais do que imaginava.",
          imagem: require('@/assets/verity.jpg'), 
        },
        {
          id: 2,
          titulo: "É Assim que Acaba",
          autor: "Colleen Hoover",
          genero: "Romance",
          descricao: "É Assim Que Acaba conta a história de Lily, que após perder seu namorado em um acidente trágico, se vê dividida entre o amor por Ryle, um cirurgião com um temperamento difícil, e seu primeiro amor, Atlas, um homem de origem humilde. Conforme ela navega entre o passado e o presente, Quinn precisa lidar com os desafios de seguir em frente após a dor da perda e entender o verdadeiro significado do amor e do perdão. O livro explora temas como amor, perda e os ciclos de abuso.",
          imagem: require('@/assets/AAcaba.jpeg'), 

        },
        {
          id: 3,
          titulo: "A Paciente Silenciosa",
          genero: "Suspense",
          autor: "Alex Michaelides",
          descricao: "Alicia Berenson, uma artista de sucesso, é acusada de matar seu marido e fica em silêncio absoluto desde o crime. Theo Faber, um psicoterapeuta, se interessa por seu caso e decide investigá-lo, tentando fazer Alicia falar novamente. Ao longo da história, ele se envolve cada vez mais com o caso, mas começa a perceber que a verdade pode ser mais complexa e sombria do que imaginava..",
          imagem: require('@/assets/PSilenciosa.webp'), 

        },
        {
          id: 4,
          titulo: "A Empregada",
          autor: "Freida McFadden",
          genero: "Suspense",
          descricao: "A história segue a vida de Millie, uma mulher que, após ser condenada injustamente por um crime que não cometeu, luta para se reerguer da prisão e reconstruir sua vida. Quando ela consegue uma vaga como empregada doméstica na mansão de uma família rica, a situação começa a tomar rumos inesperados. Ao entrar na vida da família, ela se vê envolvida em segredos sombrios, mentiras e manipulações, enquanto tenta descobrir se realmente pode confiar nas pessoas ao seu redor. A trama é cheia de reviravoltas e surpresas, fazendo com que o leitor questione a verdade e a moralidade de cada personagem.",
          imagem: require('@/assets/empregada1.jpg'), 

        },
        {
          id: 5,
          titulo: "A Empregada: O Retorno",
          autor: "Freida McFadden",
          genero: "Suspense",
          descricao: "O segundo livro da série traz uma continuação da história de Millie, que após os eventos do primeiro livro, tem a chance de dar um novo passo em sua vida. No entanto, quando uma tragédia atinge a família em que ela trabalha, Millie é novamente puxada para uma teia de mistérios e segredos. Ela começa a questionar até que ponto está envolvida com as ações da família e o quanto seu passado pode voltar para assombrá-la. O suspense aumenta e o drama psicológico se intensifica à medida que Millie tenta desvendar a verdade sobre o que realmente aconteceu e até onde suas escolhas a levaram.",
          imagem: require('@/assets/empregada2.jpg'), 

        },
        {
          id: 6,
          titulo: "A Empregada: O Segredo Final",
          autor: "Freida McFadden",
          genero: "Suspense",
          descricao: "O terceiro e último livro da trilogia de *A Empregada* finaliza a trama de Millie de forma explosiva. Após os eventos do segundo livro, a história segue os desdobramentos de suas ações passadas e como suas escolhas a colocaram em um jogo ainda mais perigoso. As relações com os outros personagens chegam a um ponto crítico, e Millie é forçada a confrontar os demônios de seu passado. O livro é marcado por revelações chocantes e um final surpreendente que deixa o leitor sem fôlego.",
          imagem: require('@/assets/empregada3.jpg'), 

        }
        
      ],
      consulta: "", // Texto da busca
      livroSelecionado: null, // Livro que está atualmente selecionado
    };
  },
  computed: {
    // Computed property para filtrar os livros com base na busca
    livrosFiltrados() {
      return this.livros.filter((livro) =>
        livro.titulo.toLowerCase().includes(this.consulta.toLowerCase()) || 
        (livro.autor && livro.autor.toLowerCase().includes(this.consulta.toLowerCase()))
      );
    },
  },
  methods: {
  selecionarLivro(livro) {
    this.livroSelecionado = livro; // Define o livro selecionado

    // Rola suavemente até a seção de detalhes
    this.$nextTick(() => {
      this.$refs.detalhesLivro.scrollIntoView({ behavior: "smooth" });
    });
  },
  limparSelecao() {
    this.livroSelecionado = null; // Reseta o livro selecionado
  },
},

};
</script>
<style>
/* Estilização do título */
h1 {
  font-size: 2rem;
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
}

/* Caixa de busca */
input {
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

/* Lista de livros */
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 200px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff5e6;
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.2s;
}

li:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Imagem da capa */
li img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
}

/* Texto do livro */
li strong {
  display: block;
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 5px;
}

li p {
  color: #555;
  font-size: 0.9rem;
}

/* Detalhes do livro selecionado */
div[v-if="livroSelecionado"] {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ccc;
  text-align: center;
}

div[v-if="livroSelecionado"] img {
  width: 150px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #078f7d;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #05601b;
}
</style>
