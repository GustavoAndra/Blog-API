const cards = document.querySelectorAll('.card');
const container = document.getElementById("Container");
let currentCardClone = null;

function displayCardInContainer(card) {
    container.innerHTML = "";
    
    const clonedCard = card.cloneNode(true);
    clonedCard.classList.add('card-clicked', 'centered');
    
    const backButton = document.createElement('button');
    backButton.classList.add( 'btnVoltar');
    backButton.textContent = 'Voltar';
    
    backButton.addEventListener('click', handleBackButtonClick);
    
    clonedCard.appendChild(backButton);
    container.appendChild(clonedCard);
    
    cards.forEach(card => card.style.display = 'none');
    
    currentCardClone = clonedCard;
}

function handleCardClick(event) {
    const clickedCard = event.currentTarget;
    displayCardInContainer(clickedCard);
}

function handleBackButtonClick() {
    cards.forEach(card => card.style.display = 'block');
    container.innerHTML = "";
    currentCardClone = null;
}

cards.forEach(card => card.addEventListener('click', handleCardClick));