import { useEffect, useRef } from "react";
import { useSpiderMan } from "@/context/SpiderManContext";

const SpiderWebBackground = () => {
    const { isSpiderman } = useSpiderMan();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!isSpiderman) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const draw = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const W = canvas.width;
            const H = canvas.height;

            const drawWeb = (
                ax: number, ay: number,
                spokeCount: number,
                ringCount: number,
                maxRadius: number,
                startAngle: number,
                spreadAngle: number,
                alpha: number
            ) => {
                const spokeAngles: number[] = [];
                for (let i = 0; i < spokeCount; i++) {
                    spokeAngles.push(startAngle + (i / (spokeCount - 1)) * spreadAngle);
                }

                // Spokes
                spokeAngles.forEach((angle) => {
                    const ex = ax + Math.cos(angle) * maxRadius;
                    const ey = ay + Math.sin(angle) * maxRadius;
                    const grad = ctx.createLinearGradient(ax, ay, ex, ey);
                    grad.addColorStop(0, `rgba(230, 30, 30, ${alpha})`);
                    grad.addColorStop(1, `rgba(180, 0, 0, 0)`);
                    ctx.beginPath();
                    ctx.moveTo(ax, ay);
                    ctx.lineTo(ex, ey);
                    ctx.strokeStyle = grad;
                    ctx.lineWidth = 1.5;
                    ctx.shadowColor = `rgba(255, 0, 0, 0.4)`;
                    ctx.shadowBlur = 3;
                    ctx.stroke();
                    ctx.shadowBlur = 0;
                });

                // Rings
                for (let r = 1; r <= ringCount; r++) {
                    const frac = r / ringCount;
                    const radius = maxRadius * (frac * frac * 0.35 + frac * 0.65);
                    const ringAlpha = alpha * (1 - frac * 0.6);

                    ctx.beginPath();
                    for (let i = 0; i < spokeAngles.length; i++) {
                        const angle = spokeAngles[i];
                        const px = ax + Math.cos(angle) * radius;
                        const py = ay + Math.sin(angle) * radius;
                        if (i === 0) {
                            ctx.moveTo(px, py);
                        } else {
                            const prevAngle = spokeAngles[i - 1];
                            const midAngle = (prevAngle + angle) / 2;
                            const cpx = ax + Math.cos(midAngle) * (radius * 0.96);
                            const cpy = ay + Math.sin(midAngle) * (radius * 0.96);
                            ctx.quadraticCurveTo(cpx, cpy, px, py);
                        }
                    }
                    ctx.strokeStyle = `rgba(210, 20, 20, ${ringAlpha})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            };

            // Top-left corner — large primary web
            drawWeb(0, 0, 10, 9, Math.min(W, H) * 0.62, 0, Math.PI / 2, 0.75);
            // Top-right corner
            drawWeb(W, 0, 10, 9, Math.min(W, H) * 0.62, Math.PI / 2, Math.PI / 2, 0.7);
            // Bottom-left smaller accent
            drawWeb(0, H, 7, 6, Math.min(W, H) * 0.35, -Math.PI / 2, Math.PI / 2, 0.45);
            // Bottom-right smaller accent
            drawWeb(W, H, 7, 6, Math.min(W, H) * 0.35, Math.PI, Math.PI / 2, 0.4);
            // Top-center drooping web
            drawWeb(W / 2, 0, 9, 5, H * 0.28, Math.PI / 6, (2 * Math.PI) / 3, 0.3);
        };

        draw();
        window.addEventListener("resize", draw);
        return () => window.removeEventListener("resize", draw);
    }, [isSpiderman]);

    if (!isSpiderman) return null;

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                zIndex: 9997,   // above page content, below click canvas
                opacity: 0.35,  // overlay — visible but not distracting
                mixBlendMode: "screen", // blends naturally with the dark bg
            }}
        />
    );
};

export default SpiderWebBackground;
