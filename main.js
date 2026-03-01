import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import { createIcons, Twitter, Instagram, Linkedin, Menu, ArrowRight, Code, Megaphone, Target, Fingerprint, TrendingUp } from 'lucide'

// Setup Lucide Icons
createIcons({
    icons: {
        Twitter,
        Instagram,
        Linkedin,
        Menu,
        ArrowRight,
        Code,
        Megaphone,
        Target,
        Fingerprint,
        TrendingUp
    }
});

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// DATA: SERVICES
// ==========================================
const servicesData = [
    {
        id: 'web',
        title: 'Website Design & Dev',
        desc: 'Immersive, high-performance digital platforms built for scale.',
        icon: 'code'
    },
    {
        id: 'seo',
        title: 'SEO & Growth Opt',
        desc: 'Data-driven strategies that dominate search engines and drive traffic.',
        icon: 'target'
    },
    {
        id: 'brand',
        title: 'Branding & Identity',
        desc: 'Distinctive visual identities that resonate and command authority.',
        icon: 'fingerprint'
    },
    {
        id: 'marketing',
        title: 'Performance Marketing',
        desc: 'Unyielding campaigns optimized for maximum ROI and retention.',
        icon: 'trending-up'
    }
];

// Populate Services
const servicesGrid = document.querySelector('.services-grid');
if (servicesGrid) {
    servicesData.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
      <div class="service-icon"><i data-lucide="${service.icon}"></i></div>
      <h3>${service.title}</h3>
      <p>${service.desc}</p>
      <a href="#contact" class="service-link magnetic">Learn More <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i></a>
    `;
        servicesGrid.appendChild(card);
    });

    // Re-init newly added icons
    createIcons({
        icons: { Code, Target, Fingerprint, TrendingUp, ArrowRight },
        nameAttr: 'data-lucide'
    });
}

// ==========================================
// SMOOTH SCROLL (LENIS)
// ==========================================
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Sync Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// ==========================================
// CUSTOM CURSOR & MAGNETIC EFFECT
// ==========================================
const cursor = document.querySelector('.custom-cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const adjustCursor = (e) => {
    if (!cursor || !cursorFollower) return;
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

    // Create a slight delay for the follower
    gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
    });
};

// Check if desktop to apply cursor effects
const isDesktop = window.innerWidth > 768;

if (isDesktop) {
    window.addEventListener('mousemove', adjustCursor);

    const magnetics = document.querySelectorAll('.magnetic');

    magnetics.forEach((el) => {
        el.addEventListener('mousemove', (e) => {
            const pos = el.getBoundingClientRect();
            const mx = e.clientX - pos.left - pos.width / 2;
            const my = e.clientY - pos.top - pos.height / 2;

            gsap.to(el, {
                x: mx * 0.3,
                y: my * 0.3,
                duration: 0.3,
                ease: "power2.out"
            });

            if (cursor) cursor.classList.add('hover');
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
            });
            if (cursor) cursor.classList.remove('hover');
        });
    });

    // Custom Cursor expansion for buttons/links
    // (Removed expensive 3D tilt interactions on cards in favor of lightweight CSS transitions)
    const interactiveElements = document.querySelectorAll('a, button, .service-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor && cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('hover'));
    });
}

// ==========================================
// THREE.JS BACKGROUND SCENE
// ==========================================
const canvas = document.querySelector('#bg-canvas');
if (canvas) {
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: false // Disable antialiasing for performance
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(1); // Force pixel ratio to 1 to prevent retina stuttering

    // Geometry: Abstract Icosahedron
    const geometry = new THREE.IcosahedronGeometry(2.5, 1);
    const edges = new THREE.EdgesGeometry(geometry);
    const material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.15
    });

    const mesh = new THREE.LineSegments(edges, material);
    scene.add(mesh);

    // Particles (Optimized count)
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200; // Reduced from 700 for performance
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        // Spread particles mostly around the edges
        posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0xffffff,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse interactivity
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    // Animation Loop
    const clock = new THREE.Clock();
    let isBgVisible = true; // Optimization flag

    const tick = () => {
        if (isBgVisible) {
            const elapsedTime = clock.getElapsedTime();

            // Rotate main object
            mesh.rotation.y = elapsedTime * 0.1;
            mesh.rotation.x = elapsedTime * 0.05;

            // Rotate particles slowly
            particlesMesh.rotation.y = -elapsedTime * 0.05;

            // Parallax effect on mouse move
            targetX = mouseX * 0.001;
            targetY = mouseY * 0.001;

            mesh.rotation.y += 0.05 * (targetX - mesh.rotation.y);
            mesh.rotation.x += 0.05 * (targetY - mesh.rotation.x);

            // Parallax on scroll
            camera.position.y = -window.scrollY * 0.001;

            renderer.render(scene, camera);
        }
        window.requestAnimationFrame(tick);
    };

    tick();

    // Resize handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(1);
    });
}

// ==========================================
// HERO 3D GLOBE / SPHERE
// ==========================================
const heroContainer = document.querySelector('#hero-3d-container');
if (heroContainer) {
    // Create an explicit canvas for the hero so we can position it safely in the layout
    const heroCanvas = document.createElement('canvas');
    heroCanvas.style.width = '100%';
    heroCanvas.style.height = '100%';
    heroContainer.appendChild(heroCanvas);

    const hScene = new THREE.Scene();

    const hCamera = new THREE.PerspectiveCamera(50, heroContainer.clientWidth / heroContainer.clientHeight, 0.1, 100);
    hCamera.position.z = 6;

    const hRenderer = new THREE.WebGLRenderer({
        canvas: heroCanvas,
        alpha: true,
        antialias: true
    });

    // High quality rendering optimizations
    hRenderer.setSize(heroContainer.clientWidth, heroContainer.clientHeight);
    hRenderer.setPixelRatio(1); // Force to 1 to stop Mac stuttering

    // The Geometric Polygon (Icosahedron)
    // We create two meshes: a solid dark inner core and a glowing wireframe outer shell
    const polyGroup = new THREE.Group();

    // 1. Solid Inner Core (Textured via Shader)
    // Reduced detail from 64 to 32 for massive performance gain in the shader
    const coreGeom = new THREE.IcosahedronGeometry(1.6, 32);

    // Custom Shader Material for a dark, morphing fluid/noise texture
    const coreMat = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uColor1: { value: new THREE.Color(0x0a0a0a) }, // Deepest black
            uColor2: { value: new THREE.Color(0x1a1a1a) }, // Dark grey
            uColor3: { value: new THREE.Color(0x2a2a2a) }  // Lighter grey highlight
        },
        vertexShader: `
            varying vec2 vUv;
            varying vec3 vPosition;
            void main() {
                vUv = uv;
                vPosition = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float uTime;
            uniform vec3 uColor1;
            uniform vec3 uColor2;
            uniform vec3 uColor3;

            varying vec2 vUv;
            varying vec3 vPosition;

            // Simple 3D Noise function
            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
            vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

            float snoise(vec3 v) { 
                const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
                const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

                vec3 i  = floor(v + dot(v, C.yyy) );
                vec3 x0 = v - i + dot(i, C.xxx) ;

                vec3 g = step(x0.yzx, x0.xyz);
                vec3 l = 1.0 - g;
                vec3 i1 = min( g.xyz, l.zxy );
                vec3 i2 = max( g.xyz, l.zxy );

                vec3 x1 = x0 - i1 + C.xxx;
                vec3 x2 = x0 - i2 + C.yyy;
                vec3 x3 = x0 - D.yyy;

                i = mod289(i); 
                vec4 p = permute( permute( permute( 
                            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                        + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                        + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

                float n_ = 0.142857142857;
                vec3  ns = n_ * D.wyz - D.xzx;

                vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

                vec4 x_ = floor(j * ns.z);
                vec4 y_ = floor(j - 7.0 * x_ );

                vec4 x = x_ *ns.x + ns.yyyy;
                vec4 y = y_ *ns.x + ns.yyyy;
                vec4 h = 1.0 - abs(x) - abs(y);

                vec4 b0 = vec4( x.xy, y.xy );
                vec4 b1 = vec4( x.zw, y.zw );

                vec4 s0 = floor(b0)*2.0 + 1.0;
                vec4 s1 = floor(b1)*2.0 + 1.0;
                vec4 sh = -step(h, vec4(0.0));

                vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
                vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

                vec3 p0 = vec3(a0.xy,h.x);
                vec3 p1 = vec3(a0.zw,h.y);
                vec3 p2 = vec3(a1.xy,h.z);
                vec3 p3 = vec3(a1.zw,h.w);

                vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
                p0 *= norm.x;
                p1 *= norm.y;
                p2 *= norm.z;
                p3 *= norm.w;

                vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                m = m * m;
                return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                            dot(p2,x2), dot(p3,x3) ) );
            }

            void main() {
                // Generate a noise value based on position and time
                float noiseVal = snoise(vPosition * 1.5 + uTime * 0.2);
                
                // Add a second layer of finer noise
                noiseVal += 0.5 * snoise(vPosition * 3.0 - uTime * 0.3);
                
                // Normalize noise
                noiseVal = noiseVal * 0.5 + 0.5;

                // Mix colors based on noise ranges
                vec3 finalColor = mix(uColor1, uColor2, smoothstep(0.0, 0.5, noiseVal));
                finalColor = mix(finalColor, uColor3, smoothstep(0.5, 1.0, noiseVal));

                gl_FragColor = vec4(finalColor, 1.0);
            }
        `
    });
    const corePoly = new THREE.Mesh(coreGeom, coreMat);
    polyGroup.add(corePoly);

    // 2. Wireframe Outer Shell
    const wireGeom = new THREE.IcosahedronGeometry(1.8, 1);

    // Store original vertices for morphing animation later
    const positionAttribute = wireGeom.attributes.position;
    const vertexData = [];
    for (let i = 0; i < positionAttribute.count; i++) {
        const vertex = new THREE.Vector3();
        vertex.fromBufferAttribute(positionAttribute, i);
        vertexData.push({
            x: vertex.x,
            y: vertex.y,
            z: vertex.z,
            // Randomize morph speed and amplitude per vertex
            speed: Math.random() * 0.05 + 0.02,
            amp: Math.random() * 0.3 + 0.1,
            angle: Math.random() * Math.PI * 2
        });
    }

    const wireMat = new THREE.MeshBasicMaterial({
        color: 0xff5500, // Brand Orange
        wireframe: true,
        transparent: true,
        opacity: 0.6
    });
    const wirePoly = new THREE.Mesh(wireGeom, wireMat);
    polyGroup.add(wirePoly);

    hScene.add(polyGroup);

    // Lighting setup for the metallic geometric shell
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    hScene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xff5500, 5); // Orange rim light
    dirLight1.position.set(5, 5, -5);
    hScene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 2); // Harsh white main light
    dirLight2.position.set(-5, 0, 5);
    hScene.add(dirLight2);

    // Point light for a subtle glow reflection on the sphere
    const pointLight = new THREE.PointLight(0xffffff, 5, 10);
    pointLight.position.set(2, 2, 2);
    hScene.add(pointLight);

    // Interactivity state
    let hTargetRotationX = 0;
    let hTargetRotationY = 0;
    let isHovering = false;
    let touchStartX = 0;
    let touchStartY = 0;

    // Desktop Mouse Interaction
    if (isDesktop) {
        heroContainer.addEventListener('mousemove', (e) => {
            const rect = heroContainer.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Map mouse position to rotation
            hTargetRotationY = (x / rect.width) * Math.PI * 0.5;
            hTargetRotationX = (y / rect.height) * Math.PI * 0.5;
        });

        heroContainer.addEventListener('mouseenter', () => {
            isHovering = true;
            gsap.to(polyGroup.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 0.5, ease: 'power2.out' });
            gsap.to(wireMat, { opacity: 1, duration: 0.5 });
            gsap.to(coreMat.uniforms.uColor1.value, { r: 0.1, g: 0.1, b: 0.1, duration: 0.5 }); // Brighten core
            gsap.to(coreMat.uniforms.uColor2.value, { r: 0.2, g: 0.2, b: 0.2, duration: 0.5 });
            gsap.to(coreMat.uniforms.uColor3.value, { r: 0.3, g: 0.3, b: 0.3, duration: 0.5 });
        });

        heroContainer.addEventListener('mouseleave', () => {
            isHovering = false;
            hTargetRotationX = 0;
            hTargetRotationY = 0;
            gsap.to(polyGroup.scale, { x: 1, y: 1, z: 1, duration: 1, ease: 'elastic.out(1, 0.5)' });
            gsap.to(wireMat, { opacity: 0.6, duration: 1 });
            gsap.to(coreMat.uniforms.uColor1.value, { r: 0.039, g: 0.039, b: 0.039, duration: 1 }); // 0x0a0a0a
            gsap.to(coreMat.uniforms.uColor2.value, { r: 0.101, g: 0.101, b: 0.101, duration: 1 }); // 0x1a1a1a
            gsap.to(coreMat.uniforms.uColor3.value, { r: 0.164, g: 0.164, b: 0.164, duration: 1 }); // 0x2a2a2a
        });
    } else {
        // Mobile Touch/Drag Fallback
        heroContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        heroContainer.addEventListener('touchmove', (e) => {
            const x = e.touches[0].clientX;
            const y = e.touches[0].clientY;
            const deltaX = x - touchStartX;
            const deltaY = y - touchStartY;

            hTargetRotationY += deltaX * 0.005;
            hTargetRotationX += deltaY * 0.005;

            touchStartX = x;
            touchStartY = y;
        }, { passive: true });
    }

    // Animation Loop for Hero 3D
    const hClock = new THREE.Clock();
    let isHeroVisible = true; // Optimization flag

    // Performance Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            isHeroVisible = entry.isIntersecting;
        });
    }, { threshold: 0.1 });
    observer.observe(document.querySelector('.hero-section'));

    const hTick = () => {
        if (isHeroVisible) {
            const elapsedTime = hClock.getElapsedTime();

            // Constant idle rotation
            polyGroup.rotation.y += 0.003;
            polyGroup.rotation.z += 0.001;

            // Smooth inertia for mouse/touch rotation
            polyGroup.rotation.x += (hTargetRotationX - polyGroup.rotation.x) * 0.05;
            polyGroup.rotation.y += (hTargetRotationY - polyGroup.rotation.y) * 0.05;

            // Morphing animation logic for the wireframe shell
            coreMat.uniforms.uTime.value = elapsedTime;

            if (isHovering) {
                const positions = wireGeom.attributes.position;
                const v = new THREE.Vector3();

                for (let i = 0; i < positions.count; i++) {
                    const data = vertexData[i];
                    // Increment angle to drive sine wave
                    data.angle += data.speed;

                    // Calculate distortion offset based on original normal vector
                    const offset = Math.sin(data.angle) * data.amp;

                    // We use the original vertex position as the "normal" since it's a sphere-like shape branching from 0,0,0
                    v.set(data.x, data.y, data.z).normalize();

                    // Apply new position: Original + (Normal * Offset)
                    positions.setXYZ(
                        i,
                        data.x + v.x * offset,
                        data.y + v.y * offset,
                        data.z + v.z * offset
                    );
                }
                positions.needsUpdate = true;
            } else {
                // Smoothly return vertices to original positions when not hovering
                const positions = wireGeom.attributes.position;
                let needsUpdate = false;

                for (let i = 0; i < positions.count; i++) {
                    const data = vertexData[i];
                    const currentX = positions.getX(i);
                    const currentY = positions.getY(i);
                    const currentZ = positions.getZ(i);

                    // Only interpolate if we haven't reached the original position yet
                    if (Math.abs(currentX - data.x) > 0.001 || Math.abs(currentY - data.y) > 0.001) {
                        needsUpdate = true;
                        positions.setXYZ(
                            i,
                            currentX + (data.x - currentX) * 0.1,
                            currentY + (data.y - currentY) * 0.1,
                            currentZ + (data.z - currentZ) * 0.1
                        );
                    }
                }
                if (needsUpdate) positions.needsUpdate = true;
            }

            hRenderer.render(hScene, hCamera);
        }
        window.requestAnimationFrame(hTick);
    };

    hTick();

    // Resize handler specific to Hero container (using ResizeObserver for responsive layouts)
    const heroResizeObserver = new ResizeObserver(() => {
        if (!heroContainer.clientWidth || !heroContainer.clientHeight) return;
        hCamera.aspect = heroContainer.clientWidth / heroContainer.clientHeight;
        hCamera.updateProjectionMatrix();
        hRenderer.setSize(heroContainer.clientWidth, heroContainer.clientHeight);
        hRenderer.setPixelRatio(1);
    });
    heroResizeObserver.observe(heroContainer);
}

// ==========================================
// GSAP ANIMATIONS
// ==========================================

// Initial Page Load Timeline
const introTl = gsap.timeline();

introTl.fromTo('.site-header',
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
)
    .fromTo('.hero-title',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.5'
    )
    .fromTo('.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.7'
    )
    .fromTo('.hero-cta .btn',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.2, ease: 'power2.out' },
        '-=0.5'
    )
    .fromTo('.scroll-indicator',
        { opacity: 0 },
        { opacity: 0.7, duration: 1, ease: 'power2.out' },
        '-=0.3'
    );

// ScrollTriggers for Sections
const sections = document.querySelectorAll('section:not(#hero)');

sections.forEach(section => {
    gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );
});

// Dynamic Theme Swapping
// We will change root variables based on section themes
const root = document.documentElement;
const themes = {
    dark: { bg: '#050505', text: '#fafafa', accent: '#ff5500' },
    light: { bg: '#ececec', text: '#050505', accent: '#ff5500' },
    orange: { bg: '#ff5500', text: '#050505', accent: '#fafafa' }
};

// Map sections to themes
const sectionThemes = [
    { selector: '#hero', theme: 'dark' },
    { selector: '#services', theme: 'light' },
    { selector: '#about', theme: 'dark' },
    { selector: '#contact', theme: 'light' }
];

sectionThemes.forEach(({ selector, theme }) => {
    const el = document.querySelector(selector);
    if (!el) return;

    ScrollTrigger.create({
        trigger: el,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => applyTheme(theme),
        onEnterBack: () => applyTheme(theme)
    });
});

function applyTheme(themeName) {
    const t = themes[themeName];
    if (!t) return;
    root.style.setProperty('--bg-color', t.bg);
    root.style.setProperty('--text-color', t.text);
    root.style.setProperty('--accent-color', t.accent);
}

// Parallax Background Text (Optimized)
const parallaxTexts = document.querySelectorAll('.parallax-bg-text');
parallaxTexts.forEach(text => {
    const speed = text.getAttribute('data-speed') || 0.5;
    gsap.to(text, {
        x: () => -window.innerWidth * speed,
        ease: 'none',
        scrollTrigger: {
            trigger: text.closest('section'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: true // Smoother interpolation
        }
    });
});

// Services Cards Stagger
gsap.fromTo('.service-card',
    { y: 50, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 85%'
        }
    }
);

// USP Section Stagger
gsap.fromTo('.usp-item',
    { x: 50, opacity: 0 },
    {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1, // Faster stagger for a checklist feel
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.usp-grid',
            start: 'top 85%'
        }
    }
);

// Number Counters (About Us)
const statsCards = document.querySelectorAll('.stat-number');

statsCards.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));

    ScrollTrigger.create({
        trigger: '.stats-grid',
        start: 'top 85%',
        onEnter: () => {
            gsap.to(stat, {
                innerHTML: target,
                duration: 2,
                snap: { innerHTML: 1 },
                ease: 'power2.out',
                onUpdate: function () {
                    stat.innerHTML = Math.round(stat.innerHTML);
                }
            });
        },
        once: true
    });
});

// Form focus interactions
const inputs = document.querySelectorAll('.input-group input, .input-group textarea, .input-group select');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
});

// Wrap submit action
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.submit-btn');
        const text = btn.querySelector('.btn-text');

        btn.style.pointerEvents = 'none';
        text.innerHTML = 'Sending...';

        // Simulate API Call
        setTimeout(() => {
            text.innerHTML = 'Message Sent';
            btn.style.backgroundColor = 'var(--c-white)';
            btn.style.color = 'var(--c-black)';
            form.reset();

            setTimeout(() => {
                text.innerHTML = 'Send Message';
                btn.style.backgroundColor = 'transparent';
                btn.style.color = 'var(--c-white)';
                btn.style.pointerEvents = 'auto';
            }, 3000);
        }, 1500);
    });
}
