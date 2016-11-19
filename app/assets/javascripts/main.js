var app = app || {};


app.init = function(){

  app.scene = new THREE.Scene();

  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera = new THREE.PerspectiveCamera(60, app.width/app.height, 0.1, 1000);

  app.camera.position.x = 0;
  app.camera.position.y = 0;
  app.camera.position.z = -900;

  app.camera.lookAt(app.scene.position);

  app.renderer = new THREE.WebGLRenderer();
  app.renderer.setSize(app.width, app.height);
  app.renderer.setClearColor(0x000000);
  app.animate();
};


app.animate = function(){

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
