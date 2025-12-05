import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';
export default function pinata ({x, y, z}) 
{

 // AGRUPAR LA PIÑATA
 var piñata = new THREE.Group();

 // ESFERA
 var geometriaEsfera = new THREE.SphereGeometry(5);
 var texturaEsfera = new THREE.TextureLoader().load("./assets/pinata.jpg");
 texturaEsfera.wrapS = THREE.RepeatWrapping;
 texturaEsfera.wrapT = THREE.RepeatWrapping;
 texturaEsfera.repeat.set(1, 1);
 var materialEsfera = new THREE.MeshLambertMaterial({ map: texturaEsfera });
 var mallaEsfera = new THREE.Mesh(geometriaEsfera, materialEsfera);
 piñata.add(mallaEsfera);
 mallaEsfera.position.set(0, 0, 0);

 // AGRUPAR PICO Y DECORACIÓN
 var grupoPico1 = new THREE.Group();

 // PICO 1
 var geometriaPico1 = new THREE.CylinderGeometry(0, 2.5, 10, 50);
 var texturaPico1 = new THREE.TextureLoader().load("./assets/lineas.jpg");
 texturaPico1.wrapS = THREE.RepeatWrapping;
 texturaPico1.wrapT = THREE.RepeatWrapping;
 texturaPico1.repeat.set(4, 1);
 var materialPico1 = new THREE.MeshLambertMaterial({ map: texturaPico1 });
 var mallaPico1 = new THREE.Mesh(geometriaPico1, materialPico1);
 mallaPico1.position.set(0, 9, 0);

 // DECORACIÓN PICO 1
 var geometriaDecoracionPico1 = new THREE.CylinderGeometry(1.6, 2.5, 3, 50);
 var texturaDecoracionPico1 = new THREE.TextureLoader().load("./assets/esfera2.jpg");
 var materialDecoracionPico1 = new THREE.MeshLambertMaterial({ map: texturaDecoracionPico1 });
 var mallaDecoracionPico1 = new THREE.Mesh(geometriaDecoracionPico1, materialDecoracionPico1);
 mallaDecoracionPico1.position.set(0, 5.8, 0);

 // Añadir los picos al grupo de la piñata
 grupoPico1.add(mallaPico1, mallaDecoracionPico1);
 piñata.add(grupoPico1);

 // PICO 2
 var pico2Clon = grupoPico1.clone();
 pico2Clon.rotation.z = THREE.MathUtils.degToRad(72);

 // PICO 3
 var pico3Clon = grupoPico1.clone();
 pico3Clon.rotation.z = THREE.MathUtils.degToRad(144);

 // PICO 4
 var pico4Clon = grupoPico1.clone();
 pico4Clon.rotation.z = THREE.MathUtils.degToRad(216);

 // PICO 5
 var pico5Clon = grupoPico1.clone();
 pico5Clon.rotation.z = THREE.MathUtils.degToRad(288);

 // PICO 6
 var pico6Clon = grupoPico1.clone();
 pico6Clon.rotation.x = THREE.MathUtils.degToRad(90);

 // PICO 7
 var pico7Clon = grupoPico1.clone();
 pico7Clon.rotation.x = THREE.MathUtils.degToRad(-90);

 // Añadir la piñata completa a la escena
 piñata.add(pico2Clon, pico3Clon, pico4Clon, pico5Clon,  pico6Clon, pico7Clon);
 //scene.add(piñata);
 piñata.rotation.z = THREE.MathUtils.degToRad(110);

 // PAPEL
 var geometry = new THREE.CapsuleGeometry(0.1, 7, 4, 11);
 var texturaPapel = new THREE.TextureLoader().load("./assets/estrella.jpg");
 var material = new THREE.MeshLambertMaterial({ map: texturaPapel });

 // Crear un grupo
 var grupoPapel = new THREE.Group();

 var papel1 = new THREE.Mesh(geometry, material);
 papel1.position.set(0, 10, 0);
 papel1.rotation.z = THREE.MathUtils.degToRad(0);

 var papel2 = new THREE.Mesh(geometry, material);
 papel2.position.set(-0.4, 10, 0);
 papel2.rotation.z = THREE.MathUtils.degToRad(-7);

 var papel3 = new THREE.Mesh(geometry, material);
 papel3.position.set(0.4, 10, 0);
 papel3.rotation.z = THREE.MathUtils.degToRad(7);

 var papel4 = new THREE.Mesh(geometry, material);
 papel4.position.set(0, 10, -0.4);
 papel4.rotation.x = THREE.MathUtils.degToRad(7);

 var papel5 = new THREE.Mesh(geometry, material);
 papel5.position.set(0, 10, 0.4);
 papel5.rotation.x = THREE.MathUtils.degToRad(-7);

 // Añadir el grupo a la escena
 grupoPapel.add(papel1, papel2, papel3, papel4, papel5);
 //scene.add(grupoPapel);

 //Repetir Grupo 

 var grupoPapeles = new THREE.Group();

 var papelClon1 = grupoPapel.clone();
 papelClon1.position.set(0, 0, 0); // Posición diferente para evitar superposición
 papelClon1.rotation.y = THREE.MathUtils.degToRad(300); // Rotación en el eje Y
 //scene.add(papelClon1);

 var papelClon2 = grupoPapel.clone();
 papelClon2.position.set(0, 0, 0); // Posición diferente para evitar superposición
 papelClon2.rotation.y = THREE.MathUtils.degToRad(600); // Rotación en el eje Y
 //scene.add(papelClon2);

 grupoPapeles.add(grupoPapel, papelClon1, papelClon2);
 //scene.add(grupoPapeles);
 // scene.remove(grupoPapeles);

 //CLONES PAPEL

 // Clon 1
 var papel11 = grupoPapeles.clone();
 papel11.position.set(-8.6, -2.6, 0);
 papel11.rotation.y = THREE.MathUtils.degToRad(-100);
 //scene.add(papel11);

 // Clon 2
 var papel22 = grupoPapeles.clone();
 papel22.position.set(-13, -18.3, 0);
 //scene.add(papel22);

 // Clon 3
 var papel33 = grupoPapeles.clone();
 papel33.position.set(0.45, -27.3, 0);
 //scene.add(papel33);

 // Clon 4
 var papel44 = grupoPapeles.clone();
 papel44.position.set(13.3, -17.4, 0); // Cambiar posición
 //scene.add(papel44);

 // Clon 5
 var papel55 = grupoPapeles.clone();
 papel55.position.set(7.8, -2, 0); // Cambiar posición
 //scene.add(papel55);

 // Clon 6
 var papel66 = grupoPapeles.clone();
 papel66.position.set(0, -13.5, 13.8); // Cambiar posición
 //scene.add(papel66);

 // Clon 7
 var papel77 = grupoPapeles.clone();
 papel77.position.set(0, -13.5, -13.8); // Cambiar posición
 //scene.add(papel77);

var pinatita = new THREE.Group();
pinatita.add(piñata, papel11, papel22, papel33, papel44, papel55, papel66, papel77);
pinatita.position.set(x, y, z);  
return pinatita;
}
