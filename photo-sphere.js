var photoSphere = document.getElementById('photo-sphere');

var width  = photoSphere.offsetWidth;
    height = photoSphere.offsetWidth*0.5625;

var scene = new THREE.Scene();


var camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
camera.position.x = 0.1;

var renderer = Detector.webgl ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
renderer.setSize(width, height);

var sphere = new THREE.Mesh(
    new THREE.SphereGeometry(100, 20, 20),
    new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('Photosphere.jpg')
    })
);
sphere.scale.x = -1;
scene.add(sphere);

var controls = new THREE.OrbitControls(camera);
controls.noPan = true;
controls.noZoom = true; 
controls.autoRotate = false;
controls.autoRotateSpeed = 1;

photoSphere.appendChild(renderer.domElement);

render();

function render() {
    controls.update();
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

function onMouseWheel(event) {
    event.preventDefault();

    if (event.wheelDeltaY) { // WebKit
        camera.fov -= event.wheelDeltaY * 0.05;
    } else if (event.wheelDelta) { 	// Opera / IE9
        camera.fov -= event.wheelDelta * 0.05;
    } else if (event.detail) { // Firefox
        camera.fov += event.detail * 1.0;
    }

    camera.fov = Math.max(40, Math.min(100, camera.fov));
    camera.updateProjectionMatrix();
}

document.addEventListener('mousewheel', onMouseWheel, false);
document.addEventListener('DOMMouseScroll', onMouseWheel, false);