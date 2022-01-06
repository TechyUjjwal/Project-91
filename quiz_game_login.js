function addUser() {
    player1 = document.getElementById("p1").value;
    player2 = document.getElementById("p2").value;

    localStorage.setItem("Player 1 Name ", player1);
    localStorage.setItem("Player 2 Name ", player2);

    window.location.replace("quiz_game_page.html");
}