// console.log(THREE);

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh); // make it a habbit to add the mesh to the scene

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); // 75 is the field of view in degrees nad the next argument is the aspect ratio
camera.position.z = 3; // move the camera back a bit to be able to view the cube
scene.add(camera); // make it a habbit to add the camera to the scene

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height); // set the size of the renderer
renderer.render(scene, camera); // takes the photo of the scene and renders it on the canvas