import { useState, useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";



export function LoadSceneDecrease() {
  let scene,
    camera,
    ambient,
    canvas,
    loader,
    cloudParticles = [];
  let clock = new THREE.Clock();
  var mouseX = 0,
    mouseY = 0;
  var start_time = Date.now();

  var windowHalfX = window.innerWidth / 2;
  var windowHalfY = window.innerHeight / 2;

  canvas = document.getElementById("void22");
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    2200
  );
  camera.position.z = 0;
  camera.position.y = 200;

  camera.rotation.x = 1;
  camera.rotation.y = -0.01;
  camera.rotation.z = 0;

  let renderer = new THREE.WebGLRenderer({
    logarithmicDepthBuffer: true,
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  scene.fog = new THREE.FogExp2(0xededed, 0.0007);
  loader = new THREE.TextureLoader();

  loader.load("cloud.png", function (texture) {
    let cloudGeometry = new THREE.PlaneBufferGeometry(500, 500);

    for (let i = 0; i < 1000; i++) {
      let cloudMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        color: 0xffffff,
      });
      let cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
      cloud.position.set(
        Math.random() * 7701 - 5200,
        Math.random() * 1401 + 600,
        -1200
      );
      cloud.rotation.x = 1;
      cloud.rotation.y = -0.01;
      cloud.rotation.z = Math.random() * 2 * Math.PI;
      cloud.scale.x = cloud.scale.y = Math.random() * Math.random() * 1.5 + 0.5;

      cloud.material.opacity = 1;
      cloudParticles.push(cloud);
      scene.add(cloud);
    }
  });
  document.addEventListener("mousemove", onMouseMove, false);
  window.addEventListener("resize", onWindowResize, false);
  function onWindowResize() {
    camera.aspect = (window.innerWidth) / (window.innerHeight);

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth , window.innerHeight );
  }
  function onMouseMove(event) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }
  const animate = () => {
    cloudParticles.forEach((e, index) => {
      e.position.y -= 0.9;

      if (e.position.y - camera.position.y <= 1100)
        e.material.opacity -= 0.0009;
      else if (
        e.position.y - camera.position.y > 1100 ||
        e.position.y - camera.position.y < 1800
      )
        e.material.opacity += 0.004;

      if (e.position.y < 410) {
        e.material.opacity = 0;
        e.position.y = Math.random() * 101 + 1900;

        e.position.needsUpdate = true;
      }
    });

    camera.position.x += (-mouseX - camera.position.x) * 0.01;

    renderer.render(scene, camera);

    requestAnimationFrame(animate);
  };
  animate();
}
export function loadGLTFModel(scene, glbPath, options) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "dinosaur";
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });

        resolve(obj);
      },
      undefined,
      function (error) {
        console.log(error);
        reject(error);
      }
    );
  });
}

export function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}




export function LoadStars() {
  let scene, camera, renderer, canvas, stars;
  var windowHalfX = window.innerWidth / 2;
  var windowHalfY = window.innerHeight / 2;
var mouseX = 0, mouseY = 0;


  canvas = document.getElementById("stars");



  scene = new THREE.Scene();



  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 1;
  camera.rotation.x = Math.PI / 2;


  renderer = new THREE.WebGLRenderer({ canvas });

  renderer.setSize(window.innerWidth, window.innerHeight * 0.5);
  renderer.setPixelRatio(window.devicePixelRatio);


  const points = []


  for (let i = 0; i < 2000; i++) {
      let star = new THREE.Vector3(
          Math.random() * 2000 - 1000,
          Math.random() * 2000 - 1000,
          Math.random() * 2000 - 1000
      );
      points.push(star);
  }
  let geometry = new THREE.BufferGeometry().setFromPoints(points)

  let sprite = new THREE.TextureLoader().load('dot.png');
  let starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 1.7,
      map: sprite
  });
  stars = new THREE.Points(geometry, starMaterial);
  scene.add(stars);

  document.addEventListener( 'mousemove', onMouseMove, false );
  window.addEventListener( 'resize', onWindowResize, false );
  function onWindowResize(){



      camera.aspect = (window.innerWidth)/( window.innerHeight);
      
      camera.updateProjectionMatrix();
  
      renderer.setSize( window.innerWidth,window.innerHeight*0.5 );
  
  }
  function onMouseMove( event ) {

    mouseX = (event.clientX - windowHalfX)
    mouseY = (event.clientY - windowHalfY)

}
  const animate = () => {
      if(camera.position.x >= -300 || camera.position.x <= 299)
  camera.position.x += (-mouseX - camera.position.x) * 0.01;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
  }
  animate();
}
