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
}

// ==========================================
// 3D SERVICE CARDS TILT INTERACTION
// ==========================================
if (isDesktop) {
    const cards = document.querySelectorAll('.service-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.7,
                ease: "elastic.out(1, 0.5)"
            });
        });
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
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

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

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 700;
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

    const tick = () => {
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
        window.requestAnimationFrame(tick);
    };

    tick();

    // Resize handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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

    // High quality rendering
    hRenderer.setSize(heroContainer.clientWidth, heroContainer.clientHeight);
    hRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Load Earth Texture Maps
    const textureLoader = new THREE.TextureLoader();
    const earthMap = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');
    const earthSpec = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg');

    // The Core Sphere (Earth Textured)
    const sphereGeom = new THREE.SphereGeometry(1.5, 64, 64);
    const sphereMat = new THREE.MeshPhongMaterial({
        map: earthMap,
        specularMap: earthSpec,
        specular: new THREE.Color('grey'),
        shininess: 30
    });
    const coreSphere = new THREE.Mesh(sphereGeom, sphereMat);
    hScene.add(coreSphere);

    // Orbiting Rings
    const rings = new THREE.Group();

    const ringGeom1 = new THREE.TorusGeometry(2.0, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
    const ring1 = new THREE.Mesh(ringGeom1, ringMat1);
    ring1.rotation.x = Math.PI / 2;

    const ringGeom2 = new THREE.TorusGeometry(2.4, 0.008, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x888888, transparent: true, opacity: 0.3 });
    const ring2 = new THREE.Mesh(ringGeom2, ringMat2);
    ring2.rotation.y = Math.PI / 3;
    ring2.rotation.x = Math.PI / 4;

    rings.add(ring1);
    rings.add(ring2);
    hScene.add(rings);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    hScene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 3);
    dirLight1.position.set(5, 5, 5);
    hScene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xaaaaaa, 1);
    dirLight2.position.set(-5, -5, -5);
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
            gsap.to(coreSphere.scale, { x: 1.05, y: 1.05, z: 1.05, duration: 0.5, ease: 'power2.out' });
            gsap.to(rings.scale, { x: 1.05, y: 1.05, z: 1.05, duration: 0.5, ease: 'power2.out' });
            gsap.to(sphereMat.color, { r: 1.2, g: 1.2, b: 1.2, duration: 0.5 });
        });

        heroContainer.addEventListener('mouseleave', () => {
            isHovering = false;
            hTargetRotationX = 0;
            hTargetRotationY = 0;
            gsap.to(coreSphere.scale, { x: 1, y: 1, z: 1, duration: 1, ease: 'elastic.out(1, 0.5)' });
            gsap.to(rings.scale, { x: 1, y: 1, z: 1, duration: 1, ease: 'elastic.out(1, 0.5)' });
            gsap.to(sphereMat.color, { r: 1, g: 1, b: 1, duration: 1 });
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
    const hTick = () => {
        const elapsedTime = hClock.getElapsedTime();

        // Constant idle rotation
        coreSphere.rotation.y += 0.002;
        rings.rotation.y -= 0.001;
        rings.rotation.z += 0.001;

        // Smooth inertia for mouse/touch rotation
        coreSphere.rotation.x += (hTargetRotationX - coreSphere.rotation.x) * 0.05;
        coreSphere.rotation.y += (hTargetRotationY - coreSphere.rotation.y) * 0.05;

        rings.rotation.x += (hTargetRotationX - rings.rotation.x) * 0.02;
        rings.rotation.y += (hTargetRotationY - rings.rotation.y) * 0.02;

        hRenderer.render(hScene, hCamera);
        window.requestAnimationFrame(hTick);
    };

    hTick();

    // Resize handler specific to Hero container (using ResizeObserver for responsive layouts)
    const heroResizeObserver = new ResizeObserver(() => {
        if (!heroContainer.clientWidth || !heroContainer.clientHeight) return;
        hCamera.aspect = heroContainer.clientWidth / heroContainer.clientHeight;
        hCamera.updateProjectionMatrix();
        hRenderer.setSize(heroContainer.clientWidth, heroContainer.clientHeight);
        hRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
