"use client";

import React from "react";

export default function AreaChart({ seriesA, seriesB }: { seriesA: number[]; seriesB?: number[] }) {
  const width = 320;
  const height = 140;
  const max = Math.max(...seriesA, ...(seriesB ?? [0]));
  const step = width / (seriesA.length - 1);
  const toPath = (data: number[]) =>
    data
      .map((y, i) => `${i === 0 ? "M" : "L"} ${i * step} ${height - 20 - (y / max) * (height - 40)}`)
      .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-36">
      <defs>
        <linearGradient id="gradA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="gradB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path d={`${toPath(seriesA)} L ${width} ${height - 20} L 0 ${height - 20} Z`} fill="url(#gradA)" />
      {seriesB ? <path d={`${toPath(seriesB)} L ${width} ${height - 20} L 0 ${height - 20} Z`} fill="url(#gradB)" /> : null}
      <path d={toPath(seriesA)} stroke="#3b82f6" strokeWidth="2" fill="none" />
      {seriesB ? <path d={toPath(seriesB)} stroke="#f59e0b" strokeWidth="2" fill="none" /> : null}
    </svg>
  );
}

