import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';
import {RoundedBoxGeometry} from './RoundedBoxGeometry.js';
export default function santa ({x, y, z}) 
{
const trineo = new THREE.Group();

    // ============================
    // MATERIALES
    // ============================
    const materialRojo = new THREE.MeshPhongMaterial({ color: 0x8b0000, shininess: 50 });
    const materialRojoAcoj = new THREE.MeshPhongMaterial({ color: 0xc43232, shininess: 60 });
    const materialDorado = new THREE.MeshPhongMaterial({ color: 0xffd700, shininess: 120 });
    const metal = new THREE.MeshPhongMaterial({ color: 0xaaaaaa, shininess: 90 });

    // ============================
    // BASE DEL TRINEO
    // ============================
    const baseInf = new THREE.Mesh(
        new THREE.BoxGeometry(8, 2, 4),
        materialRojo
    );
    baseInf.position.set(0, 2.5, 0);
    trineo.add(baseInf);

    const baseSup = new THREE.Mesh(
        new THREE.BoxGeometry(7.5, 1.5, 3.5),
        materialRojo
    );
    baseSup.position.set(0, 3.5, 0);
    trineo.add(baseSup);

    // ============================
    // RESPALDO
    // ============================
    const respaldo = new THREE.Mesh(
        new THREE.BoxGeometry(1, 3, 3.2),
        materialRojoAcoj
    );
    respaldo.position.set(-4, 5, 0);
    trineo.add(respaldo);

    // ============================
    // ASIENTO
    // ============================
    const asiento = new THREE.Mesh(
        new THREE.BoxGeometry(6.5, 0.8, 3),
        materialRojoAcoj
    );
    asiento.position.set(0, 4.5, 0);
    trineo.add(asiento);

    // ============================
    // PATINES
    // ============================
    function crearPatin(z) {
        const curva = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-4.5, 0, 0),
            new THREE.Vector3(0, 0.7, 0),
            new THREE.Vector3(4.5, 0.7, 0),
            new THREE.Vector3(6, 2.5, 0),
        ]);

        const geo = new THREE.TubeGeometry(curva, 64, 0.35, 16, false);
        const mesh = new THREE.Mesh(geo, metal);
        mesh.position.set(0, 0.6, z);

        return mesh;
    }

    trineo.add(crearPatin(2.2));
    trineo.add(crearPatin(-2.2));

    // ============================
    // DETALLES DORADOS
    // ============================
    const borde = new THREE.Mesh(
        new THREE.BoxGeometry(8.2, 0.2, 4.2),
        materialDorado
    );
    borde.position.set(0, 4.2, 0);
    trineo.add(borde);

    // ============================
    // POSICIÓN FINAL
    // ============================
    trineo.position.set(x, y, z);

    // ESFERA CABEZA
    var cabezaGeometria = new THREE.SphereGeometry(6);
    var texturaCabeza = new THREE.TextureLoader().load("./assets/piel.jpg");
    var materialCabeza = new THREE.MeshLambertMaterial({ map: texturaCabeza });
    var cabeza = new THREE.Mesh(cabezaGeometria, materialCabeza);
    //scene.add(cabeza);
    cabeza.position.set(0, 23, 0);

    // BARRIGA
    var barrigaGeometria = new THREE.SphereGeometry(10);
    var texturaBarriga = new THREE.TextureLoader().load("./assets/esfera2.jpg");
    var materialBarriga = new THREE.MeshLambertMaterial({ map: texturaBarriga });
    var barriga = new THREE.Mesh(barrigaGeometria, materialBarriga);
    //scene.add(barriga);
    barriga.position.set(0, 10, 0);

    // SOMBRERO
    var sombreroCilindro = new THREE.CylinderGeometry(0, 4.5, 8, 50);
    var sombreroTextura = new THREE.TextureLoader().load("./assets/esfera2.jpg");
    var sombreroMaterial = new THREE.MeshLambertMaterial({ map: sombreroTextura });
    var sombrero = new THREE.Mesh(sombreroCilindro, sombreroMaterial);
    //scene.add(sombrero);
    sombrero.position.set(0, 32, 0);
    sombrero.rotation.y = 3;

    // POMPON
    var pomponEsfera = new THREE.SphereGeometry(1);
    var pomponTextura = new THREE.TextureLoader().load("./assets/nieve.jpg");
    var pomponMaterial = new THREE.MeshLambertMaterial({ map: pomponTextura });
    var pompon = new THREE.Mesh(pomponEsfera, pomponMaterial);
    //scene.add(pompon);
    pompon.position.set(0, 36, 0);

    // BASE SOMBRERO DORADA
    var baseSombreroCilindro = new THREE.CylinderGeometry(4, 4.5, 1, 50);
    var baseSombreroTextura = new THREE.TextureLoader().load("./assets/nieve.jpg");
    var baseSombreroMaterial = new THREE.MeshLambertMaterial({ map: baseSombreroTextura });
    var baseSombrero = new THREE.Mesh(baseSombreroCilindro, baseSombreroMaterial);
    //scene.add(baseSombrero);
    baseSombrero.position.set(0, 28.6, 0);

    // BASE SOMBRERO ROJA
    var baseSombreroRojaCilindro = new THREE.CylinderGeometry(6, 6, 1, 50);
    var baseSombreroRojaTextura = new THREE.TextureLoader().load("./assets/esfera2.jpg");
    var baseSombreroRojaMaterial = new THREE.MeshLambertMaterial({ map: baseSombreroRojaTextura });
    var baseSombreroRoja = new THREE.Mesh(baseSombreroRojaCilindro, baseSombreroRojaMaterial);
    //scene.add(baseSombreroRoja);
    baseSombreroRoja.position.set(0, 27.5, 0);

    // PELO
    var peloCilindro = new THREE.CylinderGeometry(5.3, 5.3, 2, 50);
    var peloTextura = new THREE.TextureLoader().load("./assets/cabello.jpg");
    var peloMaterial = new THREE.MeshLambertMaterial({ map: peloTextura });
    var pelo = new THREE.Mesh(peloCilindro, peloMaterial);
    //scene.add(pelo);
    pelo.position.set(0, 26, 0);

    // BARBA
    var barbaEsfera = new THREE.SphereGeometry(5);
    var barbaTextura = new THREE.TextureLoader().load("./assets/cabello.jpg");
    var barbaMaterial = new THREE.MeshLambertMaterial({ map: barbaTextura });
    var barba = new THREE.Mesh(barbaEsfera, barbaMaterial);
    //scene.add(barba);
    barba.position.set(0, 20, 2);

    // OJO IZQUIERDO
    var ojoIzquierdoEsfera = new THREE.SphereGeometry(1.1);
    var ojoIzquierdoMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var ojoIzquierdo = new THREE.Mesh(ojoIzquierdoEsfera, ojoIzquierdoMaterial);
    //scene.add(ojoIzquierdo);
    ojoIzquierdo.position.set(-1.1, 24.1, 5);

    // OJO DERECHO
    var esferaOjoDerecho = new THREE.SphereGeometry(1.1);
    var ojoDerecho = new THREE.Mesh(esferaOjoDerecho, ojoIzquierdoMaterial);
    //scene.add(ojoDerecho);
    ojoDerecho.position.set(1.1, 24.1, 5);

    // PUPILA OJO IZQUIERDO
    var esferaPupilaIzquierda = new THREE.SphereGeometry(0.6);
    var materialPupilaIzquierda = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var pupilaIzquierda = new THREE.Mesh(esferaPupilaIzquierda, materialPupilaIzquierda);
    //scene.add(pupilaIzquierda);
    pupilaIzquierda.position.set(-1.2, 24.3, 5.7);

    // PUPILA OJO DERECHO
    var esferaPupilaDerecha = new THREE.SphereGeometry(0.6);
    var materialPupilaDerecha = new THREE.MeshLambertMaterial({ color: 0x000000 }); 
    var pupilaDerecha = new THREE.Mesh(esferaPupilaDerecha, materialPupilaDerecha);
    //scene.add(pupilaDerecha);
    pupilaDerecha.position.set(1.2, 24.3, 5.7);

    // BRILLO 1 OJO IZQUIERDO
    var esferaBrilloOjoIzquierdo1 = new THREE.SphereGeometry(0.16);
    var materialBrilloBlanco = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var brilloOjoIzquierdo1 = new THREE.Mesh(esferaBrilloOjoIzquierdo1, materialBrilloBlanco);
    //scene.add(brilloOjoIzquierdo1);
    brilloOjoIzquierdo1.position.set(-1.3, 24.3, 6.15);

    // BRILLO 2 OJO IZQUIERDO 
    var esferaBrilloOjoIzquierdo2 = new THREE.SphereGeometry(0.24);
    var brilloOjoIzquierdo2 = new THREE.Mesh(esferaBrilloOjoIzquierdo2, materialBrilloBlanco);
    //scene.add(brilloOjoIzquierdo2);
    brilloOjoIzquierdo2.position.set(-1.4, 24.5, 6);
    
    // BRILLO 1 OJO DERECHO
    var esferaBrilloOjoDerecho1 = new THREE.SphereGeometry(0.16);
    var brilloOjoDerecho1 = new THREE.Mesh(esferaBrilloOjoDerecho1, materialBrilloBlanco);
    //scene.add(brilloOjoDerecho1);
    brilloOjoDerecho1.position.set(1.3, 24.3, 6.15);

    // BRILLO 2 OJO DERECHO
    var esferaBrilloOjoDerecho2 = new THREE.SphereGeometry(0.24);
    var brilloOjoDerecho2 = new THREE.Mesh(esferaBrilloOjoDerecho2, materialBrilloBlanco);
    //scene.add(brilloOjoDerecho2);
    brilloOjoDerecho2.position.set(1.4, 24.5, 6);

    // NARIZ
    var geometryNariz = new THREE.CapsuleGeometry(0.6, 0.4, 8, 8);
    var texturaNariz = new THREE.TextureLoader().load("./assets/piel2.jpg");
    var materialNariz = new THREE.MeshLambertMaterial({ map: texturaNariz });
    var nariz = new THREE.Mesh(geometryNariz, materialNariz);
    //scene.add(nariz);
    nariz.position.set(0, 22.9, 6);

    // BOCA
    var esferaBocaCentral = new THREE.SphereGeometry(0.6);
    var materialBoca = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var bocaCentral = new THREE.Mesh(esferaBocaCentral, materialBoca);
    //scene.add(bocaCentral);
    bocaCentral.position.set(0, 21.5, 6.4);

    // MEJILLA IZQUIERDA
    var esferaMejillaIzquierda = new THREE.SphereGeometry(0.7);
    var texturaMejilla = new THREE.TextureLoader().load("./assets/mejilla.jpg");
    var materialMejilla = new THREE.MeshLambertMaterial({ map: texturaMejilla });
    var mejillaIzquierda = new THREE.Mesh(esferaMejillaIzquierda, materialMejilla);
    //scene.add(mejillaIzquierda);
    mejillaIzquierda.position.set(-2.6, 22.4, 4.8);

    // MEJILLA DERECHA
    var esferaMejillaDerecha = new THREE.SphereGeometry(0.7);
    var mejillaDerecha = new THREE.Mesh(esferaMejillaDerecha, materialMejilla);
    //scene.add(mejillaDerecha);
    mejillaDerecha.position.set(2.6, 22.4, 4.8);

    // TEXTURA PARA LOS BOTONES
    var texturaSombrero = new THREE.TextureLoader().load("./assets/nieve.jpg"); 

    // BOTON 1
    var esferaBoton1 = new THREE.SphereGeometry(0.7);
    var boton1 = new THREE.Mesh(esferaBoton1, new THREE.MeshLambertMaterial({ map: texturaSombrero }));
    //scene.add(boton1);
    boton1.position.set(0, 15.5, 8);

    // BOTON 2
    var esferaBoton2 = new THREE.SphereGeometry(0.8);
    var boton2 = new THREE.Mesh(esferaBoton2, new THREE.MeshLambertMaterial({ map: texturaSombrero }));
    //scene.add(boton2);
    boton2.position.set(0, 13.5, 8.9);

    // BOTON 3
    var esferaBoton3 = new THREE.SphereGeometry(0.9);
    var boton3 = new THREE.Mesh(esferaBoton3, new THREE.MeshLambertMaterial({ map: texturaSombrero }));
    //scene.add(boton3);
    boton3.position.set(0, 11.4, 9.4);

    // CINTURÓN
    var cilindroCinturon = new THREE.CylinderGeometry(10.2, 9.8, 2, 50);
    var texturaCinturon = new THREE.TextureLoader().load("./assets/esfera2.jpg");
    var materialCinturon = new THREE.MeshLambertMaterial({ map: texturaCinturon });
    var meshCinturon = new THREE.Mesh(cilindroCinturon, materialCinturon);
    //scene.add(meshCinturon);
    meshCinturon.position.set(0, 8, 0);

    // EVILLA NEGRA
    var cuboEvillaNegra = new THREE.BoxGeometry(3, 3, 3);
    var texturaEvillaNegra = new THREE.TextureLoader().load("./assets/esfera22.jpg");
    var materialEvillaNegra = new THREE.MeshLambertMaterial({ map: texturaEvillaNegra });
    var meshEvillaNegra = new THREE.Mesh(cuboEvillaNegra, materialEvillaNegra);
    //scene.add(meshEvillaNegra);
    meshEvillaNegra.position.set(0, 8, 8.9);

    // EVILLA ROJA
    var cuboEvillaRoja = new THREE.BoxGeometry(2, 2, 2);
    var texturaEvillaRoja = new THREE.TextureLoader().load("./assets/esfera2.jpg");
    var materialEvillaRoja = new THREE.MeshLambertMaterial({ map: texturaEvillaRoja });
    var meshEvillaRoja = new THREE.Mesh(cuboEvillaRoja, materialEvillaRoja);
    //scene.add(meshEvillaRoja);
    meshEvillaRoja.position.set(0, 8, 9.5);

    // BRAZO IZQUIERDO
    var geometriaBrazoIzquierdo = new THREE.CylinderGeometry(1, 3, 8, 32); 
    var texturaBrazo = new THREE.TextureLoader().load("./assets/esfera2.jpg");
    var materialBrazo = new THREE.MeshLambertMaterial({ map: texturaBrazo });
    var brazoIzquierdo = new THREE.Mesh(geometriaBrazoIzquierdo, materialBrazo);
    //scene.add(brazoIzquierdo);
    brazoIzquierdo.position.set(-9, 15, 0);
    brazoIzquierdo.rotation.z = 1.2;

    // CONTORNO BRAZO IZQUIERDO
    var geometriaContornoBrazoIzq = new THREE.CylinderGeometry(1, 2, 1, 50);
    var texturaContornoBrazoIzq = new THREE.TextureLoader().load("./assets/nieve.jpg");
    var materialContornoBrazoIzq = new THREE.MeshLambertMaterial({ map: texturaContornoBrazoIzq });
    var contornoBrazoIzq = new THREE.Mesh(geometriaContornoBrazoIzq, materialContornoBrazoIzq);
    //scene.add(contornoBrazoIzq);
    contornoBrazoIzq.position.set(-13.15, 16.65, 0);
    contornoBrazoIzq.rotation.z = 4.34;

    // MANO IZQUIERDA
    var geometriaManoIzq = new RoundedBoxGeometry(2.8, 4, 1.9, 5, 10);
    var texturaManoIzq = new THREE.TextureLoader().load("./assets/piel.jpg");
    var materialManoIzq = new THREE.MeshLambertMaterial({ map: texturaManoIzq });
    var manoIzq = new THREE.Mesh(geometriaManoIzq, materialManoIzq);
    //scene.add(manoIzq);
    manoIzq.position.set(-14.7, 17.2, 0);
    manoIzq.rotation.z = 4.34;

    // DEDO IZQUIERDO
    var geometriaDedoIzq = new RoundedBoxGeometry(1.3, 3, 1.3, 5, 10);
    var texturaDedoIzq = new THREE.TextureLoader().load("./assets/piel.jpg");
    var materialDedoIzq = new THREE.MeshLambertMaterial({ map: texturaDedoIzq });
    var dedoIzq = new THREE.Mesh(geometriaDedoIzq, materialDedoIzq);
    //scene.add(dedoIzq);
    dedoIzq.position.set(-13.7, 17.9, 0);
    dedoIzq.rotation.y = 5;

    // BRAZO DERECHO
    var geometriaBrazoDerecho = new THREE.CylinderGeometry(1, 3, 8, 32); 
    var texturaBrazo = new THREE.TextureLoader().load("./assets/esfera2.jpg");
    var materialBrazo = new THREE.MeshLambertMaterial({ map: texturaBrazo });
    var brazoDerecho = new THREE.Mesh(geometriaBrazoDerecho, materialBrazo);
    //scene.add(brazoDerecho);
    brazoDerecho.position.set(9, 15, 0); 
    brazoDerecho.rotation.z = -1.2;

    // CONTORNO BRAZO DERECHO
    var geometriaContornoBrazoDer = new THREE.CylinderGeometry(1, 2, 1, 50);
    var texturaContornoBrazoDer = new THREE.TextureLoader().load("./assets/nieve.jpg");
    var materialContornoBrazoDer = new THREE.MeshLambertMaterial({ map: texturaContornoBrazoDer });
    var contornoBrazoDer = new THREE.Mesh(geometriaContornoBrazoDer, materialContornoBrazoDer);
    //scene.add(contornoBrazoDer);
    contornoBrazoDer.position.set(13.15, 16.65, 0);  
    contornoBrazoDer.rotation.z = -4.34;

    // MANO DERECHA
    var geometriaManoDer = new RoundedBoxGeometry(2.8, 4, 1.9, 5, 10);
    var texturaManoDer = new THREE.TextureLoader().load("./assets/piel.jpg");
    var materialManoDer = new THREE.MeshLambertMaterial({ map: texturaManoDer });
    var manoDer = new THREE.Mesh(geometriaManoDer, materialManoDer);
    //scene.add(manoDer);
    manoDer.position.set(14.7, 17.2, 0);
    manoDer.rotation.z = -4.34;

    // DEDO DERECHO
    var geometriaDedoDer = new RoundedBoxGeometry(1.3, 3, 1.3, 5, 10);
    var texturaDedoDer = new THREE.TextureLoader().load("./assets/piel.jpg");
    var materialDedoDer = new THREE.MeshLambertMaterial({ map: texturaDedoDer });
    var dedoDer = new THREE.Mesh(geometriaDedoDer, materialDedoDer);
    //scene.add(dedoDer);
    dedoDer.position.set(13.7, 17.9, 0);
    dedoDer.rotation.y = -5;

    // PIERNA IZQUIERDA
    var geometriaPiernaIzq = new THREE.CylinderGeometry(1, 3, 8, 32); 
    var piernaIzq = new THREE.Mesh(geometriaPiernaIzq, materialBrazo);
    //scene.add(piernaIzq);
    piernaIzq.position.set(-3, -2, 0);
    piernaIzq.rotation.x = 3.13;

    // CALCETÍN PIE IZQUIERDO
    var geometriaCalcetinPieIzq = new THREE.CylinderGeometry(2, 2, 1, 50);
    var texturaCalcetinPieIzq = new THREE.TextureLoader().load("./assets/nieve.jpg");
    var materialCalcetinPieIzq = new THREE.MeshLambertMaterial({ map: texturaCalcetinPieIzq });
    var calcetinPieIzq = new THREE.Mesh(geometriaCalcetinPieIzq, materialCalcetinPieIzq);
    //scene.add(calcetinPieIzq);
    calcetinPieIzq.position.set(-3, -4.3, 0);

    // ZAPATO IZQUIERDO
    var geometriaZapatoIzq = new THREE.CapsuleGeometry(2.5, 3, 30, 30);
    var texturaZapatoIzq = new THREE.TextureLoader().load("./assets/sombrero.jpg");
    var materialZapatoIzq = new THREE.MeshLambertMaterial({ map: texturaZapatoIzq });
    var zapatoIzq = new THREE.Mesh(geometriaZapatoIzq, materialZapatoIzq);
    //scene.add(zapatoIzq);
    zapatoIzq.position.set(-3, -7, 0);
    zapatoIzq.rotation.x = Math.PI / 2;

    // PIERNA DERECHA
    var geometriaPiernaDer = new THREE.CylinderGeometry(1, 3, 8, 32); 
    var piernaDer = new THREE.Mesh(geometriaPiernaDer, materialBrazo);
    //scene.add(piernaDer);
    piernaDer.position.set(3, -2, 0);
    piernaDer.rotation.x = 3.13;

    // CALCETÍN PIE DERECHO
    var geometriaCalcetinPieDer = new THREE.CylinderGeometry(2, 2, 1, 50);
    var texturaCalcetinPieDer = new THREE.TextureLoader().load("./assets/nieve.jpg");
    var materialCalcetinPieDer = new THREE.MeshLambertMaterial({ map: texturaCalcetinPieDer });
    var calcetinPieDer = new THREE.Mesh(geometriaCalcetinPieDer, materialCalcetinPieDer);
    //scene.add(calcetinPieDer);
    calcetinPieDer.position.set(3, -4.3, 0);

    // ZAPATO DERECHO
    var geometriaZapatoDer = new THREE.CapsuleGeometry(2.5, 3, 30, 30);
    var texturaZapatoDer = new THREE.TextureLoader().load("./assets/sombrero.jpg");
    var materialZapatoDer = new THREE.MeshLambertMaterial({ map: texturaZapatoDer });
    var zapatoDer = new THREE.Mesh(geometriaZapatoDer, materialZapatoDer);
    //scene.add(zapatoDer);
    zapatoDer.position.set(3, -7, 0);
    zapatoDer.rotation.x = Math.PI / 2;

    

    var santita = new THREE.Group();
    santita.add(
        cabeza, 
        barriga, 
        sombrero, 
        pompon, 
        baseSombrero, 
        baseSombreroRoja, 
        pelo, 
        barba, 
        ojoIzquierdo, 
        ojoDerecho, 
        pupilaIzquierda, 
        pupilaDerecha, 
        brilloOjoIzquierdo1, 
        brilloOjoIzquierdo2, 
        brilloOjoDerecho1, 
        brilloOjoDerecho2, 
        nariz, 
        bocaCentral, 
        mejillaIzquierda,
        mejillaDerecha, 
        boton1, 
        boton2, 
        boton3, 
        brazoIzquierdo, 
        brazoDerecho, 
        manoIzq,
        manoDer, 
        dedoIzq,
        dedoDer,
        piernaIzq, 
        piernaDer, 
        calcetinPieIzq, 
        calcetinPieDer, 
        zapatoIzq, 
        zapatoDer, 
        meshCinturon, 
        meshEvillaNegra, 
        meshEvillaRoja, 
        contornoBrazoIzq, 
        contornoBrazoDer
    );
    santita.position.set(x, y, z);  
    return santita;
}