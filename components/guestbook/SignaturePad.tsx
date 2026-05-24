"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";

type SignaturePadHandle = {
  toDataURL: () => string;
  isEmpty: () => boolean;
};

const SignaturePad = forwardRef<SignaturePadHandle>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [empty, setEmpty] = useState(true);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  useImperativeHandle(ref, () => ({
    isEmpty: () => empty,
    toDataURL: () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;
      const { width, height } = canvas;

      const pixels = ctx.getImageData(0, 0, width, height);
      const data = pixels.data;

      let minX = width, minY = height, maxX = 0, maxY = 0;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const alpha = data[(y * width + x) * 4 + 3];
          if (alpha > 0) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }

      const padding = 12;
      minX = Math.max(0, minX - padding);
      minY = Math.max(0, minY - padding);
      maxX = Math.min(width, maxX + padding);
      maxY = Math.min(height, maxY + padding);

      const trimmedWidth = maxX - minX;
      const trimmedHeight = maxY - minY;

      const trimmed = document.createElement("canvas");
      trimmed.width = trimmedWidth;
      trimmed.height = trimmedHeight;
      const trimCtx = trimmed.getContext("2d")!;

      trimCtx.drawImage(
        canvas,
        minX, minY, trimmedWidth, trimmedHeight,
        0, 0, trimmedWidth, trimmedHeight
      );

      // Always recolor strokes to black before saving
      const imageData = trimCtx.getImageData(0, 0, trimmedWidth, trimmedHeight);
      const d = imageData.data;
      for (let i = 0; i < d.length; i += 4) {
        if (d[i + 3] > 0) {
          d[i] = 0;
          d[i + 1] = 0;
          d[i + 2] = 0;
        }
      }
      trimCtx.putImageData(imageData, 0, 0);

      return trimmed.toDataURL("image/png");
    },
  }));

  function getStrokeColor() {
    const isDark = document.documentElement.classList.contains("dark");
    return isDark ? "#ffffff" : "#000000";
  }

  function getLineWidth() {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const scale = canvas.width / rect.width;
    return 3 * scale;
  }

  function getPos(e: React.MouseEvent | React.TouchEvent) {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const src = "touches" in e ? e.touches[0] : e;
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (src.clientX - rect.left) * scaleX,
      y: (src.clientY - rect.top) * scaleY,
    };
  }

  function startDrawing(e: React.MouseEvent | React.TouchEvent) {
    const pos = getPos(e);
    lastPos.current = pos;
    const ctx = canvasRef.current!.getContext("2d")!;
    ctx.strokeStyle = getStrokeColor();
    ctx.lineWidth = getLineWidth();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    setDrawing(true);
  }

  function draw(e: React.MouseEvent | React.TouchEvent) {
    if (!drawing || !lastPos.current) return;
    e.preventDefault();
    const ctx = canvasRef.current!.getContext("2d")!;
    const pos = getPos(e);

    const midX = (lastPos.current.x + pos.x) / 2;
    const midY = (lastPos.current.y + pos.y) / 2;

    ctx.quadraticCurveTo(lastPos.current.x, lastPos.current.y, midX, midY);
    ctx.strokeStyle = getStrokeColor();
    ctx.lineWidth = getLineWidth();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();

    lastPos.current = pos;
    setEmpty(false);
  }

  function stopDrawing() {
    setDrawing(false);
    lastPos.current = null;
  }

  function clear() {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setEmpty(true);
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={200}
        className="w-full h-36 border border-[rgb(var(--border))] rounded-lg bg-[rgb(var(--muted))] cursor-crosshair touch-none"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />
      <div className="flex items-center justify-between mt-2">
        <button
          onClick={clear}
          className="text-xs text-[rgb(var(--muted-text))] hover:text-[rgb(var(--text))] transition-colors"
        >
          Clear
        </button>
        <span className="text-xs text-[rgb(var(--muted-text))]">
          {empty ? "Draw your signature above" : "✓ Signature captured"}
        </span>
      </div>
    </div>
  );
});

SignaturePad.displayName = "SignaturePad";

export default SignaturePad;