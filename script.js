document.getElementById('rollButton').addEventListener('click', rollDice);

function rollDice() {
    const dice = document.getElementById('dice');
    const cuisines = ["Italian", "Chinese", "Mexican", "Indian", "Japanese", "Thai"];
    const faces = [
        { transform: 'rotateY(0deg)', name: 'Italian' },
        { transform: 'rotateY(180deg)', name: 'Chinese' },
        { transform: 'rotateY(90deg)', name: 'Mexican' },
        { transform: 'rotateY(-90deg)', name: 'Indian' },
        { transform: 'rotateX(90deg)', name: 'Japanese' },
        { transform: 'rotateX(-90deg)', name: 'Thai' }
    ];
    
    const randomIndex = Math.floor(Math.random() * faces.length);
    const result = faces[randomIndex];

    dice.style.transform = result.transform + ' rotateZ(' + (Math.random() * 360) + 'deg)';
    document.getElementById('result').textContent = `You should eat: ${result.name}!`;
}