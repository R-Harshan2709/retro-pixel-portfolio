import { useEffect, useRef } from "react";
import { useSpiderMan } from "@/context/SpiderManContext";

interface ClickWeb {
    x: number;
    y: number;
    age: number;
    maxAge: number;
}

const SpiderWebCanvas = () => {
    const { isSpiderman } = useSpiderMan();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const clicksRef = useRef<ClickWeb[]>([]);
    const animRef = useRef<number>(0);

    useEffect(() => {
        if (!isSpiderman) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const onClick = (e: MouseEvent) => {
            clicksRef.current.push({ x: e.clientX, y: e.clientY, age: 0, maxAge: 70 });
        };
        window.addEventListener("click", onClick);

        const drawWebAt = (
            ctx: CanvasRenderingContext2D,
            cx: number,
            cy: number,
            progress: number // 0 → 1
        ) => {
            const maxR = 160;
            const r = progress * maxR;
            const alpha = (1 - progress) * 0.75;
            const spokes = 12;
            const rings = 5;

            ctx.save();
            ctx.strokeStyle = `rgba(230, 30, 30, ${alpha})`;
            ctx.shadowColor = `rgba(255, 0, 0, ${alpha * 0.8})`;
            ctx.shadowBlur = 8;

            // Spokes
            ctx.lineWidth = 1.2;
            for (let i = 0; i < spokes; i++) {
                const angle = (i / spokes) * Math.PI * 2;
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
                ctx.stroke();
            }

            // Rings (only draw rings up to current radius)
            ctx.lineWidth = 0.9;
            for (let ri = 1; ri <= rings; ri++) {
                const ringR = (ri / rings) * r;
                ctx.beginPath();
                for (let i = 0; i <= spokes; i++) {
                    const angle = (i / spokes) * Math.PI * 2;
                    const px = cx + Math.cos(angle) * ringR;
                    const py = cy + Math.sin(angle) * ringR;
                    if (i === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                }
                ctx.closePath();
                ctx.stroke();
            }

            // Shockwave ring at outer edge
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = `rgba(255, 60, 60, ${alpha * 0.5})`;
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.stroke();

            // Glowing center burst
            const burstR = Math.max(0, 8 - progress * 12);
            if (burstR > 0) {
                ctx.beginPath();
                ctx.arc(cx, cy, burstR, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 80, 80, ${alpha})`;
                ctx.shadowBlur = 20;
                ctx.fill();
            }

            ctx.restore();
        };

        const animate = () => {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            clicksRef.current = clicksRef.current.filter((c) => c.age < c.maxAge);

            for (const click of clicksRef.current) {
                const progress = click.age / click.maxAge;
                // Ease-out: fast start, slow finish
                const eased = 1 - Math.pow(1 - progress, 2.5);
                drawWebAt(ctx, click.x, click.y, eased);
                click.age++;
            }

            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener("resize", resize);
            window.removeEventListener("click", onClick);
        };
    }, [isSpiderman]);

    if (!isSpiderman) return null;

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                pointerEvents: "none",
                zIndex: 9998,
            }}
        />
    );
};

export default SpiderWebCanvas;
