function init() {
    scene = new THREE.Scene(); //створення сцени ("система")
    
    var WIDTH = window.innerWidth, HEIGHT = window.innerHeight;
    
    renderer = new THREE.WebGLRenderer({antialias: true}); 
    renderer.setSize(WIDTH, HEIGHT);  
    
    document.body.appendChild(renderer.domElement);
    
    camera = new THREE.PerspectiveCamera(45, WIDTH/ HEIGHT, 0.1,20000); 
    camera.position.set(0, 6, 0); 
    scene.add(camera);
    
    window.addEventListener('resize', function() { 
        var WIDTH = window.innerWidth, HEIGHT = window.innerHeight; 
        renderer.setSize(WIDTH, HEIGHT); 
        camera.aspect = WIDTH / HEIGHT; 
        camera.updateProjectMatrix(); 
    });
    
    renderer.setClearColor(0x7b68ee, 1); 
 
    var light = new THREE.PointLight(0xffffff);
    light.position.set(-100, 200, 100);
    scene.add(light);

    var loader = new THREE.TextureLoader();

    var cylgeometry = new THREE.CylinderGeometry(4, 4, 1, 9);
    var cylmaterial = new THREE.MeshLambertMaterial({map: loader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlCzLAGB7kk57IEKDj_xEuuX_sFsCAY7n0UA&usqp=CAU')});
    var cylmesh = new THREE.Mesh(cylgeometry, cylmaterial);
 
    cylmesh.position.set(0.9, -5, -6);
    scene.add(cylmesh); 
    
    controls = new THREE.OrbitControls(camera,renderer.domElement);
}

function animate()
{
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
