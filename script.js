let scene, camera, renderer, cube, diceTextures = [];

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('scene-container').appendChild(renderer.domElement);

    // Load textures
    const loader = new THREE.TextureLoader();
    const cuisines = ['Italian', 'Chinese', 'Indian', 'Japanese', 'Mexican', 'Thai'];
    cuisines.forEach((cuisine, index) => {
        diceTextures.push(loader.load(`textures/${cuisine}.png`)); // Make sure you have these textures
    });

    // Create dice with textures
    const materials = diceTextures.map(texture => new THREE.MeshBasicMaterial({ map: texture }));
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function rollDice() {
    const maxRotation = Math.PI * 4; // Rotations in radians
    cube.rotation.x += Math.random() * maxRotation;
    cube.rotation.y += Math.random() * maxRotation;
    cube.rotation.z += Math.random() * maxRotation;
}

document.getElementById('rollDice').addEventListener('click', rollDice);

init();
animate();
