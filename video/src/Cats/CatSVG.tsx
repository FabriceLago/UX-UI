import React from "react";

export const CatSVG: React.FC<{ color?: string; size?: number }> = ({
  color = "#ff8a5b",
  size = 300,
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <polygon points="40,70 60,10 90,70" fill={color} />
      <polygon points="160,70 140,10 110,70" fill={color} />
      <polygon points="48,64 60,28 76,64" fill="#ffd6c2" />
      <polygon points="152,64 140,28 124,64" fill="#ffd6c2" />
      <circle cx="100" cy="112" r="70" fill={color} />
      <ellipse cx="74" cy="106" rx="8" ry="12" fill="#222" />
      <ellipse cx="126" cy="106" rx="8" ry="12" fill="#222" />
      <ellipse cx="76" cy="102" rx="2.5" ry="3.5" fill="#fff" />
      <ellipse cx="128" cy="102" rx="2.5" ry="3.5" fill="#fff" />
      <polygon points="94,126 106,126 100,134" fill="#c0392b" />
      <path
        d="M100 134 Q90 146 78 139"
        stroke="#222"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M100 134 Q110 146 122 139"
        stroke="#222"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <line x1="28" y1="116" x2="70" y2="113" stroke="#fff" strokeWidth="3" />
      <line x1="28" y1="129" x2="70" y2="129" stroke="#fff" strokeWidth="3" />
      <line x1="172" y1="116" x2="130" y2="113" stroke="#fff" strokeWidth="3" />
      <line x1="172" y1="129" x2="130" y2="129" stroke="#fff" strokeWidth="3" />
    </svg>
  );
};
