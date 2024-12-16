"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ParticleContainer() {
	const containerRef = useRef<HTMLDivElement>(null);
	const mousePosition = useRef({ x: 0, y: 0 });

	useEffect(() => {
		if (!containerRef.current) return;

		// Scene setup
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({ alpha: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		containerRef.current.appendChild(renderer.domElement);

		// Particle system
		const particleCount = 1000;
		const particles = new THREE.BufferGeometry();
		const positions = new Float32Array(particleCount * 3);
		const velocities = new Float32Array(particleCount * 3);

		for (let i = 0; i < particleCount * 3; i += 3) {
			// Position
			positions[i] = (Math.random() - 0.5) * 10;
			positions[i + 1] = (Math.random() - 0.5) * 10;
			positions[i + 2] = (Math.random() - 0.5) * 10;

			// Velocity
			velocities[i] = (Math.random() - 0.5) * 0.02;
			velocities[i + 1] = (Math.random() - 0.5) * 0.02;
			velocities[i + 2] = (Math.random() - 0.5) * 0.02;
		}

		particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

		const material = new THREE.PointsMaterial({
			size: 0.05,
			color: 0x8b5cf6, // Purple color matching our theme
			transparent: true,
			opacity: 0.8,
			blending: THREE.AdditiveBlending
		});

		const particleSystem = new THREE.Points(particles, material);
		scene.add(particleSystem);

		camera.position.z = 5;

		// Mouse movement handler
		const handleMouseMove = (event: MouseEvent) => {
			mousePosition.current = {
				x: (event.clientX / window.innerWidth) * 2 - 1,
				y: -(event.clientY / window.innerHeight) * 2 + 1
			};
		};

		window.addEventListener("mousemove", handleMouseMove);

		// Animation
		const animate = () => {
			requestAnimationFrame(animate);

			const positions = particles.attributes.position.array as Float32Array;

			for (let i = 0; i < positions.length; i += 3) {
				// Update positions based on velocities
				positions[i] += velocities[i];
				positions[i + 1] += velocities[i + 1];
				positions[i + 2] += velocities[i + 2];

				// Wrap particles around when they go too far
				if (Math.abs(positions[i]) > 5) positions[i] *= -0.9;
				if (Math.abs(positions[i + 1]) > 5) positions[i + 1] *= -0.9;
				if (Math.abs(positions[i + 2]) > 5) positions[i + 2] *= -0.9;

				// Influence particles with mouse position
				const dx = mousePosition.current.x * 5 - positions[i];
				const dy = mousePosition.current.y * 5 - positions[i + 1];
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance < 2) {
					positions[i] += dx * 0.01;
					positions[i + 1] += dy * 0.01;
				}
			}

			particles.attributes.position.needsUpdate = true;

			// Rotate particle system slightly
			particleSystem.rotation.y += 0.001;

			renderer.render(scene, camera);
		};

		animate();

		// Handle window resize
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};

		window.addEventListener("resize", handleResize);

		// Cleanup
		return () => {
			if (containerRef.current) {
				containerRef.current.removeChild(renderer.domElement);
			}
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return <div ref={containerRef} className="absolute inset-0" />;
}
