import * as THREE from "./three.module.js";

export default function cubons({ color, x, y }) {

  const geometry1 = new THREE.BoxGeometry(.75, .75, .75);
  const material1 = new THREE.MeshLambertMaterial({ color });
  const mesh1 = new THREE.Mesh(geometry1, material1);
  mesh1.position.set(0, 0, 0);
  
  const geometry2 = new THREE.BoxGeometry(.75, .5, .75);
  const mesh2 = new THREE.Mesh(geometry2, material1);
  mesh2.position.set(-1, 0, 0);
  
  const geometry3 = new THREE.BoxGeometry(.5, .75, .75);
  const mesh3 = new THREE.Mesh(geometry2, material1);
  mesh3.position.set(1, 0, 0);

  const cube = new THREE.Group();
  cube.add(mesh1, mesh2, mesh3);
  cube.position.set(x, y, -3);

  return cube;
}