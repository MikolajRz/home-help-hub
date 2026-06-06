"use client";

import { useState, useEffect } from "react";

// Flooring material types with coverage factors and waste percentages
const FLOORING_TYPES = {
  laminate: { name: "Laminate", waste: 10, pricePerSqm: 15 },
  hardwood: { name: "Hardwood", waste: 15, pricePerSqm: 45 },
  vinyl: { name: "Vinyl", waste: 8, pricePerSqm: 20 },
  tile: { name: "Ceramic Tile", waste: 12, pricePerSqm: 35 },
  carpet: { name: "Carpet", waste: 5, pricePerSqm: 25 },
  engineered: { name: "Engineered Wood", waste: 12, pricePerSqm: 40 },
};

// Room shapes
const ROOM_SHAPES = {
  rectangle: "Rectangle",
  square: "Square",
  lshape: "L-Shape",
};

// Unit systems
const UNITS = {
  metric: "Metric (m, m²)",
  imperial: "Imperial (ft, ft²)",
};

export default function FlooringCalculator() {
  // Room dimensions
  const [roomShape, setRoomShape] = useState<keyof typeof ROOM_SHAPES>("rectangle");
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [length2, setLength2] = useState<number>(0); // for L-shape second part
  const [width2, setWidth2] = useState<number>(0); // for L-shape second part
  
  // Flooring type
  const [flooringType, setFlooringType] = useState<keyof typeof FLOORING_TYPES>("laminate");
  
  // Options
  const [unitSystem, setUnitSystem] = useState<keyof typeof UNITS>("metric");
  const [includeUnderlayment, setIncludeUnderlayment] = useState<boolean>(true);
  
  // Results
  const [floorArea, setFloorArea] = useState<number>(0);
  const [totalMaterial, setTotalMaterial] = useState<number>(0);
  const [wasteAmount, setWasteAmount] = useState<number>(0);
  const [estimatedCost, setEstimatedCost] = useState<number>(0);
  const [underlaymentCost, setUnderlaymentCost] = useState<number>(0);
  
  // Calculate area based on room shape
  useEffect(() => {
    let area = 0;
    
    if (roomShape === "rectangle" || roomShape === "square") {
      area = length * width;
    } else if (roomShape === "lshape") {
      // L-shape: area of first rectangle + area of second rectangle
      area = (length * width) + (length2 * width2);
    }
    
    // Convert imperial to metric for calculation (1 ft² = 0.0929 m²)
    if (unitSystem === "imperial") {
      area = area * 0.092903;
    }
    
    area = Math.max(0, area);
    setFloorArea(area);
    
    // Calculate waste
    const wastePercent = FLOORING_TYPES[flooringType].waste / 100;
    const waste = area * wastePercent;
    setWasteAmount(waste);
    
    // Total material needed (area + waste)
    const total = area + waste;
    setTotalMaterial(total);
    
    // Calculate costs
    const pricePerSqm = FLOORING_TYPES[flooringType].pricePerSqm;
    const materialCost = total * pricePerSqm;
    
    // Underlayment cost (approx. $3 per m²)
    const underlayment = includeUnderlayment ? area * 3 : 0;
    setUnderlaymentCost(underlayment);
    
    setEstimatedCost(materialCost + underlayment);
  }, [length, width, length2, width2, roomShape, flooringType, includeUnderlayment, unitSystem]);
  
  // Format number
  const formatNumber = (num: number): string => {
    return num.toFixed(2);
  };
  
  // Get unit display
  const getUnitDisplay = (): string => {
    return unitSystem === "metric" ? "m" : "ft";
  };
  
  const getAreaUnitDisplay = (): string => {
    return unitSystem === "metric" ? "m²" : "ft²";
  };
  
  // Purchase recommendation
  const getPackRecommendation = (area: number): string => {
    if (area === 0) return "Enter dimensions to get a recommendation";
    if (area < 10) return "1-2 boxes/packs";
    if (area < 25) return "3-5 boxes/packs";
    if (area < 50) return "6-10 boxes/packs";
    return "10+ boxes/packs - consider bulk order";
  };
  
  return (
    <main className="min-h-screen bg-[#f8f6f0] py-12">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-block bg-[#2d5a2c]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-[#2d5a2c]">🪵 Professional Tool</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c4a2e] mb-4">
            Flooring Calculator
          </h1>
          <p className="text-lg text-[#4a5b4a] max-w-2xl mx-auto">
            Accurately calculate how much flooring material you need for your room.
            Account for waste, choose your flooring type, and get cost estimates.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN - FORM */}
          <div className="space-y-6">
            
            {/* ROOM SHAPE & DIMENSIONS */}
            <div className="bg-white rounded-2xl border border-[#dce4d8] p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#2c4a2e] mb-4 flex items-center gap-2">
                <span>📐</span> Room Shape & Dimensions
              </h2>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-[#4a5b4a] mb-1">
                    Room shape
                  </label>
                  <select
                    value={roomShape}
                    onChange={(e) => setRoomShape(e.target.value as keyof typeof ROOM_SHAPES)}
                    className="w-full px-4 py-2 border border-[#dce4d8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a2c] bg-white text-[#2c4a2e]"
                  >
                    {Object.entries(ROOM_SHAPES).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#4a5b4a] mb-1">
                    Length ({getUnitDisplay()})
                  </label>
                  <input
                    type="number"
                    value={length || ""}
                    onChange={(e) => setLength(Number(e.target.value))}
                    placeholder={`e.g., ${unitSystem === "metric" ? "5.5" : "18"}`}
                    className="w-full px-4 py-2 border border-[#dce4d8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a2c] bg-white text-[#2c4a2e]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#4a5b4a] mb-1">
                    Width ({getUnitDisplay()})
                  </label>
                  <input
                    type="number"
                    value={width || ""}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    placeholder={`e.g., ${unitSystem === "metric" ? "4.2" : "14"}`}
                    className="w-full px-4 py-2 border border-[#dce4d8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a2c] bg-white text-[#2c4a2e]"
                  />
                </div>
                
                {roomShape === "lshape" && (
                  <div className="pt-2 border-t border-[#dce4d8] mt-2">
                    <p className="text-sm text-[#2d5a2c] mb-2 font-medium">Second part of L-shape:</p>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-[#4a5b4a] mb-1">
                          Length 2 ({getUnitDisplay()})
                        </label>
                        <input
                          type="number"
                          value={length2 || ""}
                          onChange={(e) => setLength2(Number(e.target.value))}
                          placeholder={`e.g., ${unitSystem === "metric" ? "3" : "10"}`}
                          className="w-full px-4 py-2 border border-[#dce4d8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a2c] bg-white text-[#2c4a2e]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#4a5b4a] mb-1">
                          Width 2 ({getUnitDisplay()})
                        </label>
                        <input
                          type="number"
                          value={width2 || ""}
                          onChange={(e) => setWidth2(Number(e.target.value))}
                          placeholder={`e.g., ${unitSystem === "metric" ? "2.5" : "8"}`}
                          className="w-full px-4 py-2 border border-[#dce4d8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a2c] bg-white text-[#2c4a2e]"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* OPTIONS */}
            <div className="bg-white rounded-2xl border border-[#dce4d8] p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#2c4a2e] mb-4 flex items-center gap-2">
                <span>⚙️</span> Options
              </h2>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-[#4a5b4a] mb-1">
                    Unit system
                  </label>
                  <select
                    value={unitSystem}
                    onChange={(e) => setUnitSystem(e.target.value as keyof typeof UNITS)}
                    className="w-full px-4 py-2 border border-[#dce4d8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a2c] bg-white text-[#2c4a2e]"
                  >
                    {Object.entries(UNITS).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>
                
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-[#4a5b4a]">Include underlayment</span>
                  <input
                    type="checkbox"
                    checked={includeUnderlayment}
                    onChange={(e) => setIncludeUnderlayment(e.target.checked)}
                    className="w-5 h-5 rounded border-[#dce4d8] text-[#2d5a2c] focus:ring-[#2d5a2c]"
                  />
                </label>
              </div>
            </div>
          </div>
          
          {/* RIGHT COLUMN - RESULTS & SETTINGS */}
          <div className="space-y-6">
            
            {/* FLOORING TYPE */}
            <div className="bg-white rounded-2xl border border-[#dce4d8] p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#2c4a2e] mb-4 flex items-center gap-2">
                <span>🪵</span> Flooring Type
              </h2>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-[#4a5b4a] mb-1">
                    Select material
                  </label>
                  <select
                    value={flooringType}
                    onChange={(e) => setFlooringType(e.target.value as keyof typeof FLOORING_TYPES)}
                    className="w-full px-4 py-2 border border-[#dce4d8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a2c] bg-white text-[#2c4a2e]"
                  >
                    {Object.entries(FLOORING_TYPES).map(([key, data]) => (
                      <option key={key} value={key}>
                        {data.name} - {data.waste}% waste ~ ${data.pricePerSqm}/m²
                      </option>
                    ))}
                  </select>
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
                  <span>Room area:</span>
                  <span className="text-2xl font-bold">{formatNumber(floorArea)} {getAreaUnitDisplay()}</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Waste ({FLOORING_TYPES[flooringType].waste}%):</span>
                  <span className="font-semibold">{formatNumber(wasteAmount)} {getAreaUnitDisplay()}</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Total material needed:</span>
                  <span className="text-2xl font-bold">{formatNumber(totalMaterial)} {getAreaUnitDisplay()}</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Recommended packaging:</span>
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {getPackRecommendation(totalMaterial)}
                  </span>
                </div>
                
                {includeUnderlayment && (
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span>Underlayment cost:</span>
                    <span className="font-semibold">${formatNumber(underlaymentCost)}</span>
                  </div>
                )}
                
                <div className="flex justify-between items-center pt-2">
                  <span>Estimated total cost:</span>
                  <span className="text-2xl font-bold">${formatNumber(estimatedCost)}</span>
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
                  <span>Always add 5-15% waste (already included per material type)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2d5a2c]">✓</span>
                  <span>Buy all flooring from the same batch for color consistency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2d5a2c]">✓</span>
                  <span>Acclimate flooring to room temperature for 48-72 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2d5a2c]">✓</span>
                  <span>Keep extra planks/tiles for future repairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2d5a2c]">✓</span>
                  <span>Measure twice, order once - double check all dimensions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* DISCLAIMER */}
        <div className="mt-8 text-center text-sm text-[#6b7c6b] border-t border-[#dce4d8] pt-6">
          <p>
            Results are estimates. Actual material needs may vary based on room irregularities,
            installation pattern, and cutting waste. Always consult with a professional installer.
          </p>
        </div>
      </div>
    </main>
  );
}