import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import * as dat from 'dat.gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AudioAnalyser } from 'three';

const VisualCanvas = ({ audioUrl, styleConfig, setStyleConfig }) => {
    const canvasRef = useRef(null);
    const analyser = useRef(null);
    const audio = useRef(null);
    const scene = useRef(null);
    const camera = useRef(null);
    const renderer = useRef(null);
    const cube = useRef(null);
    const sphere = useRef(null);
    const torus = useRef(null);
    const cone = useRef(null);
    const cylinder = useRef(null);
    const dodecahedron = useRef(null);
    const icosahedron = useRef(null);
    const octahedron = useRef(null);
    const tetrahedron = useRef(null);
    const ambientLight = useRef(null);
    const directionalLight = useRef(null);
    const pointLight = useRef(null);
    const spotLight = useRef(null);
    const hemisphereLight = useRef(null);
    const rectAreaLight = useRef(null);
    const gui = useRef(null);
    const controls = useRef(null);

    useEffect(() => {
        if (!audioUrl || !styleConfig) return;

        // Initialize Three.js scene, camera, and renderer
        scene.current = new THREE.Scene();
        camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
        renderer.current.setSize(window.innerWidth, window.innerHeight);
        renderer.current.setClearColor(styleConfig.backgroundColor || 0x000000); // Use backgroundColor from styleConfig or default to black

        // OrbitControls for camera manipulation
        controls.current = new OrbitControls(camera.current, renderer.current.domElement);

        // Load audio and set up analyser
        audio.current = new Audio(audioUrl);
        audio.current.crossOrigin = "anonymous";
        audio.current.play();
        const audioListener = new THREE.AudioListener();
        camera.current.add(audioListener);
        analyser.current = new THREE.AudioAnalyser(new THREE.Audio(audioListener), 32);
        audio.current.setAnalyser(analyser.current.getAnalyser());


        // Create materials based on styleConfig, default to MeshBasicMaterial if not provided
        const materialConfig = styleConfig.material || { type: 'MeshBasicMaterial', color: 0x00ff00 };
        let material;
        switch (materialConfig.type) {
            case 'MeshBasicMaterial':
                material = new THREE.MeshBasicMaterial({ color: materialConfig.color || 0x00ff00, wireframe: materialConfig.wireframe || false });
                break;
            case 'MeshNormalMaterial':
                material = new THREE.MeshNormalMaterial({ wireframe: materialConfig.wireframe || false });
                break;
            case 'MeshStandardMaterial':
                material = new THREE.MeshStandardMaterial({ color: materialConfig.color || 0x00ff00, metalness: materialConfig.metalness || 0.5, roughness: materialConfig.roughness || 0.5, wireframe: materialConfig.wireframe || false });
                break;
            case 'MeshPhysicalMaterial':
                material = new THREE.MeshPhysicalMaterial({ color: materialConfig.color || 0x00ff00, metalness: materialConfig.metalness || 0.5, roughness: materialConfig.roughness || 0.5, clearcoat: materialConfig.clearcoat || 0, clearcoatRoughness: materialConfig.clearcoatRoughness || 0, wireframe: materialConfig.wireframe || false });
                break;
            case 'MeshPhongMaterial':
                material = new THREE.MeshPhongMaterial({ color: materialConfig.color || 0x00ff00, specular: materialConfig.specular || 0x111111, shininess: materialConfig.shininess || 30, wireframe: materialConfig.wireframe || false });
                break;
            case 'MeshToonMaterial':
                material = new THREE.MeshToonMaterial({ color: materialConfig.color || 0x00ff00, gradientMap: materialConfig.gradientMap || null, wireframe: materialConfig.wireframe || false });
                break;
            case 'MeshLambertMaterial':
                material = new THREE.MeshLambertMaterial({ color: materialConfig.color || 0x00ff00, wireframe: materialConfig.wireframe || false });
                break;
            default:
                material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        }


        // Create geometries based on styleConfig, default to BoxGeometry if not provided
        const geometryConfig = styleConfig.geometry || { type: 'BoxGeometry', size: 1 };
        let geometry;
        switch (geometryConfig.type) {
            case 'BoxGeometry':
                geometry = new THREE.BoxGeometry(geometryConfig.size, geometryConfig.size, geometryConfig.size);
                break;
            case 'SphereGeometry':
                geometry = new THREE.SphereGeometry(geometryConfig.radius || 1, geometryConfig.widthSegments || 32, geometryConfig.heightSegments || 32);
                break;
            case 'TorusGeometry':
                geometry = new THREE.TorusGeometry(geometryConfig.radius || 1, geometryConfig.tube || 0.4, geometryConfig.radialSegments || 8, geometryConfig.tubularSegments || 6);
                break;
            case 'ConeGeometry':
                geometry = new THREE.ConeGeometry(geometryConfig.radius || 1, geometryConfig.height || 2, geometryConfig.radialSegments || 32);
                break;
            case 'CylinderGeometry':
                geometry = new THREE.CylinderGeometry(geometryConfig.radius || 1, geometryConfig.radius || 1, geometryConfig.height || 2, geometryConfig.radialSegments || 32);
                break;
            case 'DodecahedronGeometry':
                geometry = new THREE.DodecahedronGeometry(geometryConfig.radius || 1);
                break;
            case 'IcosahedronGeometry':
                geometry = new THREE.IcosahedronGeometry(geometryConfig.radius || 1);
                break;
            case 'OctahedronGeometry':
                geometry = new THREE.OctahedronGeometry(geometryConfig.radius || 1);
                break;
            case 'TetrahedronGeometry':
                geometry = new THREE.TetrahedronGeometry(geometryConfig.radius || 1);
                break;
            default:
                geometry = new THREE.BoxGeometry(1, 1, 1);
        }


        cube.current = new THREE.Mesh(geometry, material);
        sphere.current = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), material);
        torus.current = new THREE.Mesh(new THREE.TorusGeometry(1, 0.4, 8, 6), material);
        cone.current = new THREE.Mesh(new THREE.ConeGeometry(1, 2, 32), material);
        cylinder.current = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2, 32), material);
        dodecahedron.current = new THREE.Mesh(new THREE.DodecahedronGeometry(1), material);
        icosahedron.current = new THREE.Mesh(new THREE.IcosahedronGeometry(1), material);
        octahedron.current = new THREE.Mesh(new THREE.OctahedronGeometry(1), material);
        tetrahedron.current = new THREE.Mesh(new THREE.TetrahedronGeometry(1), material);


        // Add lights based on styleConfig, default to AmbientLight if not provided
        const lightsConfig = styleConfig.lights || [{ type: 'AmbientLight', color: 0xffffff, intensity: 0.5 }];
        lightsConfig.forEach(lightConfig => {
            let light;
            switch (lightConfig.type) {
                case 'AmbientLight':
                    ambientLight.current = new THREE.AmbientLight(lightConfig.color || 0xffffff, lightConfig.intensity || 0.5);
                    light = ambientLight.current;
                    scene.current.add(light);
                    break;
                case 'DirectionalLight':
                    directionalLight.current = new THREE.DirectionalLight(lightConfig.color || 0xffffff, lightConfig.intensity || 0.5);
                    directionalLight.current.position.set(lightConfig.position?.x || 0, lightConfig.position?.y || 1, lightConfig.position?.z || 0);
                    light = directionalLight.current;
                    scene.current.add(light);
                    break;
                case 'PointLight':
                    pointLight.current = new THREE.PointLight(lightConfig.color || 0xffffff, lightConfig.intensity || 0.5, lightConfig.distance || 100, lightConfig.decay || 1);
                    pointLight.current.position.set(lightConfig.position?.x || 0, lightConfig.position?.y || 1, lightConfig.position?.z || 0);
                    light = pointLight.current;
                    scene.current.add(light);
                    break;
                case 'SpotLight':
                    spotLight.current = new THREE.SpotLight(lightConfig.color || 0xffffff, lightConfig.intensity || 0.5, lightConfig.distance || 100, lightConfig.angle || Math.PI / 3, lightConfig.penumbra || 0, lightConfig.decay || 1);
                    spotLight.current.position.set(lightConfig.position?.x || 0, lightConfig.position?.y || 1, lightConfig.position?.z || 0);
                    light = spotLight.current;
                    scene.current.add(light);
                    break;
                case 'HemisphereLight':
                    hemisphereLight.current = new THREE.HemisphereLight(lightConfig.skyColor || 0xff0000, lightConfig.groundColor || 0x0000ff, lightConfig.intensity || 0.5);
                    light = hemisphereLight.current;
                    scene.current.add(light);
                    break;
                case 'RectAreaLight': // RectAreaLight only works with MeshStandardMaterial or MeshPhysicalMaterial
                    rectAreaLight.current = new THREE.RectAreaLight(lightConfig.color || 0xffffff, lightConfig.intensity || 0.5, lightConfig.width || 10, lightConfig.height || 10);
                    rectAreaLight.current.position.set(lightConfig.position?.x || 0, lightConfig.position?.y || 1, lightConfig.position?.z || 0);
                    rectAreaLight.current.lookAt(new THREE.Vector3());
                    light = rectAreaLight.current;
                    scene.current.add(light);
                    break;
                default:
                    ambientLight.current = new THREE.AmbientLight(0xffffff, 0.5);
                    light = ambientLight.current;
                    scene.current.add(light);
            }
        });


        // Add initial object to scene, default to cube
        scene.current.add(cube.current);
        camera.current.position.z = 3;

        // GUI controls for material properties
        gui.current = new dat.GUI();
        const materialFolder = gui.current.addFolder('Material');
        materialFolder.open(); // Open the folder by default

        // Add material type dropdown
        const materialTypes = ['MeshBasicMaterial', 'MeshNormalMaterial', 'MeshStandardMaterial', 'MeshPhysicalMaterial', 'MeshPhongMaterial', 'MeshToonMaterial', 'MeshLambertMaterial'];
        const materialTypeController = materialFolder.add({ type: materialConfig.type }, 'type', materialTypes).name('Type');
        materialTypeController.onChange(type => {
            const newMaterialConfig = { ...styleConfig.material, type };
            setStyleConfig(prevConfig => ({ ...prevConfig, material: newMaterialConfig }));
        });


        // Add color control if material supports color
        if (['MeshBasicMaterial', 'MeshStandardMaterial', 'MeshPhysicalMaterial', 'MeshPhongMaterial', 'MeshToonMaterial', 'MeshLambertMaterial'].includes(materialConfig.type)) {
            const colorController = materialFolder.addColor({ color: materialConfig.color || 0x00ff00 }, 'color').name('Color');
            colorController.onChange(color => {
                const newMaterialConfig = { ...styleConfig.material, color };
                setStyleConfig(prevConfig => ({ ...prevConfig, material: newMaterialConfig }));
            });
        }

        // Add wireframe control to material folder
        const wireframeController = materialFolder.add({ wireframe: materialConfig.wireframe || false }, 'wireframe').name('Wireframe');
        wireframeController.onChange(wireframe => {
            const newMaterialConfig = { ...styleConfig.material, wireframe };
            setStyleConfig(prevConfig => ({ ...prevConfig, material: newMaterialConfig }));
        });


        // Add geometry type dropdown
        const geometryTypes = ['BoxGeometry', 'SphereGeometry', 'TorusGeometry', 'ConeGeometry', 'CylinderGeometry', 'DodecahedronGeometry', 'IcosahedronGeometry', 'OctahedronGeometry', 'TetrahedronGeometry'];
        const geometryTypeController = gui.current.add({ type: geometryConfig.type }, 'type', geometryTypes).name('Geometry Type');
        geometryTypeController.onChange(type => {
            const newGeometryConfig = { ...styleConfig.geometry, type };
            setStyleConfig(prevConfig => ({ ...prevConfig, geometry: newGeometryConfig }));
        });


        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.current.update(); // Update OrbitControls

            const dataArray = analyser.current.getFrequencyData();
            const average = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
            const bass = dataArray[2]; // Low frequency (bass)
            const mid = dataArray[30]; // Mid frequency
            const treble = dataArray[100]; // High frequency (treble)


            // Update object properties based on audio data and styleConfig
            if (cube.current) {
                cube.current.rotation.x += styleConfig.rotationSpeedX || 0.01;
                cube.current.rotation.y += styleConfig.rotationSpeedY || 0.01;
                cube.current.scale.set(1 + average / 100, 1 + average / 100, 1 + average / 100); // Scale with average frequency
                cube.current.position.y = Math.sin(Date.now() / 500) * (bass / 255); // Example: Vertical position reacts to bass
            }
            if (sphere.current) {
                sphere.current.rotation.x -= styleConfig.rotationSpeedX || 0.01;
                sphere.current.rotation.z += styleConfig.rotationSpeedY || 0.01;
                sphere.current.scale.set(1 + mid / 100, 1 + mid / 100, 1 + mid / 100); // Scale with mid frequency
                sphere.current.position.x = Math.cos(Date.now() / 500) * (mid / 255); // Example: Horizontal position reacts to mid
            }
            if (torus.current) {
                torus.current.rotation.y += styleConfig.rotationSpeedX || 0.01;
                torus.current.rotation.z -= styleConfig.rotationSpeedY || 0.01;
                torus.current.scale.set(1 + treble / 100, 1 + treble / 100, 1 + treble / 100); // Scale with treble frequency
                torus.current.position.z = Math.sin(Date.now() / 500) * (treble / 255); // Example: Depth position reacts to treble
            }
            if (cone.current) {
                cone.current.rotation.x += styleConfig.rotationSpeedX * (bass / 255) || 0.01; // Rotation speed influenced by bass
                cone.current.rotation.y -= styleConfig.rotationSpeedY * (mid / 255) || 0.01; // Rotation speed influenced by mid
            }
            if (cylinder.current) {
                cylinder.current.rotation.z += styleConfig.rotationSpeedX * (treble / 255) || 0.01; // Rotation speed influenced by treble
                cylinder.current.position.y = Math.cos(Date.now() / 500) * (average / 255); // Position influenced by average frequency
            }
            if (dodecahedron.current) {
                dodecahedron.current.rotation.x -= styleConfig.rotationSpeedX * (mid / 255) || 0.01; // Rotation influenced by mid
                dodecahedron.current.scale.set(1 + (bass + mid) / 200, 1 + (bass + mid) / 200, 1 + (bass + mid) / 200); // Scale influenced by bass and mid
            }
            if (icosahedron.current) {
                icosahedron.current.rotation.y += styleConfig.rotationSpeedY * (treble / 255) || 0.01; // Rotation influenced by treble
                icosahedron.current.position.x = Math.sin(Date.now() / 500) * (average / 255); // Position influenced by average
            }
            if (octahedron.current) {
                octahedron.current.rotation.z -= styleConfig.rotationSpeedX * (bass / 255) || 0.01; // Rotation influenced by bass
                octahedron.current.scale.set(1 + (mid + treble) / 200, 1 + (mid + treble) / 200, 1 + (mid + treble) / 200); // Scale influenced by mid and treble
            }
            if (tetrahedron.current) {
                tetrahedron.current.rotation.x += styleConfig.rotationSpeedX * (average / 255) || 0.01; // Rotation influenced by average
                tetrahedron.current.position.z = Math.cos(Date.now() / 500) * (bass / 255); // Position influenced by bass
            }


            renderer.current.render(scene.current, camera.current);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            camera.current.aspect = window.innerWidth / window.innerHeight;
            camera.current.updateProjectionMatrix();
            renderer.current.setSize(window.innerWidth, window.innerHeight);
            renderer.current.render(scene.current, camera.current); // Re-render after resize
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (audio.current) {
                audio.current.pause();
                audio.current = null;
            }
            if (gui.current) {
                gui.current.destroy();
                gui.current = null;
            }
            if (controls.current) {
                controls.current.dispose();
                controls.current = null;
            }
            scene.current.dispose();
            renderer.current.dispose();
        };
    }, [audioUrl, styleConfig, setStyleConfig]); // Effect dependencies


    return <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default VisualCanvas;
