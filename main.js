
// Sahne oluştur
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xfefefe);

// Kamera ve renderer
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Zemin
const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xdccca3 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Işık
const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
light.position.set(0, 20, 0);
scene.add(light);

// "Tezgah" ve müşteri kutusu
const counter = new THREE.Mesh(
    new THREE.BoxGeometry(5, 1, 2),
    new THREE.MeshStandardMaterial({ color: 0x8B4513 })
);
counter.position.set(0, 0.5, -3);
scene.add(counter);

const customer = new THREE.Mesh(
    new THREE.BoxGeometry(1, 2, 1),
    new THREE.MeshStandardMaterial({ color: 0x00ccff })
);
customer.position.set(0, 1, -5);
scene.add(customer);

// Sipariş popup
const div = document.createElement("div");
div.style.position = "absolute";
div.style.top = "20px";
div.style.left = "20px";
div.style.padding = "12px";
div.style.backgroundColor = "white";
div.style.border = "1px solid black";
div.innerHTML = "<b>Müşteri Siparişi:</b> Çay";
document.body.appendChild(div);

// Kamera pozisyonu
camera.position.set(0, 5, 5);
camera.lookAt(0, 0, -3);

// Döngü
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
