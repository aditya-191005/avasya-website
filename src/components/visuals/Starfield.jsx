'use client';
import React, { useEffect, useRef } from 'react';

const Starfield = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let stars = [];
        let shootingStars = [];

        // Increased star count significantly
        const numStars = 1200;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        class Star {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = (Math.random() - 0.5) * width * 2;
                this.y = (Math.random() - 0.5) * height * 2;
                this.z = Math.random() * width;
                this.pz = this.z;
                this.size = Math.random() * 1.5;
                this.opacity = Math.random();
            }
            update(speed) {
                this.z -= speed;
                if (this.z < 1) {
                    this.reset();
                    this.z = width;
                    this.pz = this.z;
                }
            }
            draw() {
                const x = (this.x / this.z) * width + width / 2;
                const y = (this.y / this.z) * height + height / 2;

                const rawRadius = (1 - this.z / width) * this.size * 2;
                const radius = Math.max(0, rawRadius);

                const px = (this.x / this.pz) * width + width / 2;
                const py = (this.y / this.pz) * height + height / 2;
                this.pz = this.z;

                if (x >= 0 && x <= width && y >= 0 && y <= height) {
                    const opacity = Math.max(0, Math.min(1, 1 - this.z / width));
                    ctx.beginPath();
                    ctx.moveTo(px, py);
                    ctx.lineTo(x, y);
                    ctx.strokeStyle = `rgba(200, 220, 255, ${opacity * 0.5})`;
                    ctx.lineWidth = radius;
                    ctx.stroke();

                    if (radius > 0) {
                        ctx.beginPath();
                        ctx.arc(x, y, radius, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx.fill();
                    }
                }
            }
        }

        class ShootingStar {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * width;
                this.y = 0;
                this.len = Math.random() * 80 + 10;
                this.speed = Math.random() * 10 + 6;
                this.size = Math.random() * 1 + 0.1;
                // Randomized wait time to prevent them all spawning at once
                this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
                this.active = false;
            }
            update() {
                if (this.active) {
                    this.x -= this.speed;
                    this.y += this.speed;
                    if (this.x < 0 || this.y >= height) {
                        this.active = false;
                        this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
                    }
                } else {
                    if (new Date().getTime() > this.waitTime) {
                        this.reset();
                        this.active = true;
                    }
                }
            }
            draw() {
                if (this.active) {
                    ctx.strokeStyle = "rgba(255, 255, 255, " + Math.random() + ")";
                    ctx.lineWidth = this.size;
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.x + this.len, this.y - this.len);
                    ctx.stroke();
                }
            }
        }

        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        // Increased shooting stars count
        for (let i = 0; i < 8; i++) {
            shootingStars.push(new ShootingStar());
        }

        let animationFrameId;
        const render = () => {
            ctx.fillStyle = 'rgba(5, 5, 10, 0.3)';
            ctx.fillRect(0, 0, width, height);

            stars.forEach(star => {
                star.update(1.5);
                star.draw();
            });

            shootingStars.forEach(star => {
                star.update();
                star.draw();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-black"
        />
    );
};

export default Starfield;
