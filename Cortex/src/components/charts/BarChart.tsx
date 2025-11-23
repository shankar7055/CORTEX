"use client";

import React from "react";

export default function BarChart({ values, labels, colors = ["#3b82f6", "#f59e0b"] }: { values: number[][]; labels: string[]; colors?: string[] }) {
  const width = 320;
  const height = 140;
  const max = Math.max(...values.flat());
  const barW = Math.floor(width / (labels.length * values.length + labels.length));
  let x = 10;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-36 text-text-primary">
      <line x1="8" y1={height - 20} x2={width - 8} y2={height - 20} stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {labels.map((label, i) => {
        const group = values.map((v, gi) => {
          const h = Math.round(((v[i] || 0) / max) * (height - 40));
          const rect = (
            <rect key={`${i}-${gi}`} x={x} y={height - 20 - h} width={barW} height={h} fill={colors[gi % colors.length]} rx="2" />
          );
          x += barW + 2;
          return rect;
        });
        x += 6;
        return (
          <g key={`g-${i}`}>{group}</g>
        );
      })}
      {labels.map((label, i) => (
        <text key={`l-${i}`} x={10 + i * ((barW + 2) * values.length + 6)} y={height - 6} fontSize="10" fill="currentColor" opacity="0.7">
          {label}
        </text>
      ))}
    </svg>
  );
}

