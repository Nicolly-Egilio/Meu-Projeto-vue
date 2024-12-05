<template>
  <div>
    <!-- Título da página -->
    <h1 class="titulo">Escolha um Gênero</h1>

    <!-- Lista de gêneros -->
    <ul class="generos-lista">
      <li v-for="genero in generos" :key="genero.nome" @click="selecionarGenero(genero)" class="genero-item">
        <img :src="genero.imagem" alt="" class="genero-imagem" />
        {{ genero.nome }}
      </li>
    </ul>

    <!-- Exibição de livros de acordo com o gênero selecionado -->
    <h2 v-if="livrosFiltrados.length > 0">Livros de {{ generoSelecionado }}</h2>
    <p v-if="livrosFiltrados.length === 0">Nenhum livro encontrado para o gênero selecionado.</p>

    <!-- Lista de livros filtrados -->
    <ul class="livros-lista">
      <li v-for="livro in livrosFiltrados" :key="livro.id" @click="selecionarLivro(livro)" class="livro-item">
        <img :src="livro.imagem" alt="Capa do livro" class="livro-imagem" />
        <strong>{{ livro.titulo }}</strong> - {{ livro.autor || 'Autor desconhecido' }}
      </li>
    </ul>

    <!-- Detalhes do livro selecionado -->
    <div v-if="livroSelecionado" class="detalhes-livro">
      <h2>Detalhes do Livro</h2>
      <img :src="livroSelecionado.imagem" alt="Capa do livro" class="detalhes-imagem" />
      <p><strong>Título:</strong> {{ livroSelecionado.titulo }}</p>
      <p><strong>Autor:</strong> {{ livroSelecionado.autor || 'Autor desconhecido' }}</p>
      <p><strong>Sinopse:</strong> {{ livroSelecionado.descricao || 'Descrição não disponível.' }}</p>
      <button @click="limparSelecao">Fechar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Lista de gêneros com imagens associadas a cada um
      generos: [
        { nome: "Romance", imagem: require('@/assets/romance2.jpg') },
        { nome: "Comédia Romântica", imagem: require('@/assets/romance.jpg') },
        { nome: "Suspense", imagem: require('@/assets/suspense1.jpg') },
        { nome: "Terror", imagem: require('@/assets/terror.jpg') },
        { nome: "Mangás", imagem: require('@/assets/mangás.jpg') }
      ],
      generoSelecionado: null, // Inicialmente nenhum gênero é selecionado
      livroSelecionado: null,  // Inicialmente nenhum livro é selecionado
      livros: [
        // Lista de livros com seus dados (id, título, autor, descrição, etc.)
        { 
          id: 1, titulo: "Verity", autor: "Colleen Hoover", descricao: "Lowen Ashleigh é uma escritora em dificuldades financeiras que recebe uma proposta única: terminar uma série de livros de uma famosa autora, Verity Crawford, que está gravemente doente. Ao se mudar para a casa dos Crawford, Lowen encontra um manuscrito incompleto da última obra de Verity, que revela segredos obscuros sobre a autora e sua família. O que começa como uma oportunidade profissional logo se transforma em uma jornada perturbadora, quando Lowen descobre mais do que imaginava.", genero: "Suspense", imagem: require('@/assets/verity.jpg') 
        },
        { 
          id: 2, titulo: "É Assim que Acaba", autor: "Colleen Hoover", descricao: "É Assim Que Acaba conta a história de Lily, que após perder seu namorado em um acidente trágico, se vê dividida entre o amor por Ryle, um cirurgião com um temperamento difícil, e seu primeiro amor, Atlas, um homem de origem humilde. Conforme ela navega entre o passado e o presente, Quinn precisa lidar com os desafios de seguir em frente após a dor da perda e entender o verdadeiro significado do amor e do perdão. O livro explora temas como amor, perda e os ciclos de abuso.", genero: "Romance", imagem: require('@/assets/AAcaba.jpeg') 
        },
        { 
          id: 3, titulo: "A Paciente Silenciosa", autor: "Alex Michaelides", descricao: "Alicia Berenson, uma artista de sucesso, é acusada de matar seu marido e fica em silêncio absoluto desde o crime. Theo Faber, um psicoterapeuta, se interessa por seu caso e decide investigá-lo, tentando fazer Alicia falar novamente. Ao longo da história, ele se envolve cada vez mais com o caso, mas começa a perceber que a verdade pode ser mais complexa e sombria do que imaginava..", genero: "Suspense", imagem: require('@/assets/PSilenciosa.webp') 
        },
        { 
          id: 4, titulo: "O Iluminado", autor: "Stephen King", descricao: "O livro segue Jack Torrance, um escritor que aceita um trabalho como zelador de inverno em um hotel isolado nas montanhas, com sua esposa Wendy e seu filho Danny. Danny possui habilidades psíquicas, como a capacidade de iluminar e perceber eventos sobrenaturais. O hotel, com sua história perturbadora, começa a afetar a sanidade de Jack, levando-o a um confronto com suas próprias demônias e a uma luta pela sobrevivência de sua família.", genero: "Terror", imagem: require('@/assets/Iluminado.jpg') 
        },
        { 
          id: 5, titulo: "Para Sempre", autor: "Kim e Krickitt Carpenter", descricao: "John Green: Hazel Grace, uma adolescente com câncer, se apaixona por Augustus Waters, um rapaz que também é sobrevivente de câncer. Juntos, eles compartilham uma conexão profunda e começam uma jornada emocionalmente intensa enquanto enfrentam a realidade de suas doenças. O livro explora temas de amor, perda e a luta contra a inevitabilidade da morte, mas também a beleza e o significado que podem ser encontrados mesmo nas circunstâncias mais difíceis.", genero: "Romance", imagem: require('@/assets/ParaSempre.jpg') 
        },
        { 
          id: 6, titulo: "A minha comédia romântica", autor: "Mariana Menezes", descricao: "Cecelia Ahern: Rosie Dunne e Alex Stewart são melhores amigos desde a infância, mas devido a uma série de mal-entendidos e obstáculos ao longo dos anos, eles nunca conseguem se confessar sobre seus verdadeiros sentimentos. Quando suas vidas tomam rumos diferentes, o tempo e as circunstâncias testam sua amizade e o destino tenta, de diversas formas, reuni-los. O livro acompanha suas jornadas amorosas e pessoais, mostrando que o amor pode ser mais complicado do que parece.", genero: "Comédia Romântica", imagem: require('@/assets/ComediaR.jpg') 
        },
        { 
          id: 7, titulo: "One Piece", autor: "Eiichiro Oda", descricao: "One Piece é uma série de mangá que segue a história de Monkey D. Luffy, um jovem pirata que possui o poder de esticar seu corpo como borracha, depois de comer a Fruta do Diabo. Luffy e sua tripulação navegam pelo vasto oceano em busca do maior tesouro do mundo, o One Piece, com o objetivo de se tornar o Rei dos Piratas. A história é repleta de aventuras, batalhas e amizades, enquanto Luffy e seus companheiros enfrentam desafios no caminho para alcançar seus sonhos.", genero: "Mangás", imagem: require('@/assets/onepiece.jpg') 
        }
      ]
    };
  },
  computed: {
    // Computed property para filtrar os livros de acordo com o gênero selecionado
    livrosFiltrados() {
      if (!this.generoSelecionado) {
        return [];
      }
      return this.livros.filter(livro => livro.genero === this.generoSelecionado);
    }
  },
  methods: {
    // Método para selecionar o gênero
    selecionarGenero(genero) {
      this.generoSelecionado = genero.nome;
    },
    // Método para selecionar o livro
    selecionarLivro(livro) {
      this.livroSelecionado = livro;
    },
    // Método para limpar a seleção do livro
    limparSelecao() {
      this.livroSelecionado = null;
    }
  }
};
</script>

<style scoped>
  /* Estilização para o título */
  .titulo {
    color: #2c5035; 
    text-align: center; 
    font-size: 3rem;
    margin-bottom: 25px; 
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  /* Estilos para a lista de gêneros */
  .generos-lista, .livros-lista {
    list-style: none;
    padding: 0;
    margin: 0;
    max-width: 1200px;
    margin: 0 auto;
  }

  .genero-item, .livro-item {
    padding: 10px;
    margin: 5px;
    background-color: #fff5e6;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .genero-item:hover, .livro-item:hover {
    background-color: #f0f0f0;
  }

  /* Estilo das imagens */
  .genero-imagem, .livro-imagem, .detalhes-imagem {
    width: 100px;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  /* Estilos para os detalhes do livro */
  .detalhes-livro {
    margin-top: 20px;
    border-top: 1px solid #ccc;
    padding-top: 20px;
  }

  .detalhes-livro h2 {
    margin-bottom: 20px;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #078f7d;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #05601b;
  }
</style>
