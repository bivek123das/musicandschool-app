"use client";
import { cn } from "@/lib/utlis";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

interface WavyBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    colors?: string[];
    waveWidth?: number;
    backgroundFill?: string;
    blur?: number;
    speed?: "slow" | "fast";
    waveOpacity?: number;
  }

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: WavyBackgroundProps) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: CanvasRenderingContext2D | null,
    canvas: HTMLCanvasElement | null;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
const ntRef = useRef<number>(0);

const resizeCanvas = () => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctxRef.current = ctx;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.filter = `blur(${blur}px)`;
};

const init = () => {
  resizeCanvas();
  ntRef.current = 0;
  render();

  window.addEventListener("resize", resizeCanvas);
};


  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  const drawWave = (ctx: CanvasRenderingContext2D, waveCount: number, width: number, height: number) => {
    ntRef.current += getSpeed();
  
    for (let i = 0; i < waveCount; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
  
      for (let x = 0; x < width; x += 5) {
        const y = noise(x / 800, 0.3 * i, ntRef.current) * 100;
        ctx.lineTo(x, y + height * 0.5); 
      }
  
      ctx.stroke();
      ctx.closePath();
    }
  };
  

  const animationIdRef = useRef<number>(0);

  const render = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;
  
    const width = canvas.width;
    const height = canvas.height;
  
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity;
    ctx.fillRect(0, 0, width, height);
  
    drawWave(ctx, 5, width, height);
  
    animationIdRef.current = requestAnimationFrame(render);
  };
  
  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("resize", resizeCanvas); // if you're using it
    };
  }, []);
  

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
