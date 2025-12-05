import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";
import { RoundedBoxGeometry } from "./RoundedBoxGeometry.js";

export default function regalo1({ x = 0, y = 0, z = 0 } = {}) {

  // BASE
  const baseGeo = new RoundedBoxGeometry(5, 5, 5, 3, 0.5);
  const baseTex = new THREE.TextureLoader().load("./assets/2.jpg");
  const baseMat = new THREE.MeshLambertMaterial({ map: baseTex });
  const baseMesh = new THREE.Mesh(baseGeo, baseMat);
  baseMesh.position.set(0, 5, 0);

  // LISTONES
  const ribbonGeo = new RoundedBoxGeometry(1.5, 5.1, 5.1, 3, 0.5);
  const ribbonTex = new THREE.TextureLoader().load("./assets/liston.jpg");
  const ribbonMat = new THREE.MeshLambertMaterial({ map: ribbonTex });

  const ribbonV = new THREE.Mesh(ribbonGeo, ribbonMat);
  ribbonV.position.set(0, 5, 0);

  const ribbonH = new THREE.Mesh(ribbonGeo, ribbonMat);
  ribbonH.position.set(0, 5, 0);
  ribbonH.rotateY(Math.PI / 2);

  // MOÑO
  const knotGeo = new THREE.TorusKnotGeometry(1, 0.25, 100, 16, 2, 5);
  const knotMat = new THREE.MeshLambertMaterial({ map: ribbonTex });
  const knotMesh = new THREE.Mesh(knotGeo, knotMat);
  knotMesh.position.set(0, 8, 0);
  knotMesh.rotateX(Math.PI / 2);

  // GRUPO
  const regalo = new THREE.Group();
  regalo.add(baseMesh, ribbonV, ribbonH, knotMesh);

  regalo.position.set(x, y, z);
  return regalo;
}
