import * as THREE from "./three.module.js";

export default function cubotext({ textu, x, y }) {

  const geometry1 = new THREE.BoxGeometry(.75, .75, .75);
  const textura01= new THREE.TextureLoader().load( textu );
  const materialtext= new THREE.MeshLambertMaterial({map:textura01});

  const mesh1 = new THREE.Mesh(geometry1, materialtext);
  mesh1.position.set(0, 0, 0);
  
  const geometry2 = new THREE.BoxGeometry(.75, .5, .75);
  const mesh2 = new THREE.Mesh(geometry2, materialtext);
  mesh2.position.set(-1, 0, 0);
  
  const geometry3 = new THREE.BoxGeometry(.5, .75, .75);
  const mesh3 = new THREE.Mesh(geometry3, materialtext);
  mesh3.position.set(1, 0, 0);

  const cubetext = new THREE.Group();
  cubetext.add(mesh1, mesh2, mesh3);
  cubetext.position.set(x, y, 3);

  return cubetext;
}