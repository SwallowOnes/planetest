<script >

var scene, camera, render;

container = document.createElement( 'div' );
document.body.appendChild(container); 


camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.y = 0;
camera.position.z = 600;

scene = new THREE.Scene();



var cylinder_geometry = new THREE.CylinderGeometry(200,200,400,10);
var cylinder_texture = new THREE.MeshNormalMaterial();
var cylinder = new THREE.Mesh(cylinder_geometry,cylinder_texture);
cylinder.position.y = 100;
cylinder.position.z = -300;

cylinder.rotation.z = 300;
scene.add(cylinder); 

render = new THREE.WebGLRenderer();
render.setSize (window.innerWidth, window.innerHeight);
container.appendChild(render.domElement);

animation();

function animation(){
	requestAnimationFrame(animation);
	cylinder.rotation.x +=180/Math.PI*0.001;

	render.render(scene,camera);
}
</script>