var app = app || {};


app.init = function(){

  app.scene = new THREE.Scene();
  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera = new THREE.PerspectiveCamera(75, app.width/app.height, 0.1, 1000);

  app.camera.position.x = 0;
  app.camera.position.y = 0;
  app.camera.position.z = -900;

  app.camera.lookAt(app.scene.position);

  app.renderer = new THREE.WebGLRenderer();
  app.renderer.setSize(app.width, app.height);
  document.body.appendChild(app.renderer.domElement);

  var earthGeometry = new THREE.SphereGeometry(2, 32, 32);
  var earthMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    wireframe: true
  });

  app.earth = new THREE.Mesh(earthGeometry, earthMaterial);

  var light = new THREE.DirectionalLight(0xffffff);
  light.position.set(0,1,1).normalize();

  app.scene.add(new THREE.AmbientLight(0x333333), app.earth);



  app.controls = new THREE.TrackballControls(app.camera);

  app.animate();
};


app.animate = function(){

  if (app.camera.position.z >=200) {
    camera.position.z = 200;
  }

  if (app.camera.position.z < 150) {
    $('.saganQuote').fadeOut(1000);
    $('.scrollToZoom').fadeOut(1000);
  } else {
    $('.saganQuote').fadeIn(1000);
    $('.scrollToZoom').fadeIn(1000);
  }

  app.controls.update();

  app.earth.rotation.y += 0.002;

  app.renderer.render(app.scene, app.camera);

  requestAnimationFrame(app.animate);
};

app.onResize = function(){
  app.width = window.innerWidth;
  app.height = windoe.innerHeight;

  app.camera.aspect = app.width / app.height;
  app.camera.updateProjectionMatrix();

  app.renderer.setSize(app.width, app.height);
};

window.addEventListener("resize", app.onResize, false);


$(document).ready(function(){
  app.init();
})
