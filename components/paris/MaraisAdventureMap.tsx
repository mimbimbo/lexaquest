type MaraisAdventureMapProps = {
  bakeryComplete: boolean;
  vosgesComplete: boolean;
  onOpenBakery: () => void;
  onOpenVosges: () => void;
};

export function MaraisAdventureMap({
  bakeryComplete,
  vosgesComplete,
  onOpenBakery,
  onOpenVosges,
}: MaraisAdventureMapProps) {
  return (
    <section className="mt-8 overflow-hidden rounded-[2rem] border border-amber-900/20 bg-amber-100 shadow-xl">
      <svg
        viewBox="0 0 900 560"
        className="h-auto w-full"
        role="img"
        aria-label="Adventure map of Le Marais"
      >
        <rect width="900" height="560" fill="#f4d99b" />

        <path
          d="M40 90 C180 30 300 110 430 70 C590 20 720 60 860 35"
          fill="none"
          stroke="#b7791f"
          strokeWidth="18"
          opacity="0.18"
        />
        <path
          d="M70 460 C210 390 340 500 480 440 C620 380 700 450 840 395"
          fill="none"
          stroke="#b7791f"
          strokeWidth="20"
          opacity="0.18"
        />

        <path
          d="M95 460 C190 360 245 315 340 270 C450 220 535 185 650 165"
          fill="none"
          stroke="#7c4a12"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="2 22"
          opacity="0.55"
        />

        <path
          d="M650 165 C690 210 700 280 660 335 C615 395 545 420 475 420"
          fill="none"
          stroke="#7c4a12"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="2 20"
          opacity="0.45"
        />

        <g opacity="0.42" stroke="#9a5b16" strokeWidth="5" fill="none">
          <path d="M110 120 L780 500" />
          <path d="M220 60 L820 400" />
          <path d="M80 300 L720 75" />
          <path d="M190 510 L820 150" />
          <path d="M360 40 L380 525" />
          <path d="M520 45 L500 515" />
        </g>

        <g>
          <rect x="590" y="105" width="170" height="120" rx="14" fill="#c76b3c" />
          <rect x="610" y="125" width="130" height="80" rx="10" fill="#f6ddb2" />
          <rect x="625" y="140" width="28" height="28" rx="4" fill="#9b4d2f" />
          <rect x="667" y="140" width="28" height="28" rx="4" fill="#9b4d2f" />
          <rect x="707" y="140" width="20" height="55" rx="4" fill="#7a3b27" />
          <text x="675" y="245" textAnchor="middle" fontSize="25" fill="#4a2d13" fontWeight="700">
            Place des Vosges
          </text>
        </g>

        <g>
          <rect x="250" y="290" width="150" height="95" rx="14" fill="#9f5b2a" />
          <path d="M250 305 L325 250 L400 305 Z" fill="#7c2d12" />
          <rect x="275" y="325" width="48" height="38" rx="6" fill="#f8e1b4" />
          <rect x="340" y="325" width="34" height="60" rx="6" fill="#5f3217" />
          <text x="325" y="415" textAnchor="middle" fontSize="24" fill="#4a2d13" fontWeight="700">
            Boulangerie
          </text>
        </g>

        <g opacity="0.7">
          <circle cx="155" cy="180" r="30" fill="#8fbc6b" />
          <circle cx="175" cy="165" r="24" fill="#7ca95a" />
          <rect x="160" y="185" width="12" height="38" rx="4" fill="#6b3f1d" />

          <circle cx="740" cy="350" r="35" fill="#8fbc6b" />
          <circle cx="765" cy="335" r="26" fill="#7ca95a" />
          <rect x="748" y="360" width="12" height="42" rx="4" fill="#6b3f1d" />

          <circle cx="445" cy="145" r="28" fill="#8fbc6b" />
          <rect x="438" y="165" width="12" height="35" rx="4" fill="#6b3f1d" />
        </g>

        <button onClick={onOpenBakery}>
          <g className="cursor-pointer transition hover:opacity-80">
            <circle
              cx="325"
              cy="270"
              r="32"
              fill={bakeryComplete ? "#bbf7d0" : "#fff7ed"}
              stroke={bakeryComplete ? "#15803d" : "#92400e"}
              strokeWidth="5"
            />
            <text x="325" y="280" textAnchor="middle" fontSize="30">
              {bakeryComplete ? "✅" : "🥖"}
            </text>
          </g>
        </button>

        <button onClick={onOpenVosges}>
          <g className="cursor-pointer transition hover:opacity-80">
            <circle
              cx="675"
              cy="95"
              r="32"
              fill={vosgesComplete ? "#bbf7d0" : "#fff7ed"}
              stroke={vosgesComplete ? "#15803d" : "#92400e"}
              strokeWidth="5"
            />
            <text x="675" y="105" textAnchor="middle" fontSize="30">
              {vosgesComplete ? "✅" : "🏛️"}
            </text>
          </g>
        </button>

        <g opacity="0.55">
          <circle cx="475" cy="420" r="28" fill="#e5e7eb" stroke="#78716c" strokeWidth="4" />
          <text x="475" y="430" textAnchor="middle" fontSize="27">
            🎨
          </text>
          <text x="475" y="468" textAnchor="middle" fontSize="21" fill="#57534e" fontWeight="700">
            Musée
          </text>

          <circle cx="120" cy="455" r="28" fill="#e5e7eb" stroke="#78716c" strokeWidth="4" />
          <text x="120" y="465" textAnchor="middle" fontSize="27">
            ☕
          </text>
          <text x="120" y="503" textAnchor="middle" fontSize="21" fill="#57534e" fontWeight="700">
            Café
          </text>
        </g>

        <g>
          <rect x="30" y="25" width="235" height="56" rx="18" fill="#fff7ed" opacity="0.9" />
          <text x="55" y="62" fontSize="28" fill="#4a2d13" fontWeight="800">
            Le Marais
          </text>
        </g>
      </svg>
    </section>
  );
}