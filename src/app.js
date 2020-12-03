const container = document.querySelector('#game-container');

// Escena

const scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');

// Cámara

const camera = new THREE.PerspectiveCamera(
    35,
    container.clientWidth/container.clientHeight,
    0.1,
    1000
);

//Mesh
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({
    color: 'teal'
});

const box_mesh = new THREE.Mesh(geometry, material);
scene.add(box_mesh);
//Render

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(container.clientWidth/container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);

renderer.render(scene,camera);