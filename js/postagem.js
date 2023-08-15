const API_URL = "https://api-rest-post-diegocandido.herokuapp.com";

function exibirDetalhes(id) {
  body.style.display = "none";
  fetch(`${API_URL}/postagem/${id}`)
    .then(result => result.json())
    .then(result => {
      const index = id; // Use o ID diretamente como índice
      
      document.querySelector(`.titulo-post${index}`).innerHTML = result.title;
      document.querySelector(`.descricao-post${index}`).innerHTML = result.description;
      document.querySelector(`.nome-criador${index}`).innerHTML = result.profileName;
      const imgpost = `https://api-rest-post-diegocandido.herokuapp.com${result.thumbImage}`;
      document.querySelector(`.img-post${index}`).src = imgpost;
      document.querySelector(`.date${index}`).innerHTML = result.postDate;
    });
}

const buttons = document.querySelectorAll(".ver-mais");

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    exibirDetalhes(index + 1);
  });
});
