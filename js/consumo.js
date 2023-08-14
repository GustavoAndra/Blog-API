// Embaralha o array e retorna de maneira aleatória as informações
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de posição
    }
    return array;
  }  

  fetch("https://api-rest-post-diegocandido.herokuapp.com/postagens/") 
    .then(response => response.json()) // Converte a resposta para JSON
    .then(result => {
      const shuffledResult = shuffleArray(result); // Embaralha os resultados

      // Preenche os cards com as informações embaralhadas
      for (let i = 0; i < shuffledResult.length; i++) {
        const post = shuffledResult[i];
        const index = i + 1;
        
        document.querySelector(`.titulo-post${index}`).innerHTML = post.title;
        document.querySelector(`.descricao-post${index}`).innerHTML = post.description;
        document.querySelector(`.nome-criador${index}`).innerHTML = post.profileName;
        document.querySelector(`.img-post${index}`).src = `https://api-rest-post-diegocandido.herokuapp.com${post.thumbImage}`;
        document.querySelector(`.date${index}`).innerHTML = post.postDate;
      }
    })
    .catch(error => console.error("Erro", error));