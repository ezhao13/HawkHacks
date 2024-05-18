function buyGame(gameTitle, gameItem) {
    alert(`You have bought ${gameTitle}!`);
    var button = document.getElementById(gameItem);
    button.remove();
}