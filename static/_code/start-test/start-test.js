const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.setAttribute('class','canvas')
//renderer.domElement.setAttribute('style',`position:absolute;top:3rem;height:${window.innerHeight}px`)
renderer.domElement.setAttribute('style',`position:absolute;top:3rem`)
// WebGL background color
renderer.setClearColor("#000", 0);
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight);
camera.position.z = 25;
const scene = new THREE.Scene();
scene.add(camera)
//BEGIN
// const lightHolder = new THREE.Group();
// const geometry = new THREE.IcosahedronGeometry(1.058,2);
const boxGeometry = new THREE.BoxGeometry(20,20,20);
const cube = new THREE.Mesh(boxGeometry,new THREE.MeshBasicMaterial({color: 0xffffff}));
scene.add(cube)
let num=0;
function render() {
    cube.rotation.y+=.055
    num++;
    //if(num%4===0){
        renderer.render(scene, camera);
    //}
    requestAnimationFrame(render);
}
render();

document.body.appendChild(renderer.domElement);