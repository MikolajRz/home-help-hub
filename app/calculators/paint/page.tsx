"use client";

import { useState, useEffect } from "react";

// Paint coverage constants (m² per liter)
const PAINT_COVERAGE = {
  standard: 10,
  premium: 12,
  economical: 8,
  exterior: 9,
  ceiling: 11,
};

const PAINT_TYPES = {
  standard: "Standard (10 m²/L)",
  premium: "Premium (12 m²/L)",
  economical: "Economical (8 m²/L)",
  exterior: "Exterior (9 m²/L)",
  ceiling: "Ceiling (11 m²/L)",
};

// Number of coats
const COATS = [1, 2, 3, 4];

export default function PaintCalculator() {
  // Basic dimensions
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  
  // Advanced options
  const [windows, setWindows] = useState<number>(0);
  const [doors, setDoors] = useState<number>(0);
  const [paintType, setPaintType] = useState<keyof typeof PAINT_COVERAGE>("standard");
  const [coats, setCoats] = useState<number>(2);
  const [includeCeiling, setIncludeCeiling] = useState<boolean>(false);
  const [includeFloor, setIncludeFloor] = useState<boolean>(false);
  
  // Results
  const [totalArea, setTotalArea] = useState<number>(0);
  const [paintNeeded, setPaintNeeded] = useState<number>(0);
  const [wasteBuffer, setWasteBuffer] = useState<number>(10);
  
  // Calculations
  useEffect(() => {
    // Wall area
    let area = 2 * (length + width) * height;
    
    // Ceiling
    if (includeCeiling) {
      area += length * width;
    }
    
    // Floor
    if (includeFloor) {
      area += length * width;
    }
    
    // Subtract windows (standard window ~1.5 m²)
    area -= windows * 1.5;
    
    // Subtract doors (standard door ~2 m²)
    area -= doors * 2;
    
    // Ensure area is not negative
    area = Math.max(0, area);
    
    setTotalArea(area);
    
    // Calculate paint needed with coats and waste buffer
    const coverage = PAINT_COVERAGE[paintType];
    let paint = (area * coats) / coverage;
    
    // Add waste buffer (default 10%)
    paint = paint * (1 + wasteBuffer / 100);
    
    setPaintNeeded(paint);
  }, [length, width, height, windows, doors, paintType, coats, includeCeiling, includeFloor, wasteBuffer]);
  
  // Format number
  const formatNumber = (num: number): string => {
    return num.toFixed(2);
  };
  
  // Purchase recommendation
  const getRecommendation = (litres: number): string => {
    if (litres === 0) return "Enter dimensions to get a recommendation";
    if (litres < 2.5) return "Small can (0.75L - 2.5L)";
    if (litres < 5) return "Medium can (2.5L - 5L)";
    if (litres < 10) return "Large can (5L - 10L)";
    return "Extra large can (10L+) – consider bulk purchase";
  };
  
  return (
    <main className="min-h-screen bg-[#f8f6f0] py-2">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-block bg-[#2d5a2c]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-[#2d5a2c]">🎨 Professional Tool</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c4a2e] mb-4">
            Paint Calculator
          </h1>
          <p className="text-lg text-[#4a5b4a] max-w-2xl mx-auto">
            Precisely calculate the amount of paint needed for your room.
            Account for windows, doors, and choose your paint type.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN - FORM */}
          <div className="space-y-6">
            
            {/* ROOM DIMENSIONS */}
            <div className="bg-white rounded-2xl border border-[#dce4d8] p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#2c4a2e] mb-4 flex items-center gap-2">
                <span>📏</span> Room Dimensions
              </h2>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-[#4a5b4a] mb-1">
                    Length (m)
                  </label>
                  <input
                    type="number"
                    value={length || ""}
                    onChange={(e) => setLength(Number(e.target.value))}
                    placeholder="e.g., 5.5"
                    className="w-full px-4 py-2 border border-[#dce4d8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a2c] bg-white text-[#2c4a2e]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#4a5b4a] mb-1">
                    Width (m)
                  </label>
                  <input
                    type="number"
                    value={width || ""}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    placeholder="e.g., 4.2"
                    className="w-full px-4 py-2 border border-[#dce4d8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a2c] bg-white text-[#2c4a2e]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#4a5b4a] mb-1">
                    Height (m)
                  </label>
                  <input
                    type="number"
                    value={height || ""}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    placeholder="e.g., 2.5"
                    className="w-full px-4 py-2 border border-[#dce4d8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a2c] bg-white text-[#2c4a2e]"
                  />
                </div>
              </div>
            </div>
            
            {/* SUBTRACT WINDOWS & DOORS */}
            <div className="bg-white rounded-2xl border border-[#dce4d8] p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#2c4a2e] mb-4 flex items-center gap-2">
                <span>🚪</span> Subtract Area
              </h2>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-[#4a5b4a] mb-1">
                    Number of windows
                  </label>
                  <input
                    type="number"
                    value={windows}
                    onChange={(e) => setWindows(Number(e.target.value))}
                    min="0"
                    className="w-full px-4 py-2 border border-[#dce4d8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a2c] bg-white text-[#2c4a2e]"
                  />
                  <p className="text-xs text-[#6b7c6b] mt-1">
                    Each window subtracts ~1.5 m²
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#4a5b4a] mb-1">
                    Number of doors
                  </label>
                  <input
                    type="number"
                    value={doors}
                    onChange={(e) => setDoors(Number(e.target.value))}
                    min="0"
                    className="w-full px-4 py-2 border border-[#dce4d8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a2c] bg-white text-[#2c4a2e]"
                  />
                  <p className="text-xs text-[#6b7c6b] mt-1">
                    Each door subtracts ~2 m²
                  </p>
                </div>
              </div>
            </div>
            
            {/* ADDITIONAL OPTIONS */}
            <div className="bg-white rounded-2xl border border-[#dce4d8] p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#2c4a2e] mb-4 flex items-center gap-2">
                <span>⚙️</span> Additional Options
              </h2>
              
              <div className="space-y-3">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-[#4a5b4a]">Paint ceiling</span>
                  <input
                    type="checkbox"
                    checked={includeCeiling}
                    onChange={(e) => setIncludeCeiling(e.target.checked)}
                    className="w-5 h-5 rounded border-[#dce4d8] text-[#2d5a2c] focus:ring-[#2d5a2c]"
                  />
                </label>
                
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-[#4a5b4a]">Paint floor</span>
                  <input
                    type="checkbox"
                    checked={includeFloor}
                    onChange={(e) => setIncludeFloor(e.target.checked)}
                    className="w-5 h-5 rounded border-[#dce4d8] text-[#2d5a2c] focus:ring-[#2d5a2c]"
                  />
                </label>
              </div>
            </div>
          </div>
          
          {/* RIGHT COLUMN - RESULTS & SETTINGS */}
          <div className="space-y-6">
            
            {/* PAINT TYPE & COATS */}
            <div className="bg-white rounded-2xl border border-[#dce4d8] p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#2c4a2e] mb-4 flex items-center gap-2">
                <span>🎨</span> Paint Parameters
              </h2>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-[#4a5b4a] mb-1">
                    Paint type
                  </label>
                  <select
                    value={paintType}
                    onChange={(e) => setPaintType(e.target.value as keyof typeof PAINT_COVERAGE)}
                    className="w-full px-4 py-2 border border-[#dce4d8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a2c] bg-white text-[#2c4a2e]"
                  >
                    {Object.entries(PAINT_TYPES).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#4a5b4a] mb-1">
                    Number of coats
                  </label>
                  <select
                    value={coats}
                    onChange={(e) => setCoats(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-[#dce4d8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a2c] bg-white text-[#2c4a2e]"
                  >
                    {COATS.map((coat) => (
                      <option key={coat} value={coat}>{coat} {coat === 1 ? "coat" : "coats"}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#4a5b4a] mb-1">
                    Waste buffer (%)
                  </label>
                  <input
                    type="range"
                    value={wasteBuffer}
                    onChange={(e) => setWasteBuffer(Number(e.target.value))}
                    min="0"
                    max="20"
                    step="5"
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-[#6b7c6b] mt-1">
                    <span>0%</span>
                    <span>5%</span>
                    <span>10%</span>
                    <span>15%</span>
                    <span>20%</span>
                  </div>
                  <p className="text-sm text-[#2d5a2c] mt-1">Selected buffer: {wasteBuffer}%</p>
                </div>
              </div>
            </div>
            
            {/* RESULTS */}
            <div className="bg-gradient-to-br from-[#2c4a2e] to-[#1f3d1e] rounded-2xl p-6 shadow-lg text-white">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📊</span> Results
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Total area:</span>
                  <span className="text-2xl font-bold">{formatNumber(totalArea)} m²</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Paint needed:</span>
                  <span className="text-2xl font-bold">{formatNumber(paintNeeded)} L</span>
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <span>Recommended packaging:</span>
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {getRecommendation(paintNeeded)}
                  </span>
                </div>
              </div>
            </div>
            
            {/* TIPS */}
            <div className="bg-[#f0ede5] rounded-2xl p-6 border border-[#dce4d8]">
              <h3 className="font-semibold text-[#2c4a2e] mb-2 flex items-center gap-2">
                <span>💡</span> Professional Tips
              </h3>
              <ul className="space-y-2 text-sm text-[#4a5b4a]">
                <li className="flex items-start gap-2">
                  <span className="text-[#2d5a2c]">✓</span>
                  <span>Always buy 10-15% more paint than calculated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2d5a2c]">✓</span>
                  <span>Mix paint from the same batch before applying</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2d5a2c]">✓</span>
                  <span>Dark colors may require an additional coat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2d5a2c]">✓</span>
                  <span>Priming walls reduces absorption and saves paint</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* DISCLAIMER */}
        <div className="mt-8 text-center text-sm text-[#6b7c6b] border-t border-[#dce4d8] pt-6">
          <p>
            Results are estimates. Actual paint usage may vary depending on surface porosity,
            application technique, and paint quality.
          </p>
        </div>
      </div>
    </main>
  );
}