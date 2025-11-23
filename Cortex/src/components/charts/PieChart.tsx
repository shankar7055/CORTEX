"use client";

import React from "react";

export default function PieChart({ values, colors = ["#3b82f6", "#f59e0b", "#10b981"], centerText }: { values: number[]; colors?: string[]; centerText?: string }) {
  const total = values.reduce((a, b) => a + b, 0) || 1;
  let start = 0;
  const radius = 56;
  const cx = 64;
  const cy = 64;
  return (
    <svg viewBox="0 0 128 128" className="w-40 h-40">
      {values.map((v, i) => {
        const pct = v / total;
        const end = start + pct * 2 * Math.PI;
        const x1 = cx + radius * Math.cos(start);
        const y1 = cy + radius * Math.sin(start);
        const x2 = cx + radius * Math.cos(end);
        const y2 = cy + radius * Math.sin(end);
        const large = end - start > Math.PI ? 1 : 0;
        const d = `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2} Z`;
        start = end;
        return <path key={i} d={d} fill={colors[i % colors.length]} />;
      })}
      <circle cx={cx} cy={cy} r={32} fill="white" />
      {centerText ? (
        <text x={cx} y={cy + 4} textAnchor="middle" fill="black" fontSize="14" fontWeight="600">
          {centerText}
        </text>
      ) : null}
    </svg>
  );
}

