document.getElementById('rollButton').addEventListener('click', rollDice);

function rollDice() {
    const cuisines = ["Italian", "Chinese", "Mexican", "Indian", "Japanese", "Thai"];
    const randomIndex = Math.floor(Math.random() * cuisines.length);
    const result = cuisines[randomIndex];
    
    document.getElementById('result').textContent = `You should eat: ${result}!`;
}
