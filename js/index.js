function cardClicked(productId) {
    // Remove 'selected' class from all cards and hide all accordion content
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.classList.remove('card-selected');
        card.querySelector('.accordion-content').style.display = 'none';
    });

    // Add 'selected' class to the clicked card and show the accordion content
    var clickedCard = document.getElementById(productId).closest('.card');
    clickedCard.querySelector('.accordion-content').style.display = 'block';
    clickedCard.classList.add('card-selected');

    // hide all other accordion content
    cards.forEach(function(card) {
        if (card !== clickedCard) {
            card.querySelector('.accordion-content').style.display = 'none';
        }
    });

    // Uncheck all radio buttons
    var radioButtons = document.querySelectorAll('.product-radio-input');
    radioButtons.forEach(function(radio) {
        radio.checked = false;
    });

    // Check the radio button of the clicked card
    var clickedRadioButton = document.getElementById(productId);
    clickedRadioButton.checked = true;

}

//Onload, click the second card
document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card, index) {
        if (index === 1) {
            card.click();
        }
    });
});