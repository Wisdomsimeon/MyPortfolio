

import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {FBXLoader} from 'three/addons/loaders/FBXLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RGBELoader} from 'three/addons/loaders/RGBELoader.js';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(10,2,-0.6);
camera.rotation.set(0,0.5 * Math.PI,0);



const renderer = new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.5;
document.body.appendChild( renderer.domElement );












const dl  = new THREE.DirectionalLight("white",5);
dl.position.set(0,5,0);
scene.add(dl);










const sl  = new THREE.SpotLight("white",5);
sl.position.set(0.5,3.6,0.2);
sl.penumbra = 1;
scene.add(sl);

//console.log(sl)



////




// Rect-light


const width = 0.7;
const height = 0.7;
const intensity = 10;
const rectLight = new THREE.RectAreaLight( "purple", intensity,  width, height );
rectLight.position.set( 0.3, 3.7, -4 );
rectLight.rotation.set(-0.5 * Math.PI,1.5,0);
scene.add( rectLight )

//const rectLightHelper = new RectAreaLightHelper( rectLight );
//rectLight.add( rectLightHelper );








const width2 = 0.7;
const height2 = 0.7;
const intensity2 = 10;
const rectLight2 = new THREE.RectAreaLight( "blue", intensity2,  width2, height2 );
rectLight2.position.set( 0.3, 3.7, -5 );
rectLight2.rotation.set(-0.5 * Math.PI,1.5,0);
scene.add( rectLight2 )

//const rectLightHelper2 = new RectAreaLightHelper( rectLight2 );
//rectLight2.add( rectLightHelper2 );



const width3 = 0.7;
const height3 = 0.7;
const intensity3 = 10;
const rectLight3 = new THREE.RectAreaLight( "orange", intensity3,  width3, height3 );
rectLight3.position.set( 0.3, 4.7, -5 );
rectLight3.rotation.set(-0.5 * Math.PI,1.5,0);
scene.add( rectLight3 )

//const rectLightHelper3 = new RectAreaLightHelper( rectLight3 );
//rectLight2.add( rectLightHelper3 );



const width4 = 0.7;
const height4 = 0.7;
const intensity4 = 10;
const rectLight4 = new THREE.RectAreaLight( "green", intensity4,  width4, height4 );
rectLight4.position.set( 0.3, 4.7, -4 );
rectLight4.rotation.set(-0.5 * Math.PI,1.5,0);
scene.add( rectLight4 )

//const rectLightHelper4 = new RectAreaLightHelper( rectLight4 );
//rectLight2.add( rectLightHelper4 );




//


// Keyboard Control



document.addEventListener('keydown',function(e){



});











//


const sunLight = new THREE.DirectionalLight(0xffffff, 5);
  sunLight.position.set(2, 4, 4);
  sunLight.castShadow = true;
  scene.add(sunLight);


// Load HDRI background
const rgbeLoader = new RGBELoader();
rgbeLoader.load('meadow_2_4k.hdr',function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    //scene.background = texture;
    //scene.environment = texture;
});




const am = new THREE.TextureLoader().load('');






const controls = new OrbitControls(camera,renderer.domElement);
controls.update();



let model;
const loader = new GLTFLoader();
loader.load('uploads_files_2798260_Gaming_Room(online).glb',function(gltf){

model = gltf.scene;
model.scale.setScalar(2);
scene.add(model);

model.traverse(function(node){

if(node.isMesh){




}


})


});









// Diagnostics


const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerMove( event ) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

//


const geo = new THREE.BoxGeometry();
const mat = new THREE.MeshNormalMaterial();
const target = new THREE.Mesh(geo,mat);
scene.add(target);









window.addEventListener('load', function() {
  const fadeInElement = document.querySelector('.fade-in');
  fadeInElement.classList.add('visible');


document.getElementById('music').play();

	
	
});





















function animate() {
requestAnimationFrame(animate);
	



	//console.log(camera.position);



// update the picking ray with the camera and pointer position
raycaster.setFromCamera( pointer, camera );

// calculate objects intersecting the picking ray
const intersects = raycaster.intersectObjects( scene.children );

for ( let i = 0; i < intersects.length; i ++ ) {

  target.position.copy(intersects[i].object);

}











  window.addEventListener( 'pointermove', onPointerMove );

	renderer.render( scene, camera );
 
}
animate();




