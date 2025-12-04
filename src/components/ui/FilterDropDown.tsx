// import React, { useState, useRef, useEffect } from "react";
// import { ChevronDown } from "lucide-react";

// interface Props {
//   label: string;
//   type: "single" | "multi" | "price";
//   options?: string[];
//   value?: any;
//   onChange: (value: any) => void;
// }

// const FilterDropdown: React.FC<Props> = ({
//   label,
//   type,
//   options = [],
//   value,
//   onChange,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const [selected, setSelected] = useState<any>(type === "multi" ? [] : label);

//   const [min, setMin] = useState(10);
//   const [max, setMax] = useState(80);

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (type === "multi") {
//       setSelected(value || []);
//     } else if (type === "single") {
//       setSelected(value || label);
//     } else if (type === "price" && value) {
//       setMin(value.min);
//       setMax(value.max);
//     }
//   }, [value, type, label]);

//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const toggleMulti = (opt: string) => {
//     let updated = [...selected];
//     if (updated.includes(opt)) updated = updated.filter((x) => x !== opt);
//     else updated.push(opt);

//     setSelected(updated);
//     onChange(updated);
//   };

//   const selectSingle = (opt: string) => {
//     setSelected(opt);
//     onChange(opt);
//     setIsOpen(false);
//   };

//   const applyPrice = () => {
//     onChange({ min, max });
//     setIsOpen(false);
//   };

//   return (
//     <div ref={dropdownRef} className="relative w-full">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="h-[40px] px-4 w-full rounded-xs cursor-pointer bg-white border border-[#EED291] flex items-center justify-between text-sm font-urbanist shadow-sm hover:shadow-md"
//       >
//         <span className="truncate">
//           {type === "multi"
//             ? Array.isArray(selected) && selected.length > 0
//               ? selected.join(", ")
//               : label
//             : selected}
//         </span>
//         <ChevronDown
//           size={18}
//           className={`${isOpen ? "rotate-180" : ""} transition`}
//         />
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-white border border-[#EED291] shadow-xl rounded-xl p-4 z-50">
//           {type === "single" &&
//             options.map((opt) => (
//               <button
//                 key={opt}
//                 className={`block w-full text-left py-2 hover:bg-gray-100 cursor-pointer rounded-md
//                   ${
//                     selected === opt
//                       ? "font-semibold underline underline-offset-4 text-[#0B0B0B]"
//                       : ""
//                   }`}
//                 onClick={() => selectSingle(opt)}
//               >
//                 {opt}
//               </button>
//             ))}

//           {type === "multi" &&
//             options.map((opt) => (
//               <label
//                 key={opt}
//                 className="flex items-center gap-3 py-2 cursor-pointer"
//               >
//                 <input
//                   type="checkbox"
//                   checked={selected.includes(opt)}
//                   onChange={() => toggleMulti(opt)}
//                   className="w-4 h-4 accent-[#E5C97A]"
//                 />
//                 <span>{opt}</span>
//               </label>
//             ))}

//           {type === "price" && (
//             <div className="flex flex-col gap-4">
//               <div className="relative w-full h-2 bg-gray-200 rounded-full">
//                 <div
//                   className="absolute h-full bg-[#E5C97A] rounded-full"
//                   style={{
//                     left: `${min}%`,
//                     width: `${max - min}%`,
//                   }}
//                 />

//                 <input
//                   type="range"
//                   min={0}
//                   max={100}
//                   value={min}
//                   onChange={(e) => {
//                     const v = +e.target.value;
//                     if (v < max) setMin(v);
//                   }}
//                   className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
//                 />

//                 <input
//                   type="range"
//                   min={0}
//                   max={100}
//                   value={max}
//                   onChange={(e) => {
//                     const v = +e.target.value;
//                     if (v > min) setMax(v);
//                   }}
//                   className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
//                 />
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="border px-3 py-1 font-urbanist rounded">
//                   ${min}
//                 </div>
//                 <span>to</span>
//                 <div className="border px-3 py-1 font-urbanist rounded">
//                   ${max}
//                 </div>
//               </div>

//               <button
//                 onClick={applyPrice}
//                 className="py-2 bg-[#E5C97A] font-urbanist rounded-lg font-semibold"
//               >
//                 Apply
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilterDropdown;



// import React, { useState, useRef, useEffect } from "react";
// import { ChevronDown } from "lucide-react";

// interface Props {
//   label: string;
//   type: "single" | "multi" | "price";
//   options?: string[];
//   value?: any;
//   onChange: (value: any) => void;
// }

// const FilterDropdown: React.FC<Props> = ({
//   label,
//   type,
//   options = [],
//   value,
//   onChange,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState<any>(type === "multi" ? [] : label);

//   const [min, setMin] = useState(10);
//   const [max, setMax] = useState(80);

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (type === "multi") {
//       setSelected(value || []);
//     } else if (type === "single") {
//       setSelected(value || label);
//     } else if (type === "price" && value) {
//       setMin(value.min);
//       setMax(value.max);
//     }
//   }, [value, type, label]);

//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const toggleMulti = (opt: string) => {
//     let updated = [...selected];
//     if (updated.includes(opt)) updated = updated.filter((x) => x !== opt);
//     else updated.push(opt);

//     setSelected(updated);
//     onChange(updated);
//   };

//   const selectSingle = (opt: string) => {
//     setSelected(opt);
//     onChange(opt);
//     setIsOpen(false);
//   };

//   // 🔥 FIX: dual-handle logic  
//   const handleMinChange = (v: number) => {
//     if (v < max) setMin(v);
//   };

//   const handleMaxChange = (v: number) => {
//     if (v > min) setMax(v);
//   };

//   const applyPrice = () => {
//     onChange({ min, max });
//     setIsOpen(false);
//   };

//   return (
//     <div ref={dropdownRef} className="relative w-full">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="h-[40px] px-4 w-full rounded-xs cursor-pointer bg-white border border-[#EED291] flex items-center justify-between text-sm font-urbanist shadow-sm hover:shadow-md"
//       >
//         <span className="truncate">
//           {type === "multi"
//             ? Array.isArray(selected) && selected.length > 0
//               ? selected.join(", ")
//               : label
//             : selected}
//         </span>
//         <ChevronDown size={18} className={`${isOpen ? "rotate-180" : ""} transition`} />
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-white border border-[#EED291] shadow-xl rounded-xl p-4 z-50">
//           {/* ---------- SINGLE ---------- */}
//           {type === "single" &&
//             options.map((opt) => (
//               <button
//                 key={opt}
//                 className={`block w-full text-left py-2 hover:bg-gray-100 cursor-pointer rounded-md
//                   ${selected === opt ? "font-semibold underline underline-offset-4 text-[#0B0B0B]" : ""}`}
//                 onClick={() => selectSingle(opt)}
//               >
//                 {opt}
//               </button>
//             ))}

//           {/* ---------- MULTI ---------- */}
//           {type === "multi" &&
//             options.map((opt) => (
//               <label key={opt} className="flex items-center gap-3 py-2 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={selected.includes(opt)}
//                   onChange={() => toggleMulti(opt)}
//                   className="w-4 h-4 accent-[#E5C97A]"
//                 />
//                 <span>{opt}</span>
//               </label>
//             ))}

//           {/* ---------- PRICE ---------- */}
//           {type === "price" && (
//             <div className="flex flex-col gap-4">
//               <div className="relative w-full h-2 bg-gray-200 rounded-full">
//                 <div
//                   className="absolute h-full bg-[#E5C97A] rounded-full"
//                   style={{
//                     left: `${min}%`,
//                     width: `${max - min}%`,
//                   }}
//                 />

//                 {/* LEFT HANDLE */}
//                 <input
//                   type="range"
//                   min={0}
//                   max={100}
//                   value={min}
//                   onChange={(e) => handleMinChange(+e.target.value)}
//                   className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
//                   step={1}
//                 />

//                 {/* RIGHT HANDLE */}
//                 <input
//                   type="range"
//                   min={0}
//                   max={100}
//                   value={max}
//                   onChange={(e) => handleMaxChange(+e.target.value)}
//                   className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
//                   step={1}
//                 />
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="border px-3 py-1 font-urbanist rounded">${min}</div>
//                 <span>to</span>
//                 <div className="border px-3 py-1 font-urbanist rounded">${max}</div>
//               </div>

//               <button
//                 onClick={applyPrice}
//                 className="py-2 bg-[#E5C97A] font-urbanist rounded-lg font-semibold"
//               >
//                 Apply
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilterDropdown;




// import React, { useState, useRef, useEffect } from "react";
// import { ChevronDown } from "lucide-react";

// interface Props {
//   label: string;
//   type: "single" | "multi" | "price";
//   options?: string[];
//   value?: any;
//   onChange: (value: any) => void;
// }

// const FilterDropdown: React.FC<Props> = ({
//   label,
//   type,
//   options = [],
//   value,
//   onChange,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState<any>(type === "multi" ? [] : label);

//   const [min, setMin] = useState(10);
//   const [max, setMax] = useState(80);

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (type === "multi") {
//       setSelected(value || []);
//     } else if (type === "single") {
//       setSelected(value || label);
//     } else if (type === "price" && value) {
//       setMin(value.min);
//       setMax(value.max);
//     }
//   }, [value, type, label]);

//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const toggleMulti = (opt: string) => {
//     let updated = [...selected];
//     if (updated.includes(opt)) updated = updated.filter((x) => x !== opt);
//     else updated.push(opt);

//     setSelected(updated);
//     onChange(updated);
//   };

//   const selectSingle = (opt: string) => {
//     setSelected(opt);
//     onChange(opt);
//     setIsOpen(false);
//   };

//   const updateMin = (v: number) => {
//     if (v < max) setMin(v);
//   };

//   const updateMax = (v: number) => {
//     if (v > min) setMax(v);
//   };

//   const applyPrice = () => {
//     onChange({ min, max });
//     setIsOpen(false);
//   };

//   return (
//     <div ref={dropdownRef} className="relative w-full">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="h-[40px] px-4 w-full rounded-xs cursor-pointer bg-white border border-[#EED291] flex items-center justify-between text-sm font-urbanist shadow-sm hover:shadow-md"
//       >
//         <span className="truncate">
//           {type === "multi"
//             ? Array.isArray(selected) && selected.length > 0
//               ? selected.join(", ")
//               : label
//             : selected}
//         </span>
//         <ChevronDown
//           size={18}
//           className={`${isOpen ? "rotate-180" : ""} transition`}
//         />
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-white border border-[#EED291] shadow-xl rounded-xl p-4 z-50">
//           {/* SINGLE */}
//           {type === "single" &&
//             options.map((opt) => (
//               <button
//                 key={opt}
//                 className={`block w-full text-left py-2 hover:bg-gray-100 cursor-pointer rounded-md ${
//                   selected === opt
//                     ? "font-semibold underline underline-offset-4 text-[#0B0B0B]"
//                     : ""
//                 }`}
//                 onClick={() => selectSingle(opt)}
//               >
//                 {opt}
//               </button>
//             ))}

//           {/* MULTI */}
//           {type === "multi" &&
//             options.map((opt) => (
//               <label
//                 key={opt}
//                 className="flex items-center gap-3 py-2 cursor-pointer"
//               >
//                 <input
//                   type="checkbox"
//                   checked={selected.includes(opt)}
//                   onChange={() => toggleMulti(opt)}
//                   className="w-4 h-4 accent-[#E5C97A]"
//                 />
//                 <span>{opt}</span>
//               </label>
//             ))}

//           {/* PRICE – MODERN DUAL HANDLE */}
//           {type === "price" && (
//             <div className="flex flex-col gap-6">
//               <div className="relative w-full pt-6 pb-2">

//                 {/* VALUE BUBBLES */}
//                 <div
//                   className="absolute -top-3 text-xs font-semibold bg-white border border-[#EED291] px-2 py-1 rounded shadow"
//                   style={{ left: `${min}%`, transform: "translateX(-50%)" }}
//                 >
//                   ${min}
//                 </div>

//                 <div
//                   className="absolute -top-3 text-xs font-semibold bg-white border border-[#EED291] px-2 py-1 rounded shadow"
//                   style={{ left: `${max}%`, transform: "translateX(-50%)" }}
//                 >
//                   ${max}
//                 </div>

//                 {/* TRACK */}
//                 <div className="relative w-full h-2 bg-gray-300 rounded-full">
//                   <div
//                     className="absolute h-full bg-[#E5C97A] rounded-full"
//                     style={{
//                       left: `${min}%`,
//                       width: `${max - min}%`,
//                     }}
//                   ></div>

//                   {/* LEFT HANDLE */}
//                   <div
//                     className="absolute w-4 h-4 bg-white border border-[#EED291] rounded-full shadow cursor-pointer"
//                     style={{
//                       top: "-6px",
//                       left: `${min}%`,
//                       transform: "translateX(-50%)",
//                     }}
//                   ></div>

//                   {/* RIGHT HANDLE */}
//                   <div
//                     className="absolute w-4 h-4 bg-white border border-[#EED291] rounded-full shadow cursor-pointer"
//                     style={{
//                       top: "-6px",
//                       left: `${max}%`,
//                       transform: "translateX(-50%)",
//                     }}
//                   ></div>

//                   {/* HIDDEN RANGE INPUTS */}
//                   <input
//                     type="range"
//                     min={0}
//                     max={100}
//                     value={min}
//                     onChange={(e) => updateMin(Number(e.target.value))}
//                     className="absolute top-0 w-full h-2 opacity-0 cursor-pointer z-20"
//                   />

//                   <input
//                     type="range"
//                     min={0}
//                     max={100}
//                     value={max}
//                     onChange={(e) => updateMax(Number(e.target.value))}
//                     className="absolute top-0 w-full h-2 opacity-0 cursor-pointer z-20"
//                   />
//                 </div>
//               </div>

//               <button
//                 onClick={applyPrice}
//                 className="py-2 bg-[#E5C97A] font-urbanist rounded-lg font-semibold"
//               >
//                 Apply
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilterDropdown;


// import React, { useState, useRef, useEffect } from "react";
// import { ChevronDown } from "lucide-react";

// interface Props {
//   label: string;
//   type: "single" | "multi" | "price";
//   options?: string[];
//   value?: any;
//   onChange: (value: any) => void;
// }

// const FilterDropdown: React.FC<Props> = ({
//   label,
//   type,
//   options = [],
//   value,
//   onChange,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState<any>(type === "multi" ? [] : label);

//   // local slider values (0-100)
//   const [min, setMin] = useState<number>(10);
//   const [max, setMax] = useState<number>(80);

//   // which handle is active for z-index
//   const [activeHandle, setActiveHandle] = useState<"min" | "max" | null>(null);

//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (type === "multi") {
//       setSelected(value || []);
//     } else if (type === "single") {
//       setSelected(value || label);
//     } else if (type === "price" && value) {
//       // value expected like { min, max } numeric 0-100
//       setMin(typeof value.min === "number" ? value.min : 0);
//       setMax(typeof value.max === "number" ? value.max : 100);
//     }
//   }, [value, type, label]);

//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const toggleMulti = (opt: string) => {
//     let updated = [...selected];
//     if (updated.includes(opt)) updated = updated.filter((x) => x !== opt);
//     else updated.push(opt);

//     setSelected(updated);
//     onChange(updated);
//   };

//   const selectSingle = (opt: string) => {
//     setSelected(opt);
//     onChange(opt);
//     setIsOpen(false);
//   };

//   // dual-handle helpers
//   const handleMinChange = (v: number) => {
//     const newV = Math.min(v, max - 1); // keep min < max
//     setMin(newV);
//   };

//   const handleMaxChange = (v: number) => {
//     const newV = Math.max(v, min + 1); // keep max > min
//     setMax(newV);
//   };

//   const applyPrice = () => {
//     onChange({ min, max });
//     setIsOpen(false);
//   };

//   // percentages for UI positioning
//   const minPct = `${min}%`;
//   const maxPct = `${max}%`;
//   const activeTrackLeft = min;
//   const activeTrackWidth = max - min;

//   return (
//     <div ref={dropdownRef} className="relative w-full">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="h-[40px] px-4 w-full rounded-xs cursor-pointer bg-white border border-[#EED291] flex items-center justify-between text-sm font-urbanist shadow-sm hover:shadow-md"
//       >
//         <span className="truncate">
//           {type === "multi"
//             ? Array.isArray(selected) && selected.length > 0
//               ? selected.join(", ")
//               : label
//             : selected}
//         </span>
//         <ChevronDown size={18} className={`${isOpen ? "rotate-180" : ""} transition`} />
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-white border border-[#EED291] shadow-xl rounded-xl p-4 z-50">
//           {type === "single" &&
//             options.map((opt) => (
//               <button
//                 key={opt}
//                 className={`block w-full text-left py-2 hover:bg-gray-100 cursor-pointer rounded-md
//                   ${selected === opt ? "font-semibold underline underline-offset-4 text-[#0B0B0B]" : ""}`}
//                 onClick={() => selectSingle(opt)}
//               >
//                 {opt}
//               </button>
//             ))}

//           {type === "multi" &&
//             options.map((opt) => (
//               <label key={opt} className="flex items-center gap-3 py-2 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={selected.includes(opt)}
//                   onChange={() => toggleMulti(opt)}
//                   className="w-4 h-4 accent-[#E5C97A]"
//                 />
//                 <span>{opt}</span>
//               </label>
//             ))}

//           {type === "price" && (
//             <div className="flex flex-col gap-4">
//               {/* TRACK */}
//               <div className="relative w-full h-3">
//                 {/* inactive full track */}
//                 <div
//                   className="absolute inset-0 rounded-full"
//                   style={{ background: "#D4D4D4", height: 8 }}
//                 />

//                 {/* active (gold) segment */}
//                 <div
//                   className="absolute rounded-full"
//                   style={{
//                     left: `${activeTrackLeft}%`,
//                     width: `${activeTrackWidth}%`,
//                     background: "#E5C97A",
//                     height: 8,
//                   }}
//                 />

//                 {/* Invisible native range inputs (capture pointer) */}
//                 <input
//                   type="range"
//                   min={0}
//                   max={100}
//                   step={1}
//                   value={min}
//                   onChange={(e) => handleMinChange(Number(e.target.value))}
//                   onMouseDown={() => setActiveHandle("min")}
//                   onTouchStart={() => setActiveHandle("min")}
//                   onMouseUp={() => setActiveHandle(null)}
//                   onTouchEnd={() => setActiveHandle(null)}
//                   // make input cover track but hide native UI
//                   style={{
//                     position: "absolute",
//                     left: 0,
//                     top: 0,
//                     width: "100%",
//                     height: 24,
//                     background: "transparent",
//                     WebkitAppearance: "none",
//                     appearance: "none",
//                     opacity: 0,
//                     zIndex: activeHandle === "min" ? 3 : 2,
//                   }}
//                 />

//                 <input
//                   type="range"
//                   min={0}
//                   max={100}
//                   step={1}
//                   value={max}
//                   onChange={(e) => handleMaxChange(Number(e.target.value))}
//                   onMouseDown={() => setActiveHandle("max")}
//                   onTouchStart={() => setActiveHandle("max")}
//                   onMouseUp={() => setActiveHandle(null)}
//                   onTouchEnd={() => setActiveHandle(null)}
//                   style={{
//                     position: "absolute",
//                     left: 0,
//                     top: 0,
//                     width: "100%",
//                     height: 24,
//                     background: "transparent",
//                     WebkitAppearance: "none",
//                     appearance: "none",
//                     opacity: 0,
//                     zIndex: activeHandle === "max" ? 3 : 2,
//                   }}
//                 />

//                 {/* CUSTOM LEFT HANDLE + BUBBLE */}
//                 <div
//                   className="absolute -translate-x-1/2 flex flex-col items-center pointer-events-none"
//                   style={{ left: minPct, top: -26 }}
//                 >
//                   <div className="text-xs font-medium bg-white px-2 py-1 rounded-md shadow">
//                     ${min}
//                   </div>
//                 </div>

//                 <div
//                   className="absolute -translate-x-1/2 rounded-full bg-white border border-gray-200 shadow-md"
//                   style={{
//                     left: minPct,
//                     top: -8,
//                     width: 18,
//                     height: 18,
//                     pointerEvents: "none",
//                   }}
//                 />

//                 {/* CUSTOM RIGHT HANDLE + BUBBLE */}
//                 <div
//                   className="absolute -translate-x-1/2 flex flex-col items-center pointer-events-none"
//                   style={{ left: maxPct, top: -26 }}
//                 >
//                   <div className="text-xs font-medium bg-white px-2 py-1 rounded-md shadow">
//                     ${max}
//                   </div>
//                 </div>

//                 <div
//                   className="absolute -translate-x-1/2 rounded-full bg-white border border-gray-200 shadow-md"
//                   style={{
//                     left: maxPct,
//                     top: -8,
//                     width: 18,
//                     height: 18,
//                     pointerEvents: "none",
//                   }}
//                 />
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="text-sm text-gray-700">${min}</div>
//                 <span className="text-sm text-gray-500">to</span>
//                 <div className="text-sm text-gray-700">${max}</div>
//               </div>

//               <button
//                 onClick={applyPrice}
//                 className="py-2 bg-[#E5C97A] font-urbanist rounded-lg font-semibold"
//               >
//                 Apply
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilterDropdown;



    // import React, { useState, useRef, useEffect } from "react";
    // import { ChevronDown } from "lucide-react";

    // interface Props {
    //   label: string;
    //   type: "single" | "multi" | "price";
    //   options?: string[];
    //   value?: any;
    //   onChange: (value: any) => void;
    // }

    // const FilterDropdown: React.FC<Props> = ({
    //   label,
    //   type,
    //   options = [],
    //   value,
    //   onChange,
    // }) => {
    //   const [isOpen, setIsOpen] = useState(false);
    //   const [selected, setSelected] = useState<any>(type === "multi" ? [] : label);

    //   // slider values
    //   const [min, setMin] = useState(0);
    //   const [max, setMax] = useState(100);

    //   // active handle tracking
    //   const [activeHandle, setActiveHandle] = useState<"min" | "max" | null>(null);

    //   const dropdownRef = useRef<HTMLDivElement | null>(null);

    //   useEffect(() => {
    //     if (type === "multi") {
    //       setSelected(value || []);
    //     } else if (type === "single") {
    //       setSelected(value || label);
    //     } else if (type === "price" && value) {
    //       setMin(value.min);
    //       setMax(value.max);
    //     }
    //   }, [value, type, label]);

    //   useEffect(() => {
    //     const handler = (e: MouseEvent) => {
    //       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
    //         setIsOpen(false);
    //       }
    //     };
    //     document.addEventListener("mousedown", handler);
    //     return () => document.removeEventListener("mousedown", handler);
    //   }, []);

    //   const toggleMulti = (opt: string) => {
    //     let updated = [...selected];
    //     if (updated.includes(opt)) updated = updated.filter((x) => x !== opt);
    //     else updated.push(opt);

    //     setSelected(updated);
    //     onChange(updated);
    //   };

    //   const selectSingle = (opt: string) => {
    //     setSelected(opt);
    //     onChange(opt);
    //     setIsOpen(false);
    //   };

    //   // --- SLIDER LOGIC FIXED ---
    //   const handleMinChange = (v: number) => {
    //     if (v >= max) return;
    //     setMin(v);
    //   };

    //   const handleMaxChange = (v: number) => {
    //     if (v <= min) return;
    //     setMax(v);
    //   };

    //   const applyPrice = () => {
    //     onChange({ min, max });
    //     setIsOpen(false);
    //   };

    //   return (
    //     <div ref={dropdownRef} className="relative w-full">
    //       <button
    //         onClick={() => setIsOpen(!isOpen)}
    //         className="h-[40px] px-4 w-full rounded-xs cursor-pointer bg-white border border-[#EED291] flex items-center justify-between text-sm font-urbanist shadow-sm hover:shadow-md"
    //       >
    //         <span className="truncate">
    //           {type === "multi"
    //             ? selected.length > 0
    //               ? selected.join(", ")
    //               : label
    //             : type === "price"
    //             ? `$${min} - $${max}`
    //             : selected}
    //         </span>
    //         <ChevronDown size={18} />
    //       </button>

    //       {isOpen && (
    //         <div className="absolute top-full left-0 w-full bg-white border border-[#EED291] shadow-xl rounded-xl p-4 z-50">
    //           {/* SINGLE SELECT */}
    //           {type === "single" &&
    //             options.map((opt) => (
    //               <button
    //                 key={opt}
    //                 className={`block w-full text-left py-2 hover:bg-gray-100 rounded-md ${
    //                   selected === opt ? "font-semibold underline" : ""
    //                 }`}
    //                 onClick={() => selectSingle(opt)}
    //               >
    //                 {opt}
    //               </button>
    //             ))}

    //           {/* MULTI SELECT */}
    //           {type === "multi" &&
    //             options.map((opt) => (
    //               <label key={opt} className="flex items-center gap-3 py-2 cursor-pointer">
    //                 <input
    //                   type="checkbox"
    //                   checked={selected.includes(opt)}
    //                   onChange={() => toggleMulti(opt)}
    //                   className="accent-[#E5C97A]"
    //                 />
    //                 <span>{opt}</span>
    //               </label>
    //             ))}

    //           {/* PRICE SLIDER */}
    //           {type === "price" && (
    //             <div className="flex flex-col gap-4">
    //               <div className="relative w-full h-6 mt-4">
    //                 {/* inactive track */}
    //                 <div className="absolute inset-0 bg-[#D4D4D4] h-2 rounded-full" />

    //                 {/* active track */}
    //                 <div
    //                   className="absolute h-2 bg-[#E5C97A] rounded-full"
    //                   style={{
    //                     left: `${min}%`,
    //                     width: `${max - min}%`,
    //                   }}
    //                 />

    //                 {/* REAL INPUTS (capture pointer) */}
    //                 <input
    //                   type="range"
    //                   min={0}
    //                   max={100}
    //                   value={min}
    //                   onMouseDown={() => setActiveHandle("min")}
    //                   onChange={(e) => handleMinChange(Number(e.target.value))}
    //                   className="absolute top-0 w-full opacity-0 cursor-pointer h-6 z-30"
    //                 />

    //                 <input
    //                   type="range"
    //                   min={0}
    //                   max={100}
    //                   value={max}
    //                   onMouseDown={() => setActiveHandle("max")}
    //                   onChange={(e) => handleMaxChange(Number(e.target.value))}
    //                   className="absolute top-0 w-full opacity-0 cursor-pointer h-6 z-20"
    //                 />

    //                 {/* CUSTOM HANDLES */}
    //                 <div
    //                   className="absolute -translate-x-1/2 -top-3 pointer-events-none"
    //                   style={{ left: `${min}%` }}
    //                 >
    //                   <div className="px-2 py-1 text-xs bg-white shadow rounded-md text-center">
    //                     ${min}
    //                   </div>
    //                   <div className="w-4 h-4 bg-white border border-gray-300 rounded-full shadow mt-1" />
    //                 </div>

    //                 <div
    //                   className="absolute -translate-x-1/2 -top-3 pointer-events-none"
    //                   style={{ left: `${max}%` }}
    //                 >
    //                   <div className="px-2 py-1 text-xs bg-white shadow rounded-md text-center">
    //                     ${max}
    //                   </div>
    //                   <div className="w-4 h-4 bg-white border border-gray-300 rounded-full shadow mt-1" />
    //                 </div>
    //               </div>

    //               <button
    //                 onClick={applyPrice}
    //                 className="py-2 mt-2 bg-[#E5C97A] font-urbanist rounded-lg font-semibold"
    //               >
    //                 Apply
    //               </button>
    //             </div>
    //           )}
    //         </div>
    //       )}
    //     </div>
    //   );
    // };

    // export default FilterDropdown;



  // import React, { useState, useRef, useEffect } from "react";
  // import { ChevronDown } from "lucide-react";

  // interface Props {
  //   label: string;
  //   type: "single" | "multi" | "price";
  //   options?: string[];
  //   value?: any;
  //   onChange: (value: any) => void;
  // }

  // const FilterDropdown: React.FC<Props> = ({
  //   label,
  //   type,
  //   options = [],
  //   value,
  //   onChange,
  // }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const [selected, setSelected] = useState<any>(type === "multi" ? [] : label);

  //   // slider values (0..100)
  //   const [min, setMin] = useState<number>(0);
  //   const [max, setMax] = useState<number>(100);

  //   // track which handle is active so we can manage z-index for pointer capture
  //   const [activeHandle, setActiveHandle] = useState<"min" | "max" | null>(null);

  //   const dropdownRef = useRef<HTMLDivElement | null>(null);

  //   useEffect(() => {
  //     if (type === "multi") {
  //       setSelected(value || []);
  //     } else if (type === "single") {
  //       setSelected(value || label);
  //     } else if (type === "price" && value) {
  //       // expect numeric min/max in value
  //       setMin(typeof value.min === "number" ? value.min : 0);
  //       setMax(typeof value.max === "number" ? value.max : 100);
  //     }
  //   }, [value, type, label]);

  //   // close on outside click
  //   useEffect(() => {
  //     const handler = (e: MouseEvent) => {
  //       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
  //         setIsOpen(false);
  //       }
  //     };
  //     document.addEventListener("mousedown", handler);
  //     return () => document.removeEventListener("mousedown", handler);
  //   }, []);

  //   // Multi select toggling
  //   const toggleMulti = (opt: string) => {
  //     let updated = [...selected];
  //     if (updated.includes(opt)) updated = updated.filter((x) => x !== opt);
  //     else updated.push(opt);

  //     setSelected(updated);
  //     onChange(updated);
  //   };

  //   // Clear all for multi only (clears this dropdown only)
  //   const clearMulti = () => {
  //     setSelected([]);
  //     onChange([]);
  //   };

  //   // Single select
  //   const selectSingle = (opt: string) => {
  //     setSelected(opt);
  //     onChange(opt);
  //     setIsOpen(false);
  //   };

  //   // Slider helpers: prevent overlap and keep a 1-step gap
  //   const handleMinChange = (v: number) => {
  //     const newV = Math.min(v, max - 1);
  //     setMin(newV);
  //   };

  //   const handleMaxChange = (v: number) => {
  //     const newV = Math.max(v, min + 1);
  //     setMax(newV);
  //   };

  //   const applyPrice = () => {
  //     onChange({ min, max });
  //     setIsOpen(false);
  //   };

  //   // used for inline styles
  //   const activeLeft = `${min}%`;
  //   const activeWidth = `${max - min}%`;

  //   return (
  //     <div ref={dropdownRef} className="relative w-full">
  //       <button
  //         onClick={() => setIsOpen(!isOpen)}
  //         className="h-[40px] px-4 w-full rounded-xs cursor-pointer bg-white border border-[#EED291] flex items-center justify-between text-sm font-urbanist shadow-sm hover:shadow-md"
  //       >
  //         <span className="truncate">
  //           {type === "multi"
  //             ? Array.isArray(selected) && selected.length > 0
  //               ? selected.join(", ")
  //               : label
  //             : type === "price"
  //             ? `$${min} - $${max}`
  //             : selected}
  //         </span>
  //         <ChevronDown size={18} className={`${isOpen ? "rotate-180" : ""} transition`} />
  //       </button>

  //       {isOpen && (
  //         <div className="absolute top-full left-0 w-full bg-white border border-[#EED291] shadow-xl rounded-xl p-4 z-50">
  //           {/* SINGLE */}
  //           {type === "single" &&
  //             options.map((opt) => (
  //               <button
  //                 key={opt}
  //                 className={`block w-full text-left py-2 hover:bg-gray-100 cursor-pointer rounded-md ${
  //                   selected === opt ? "font-semibold underline underline-offset-4 text-[#0B0B0B]" : ""
  //                 }`}
  //                 onClick={() => selectSingle(opt)}
  //               >
  //                 {opt}
  //               </button>
  //             ))}

  //           {/* MULTI */}
  //           {type === "multi" && (
  //             <>
  //               <div className="flex flex-col gap-2">
  //                 {options.map((opt) => (
  //                   <label key={opt} className="flex items-center gap-3 py-2 cursor-pointer">
  //                     <input
  //                       type="checkbox"
  //                       checked={selected.includes(opt)}
  //                       onChange={() => toggleMulti(opt)}
  //                       className="w-4 h-4 accent-[#E5C97A]"
  //                     />
  //                     <span>{opt}</span>
  //                   </label>
  //                 ))}

  //                 {/* Clear All only for multi (shown when any checkbox is selected) */}
  //                 {Array.isArray(selected) && selected.length > 0 && (
  //                   <button
  //                     onClick={clearMulti}
  //                     className="text-sm underline cursor-pointer text-[#0B0B0B] self-start mt-1"
  //                   >
  //                     Clear All
  //                   </button>
  //                 )}
  //               </div>
  //             </>
  //           )}

  //           {/* PRICE */}
  //           {type === "price" && (
  //             <div className="flex flex-col gap-4">
  //               {/* track wrapper */}
  //               <div className="relative w-full h-6 mt-2">
  //                 {/* inactive track */}
  //                 <div className="absolute inset-0 rounded-full" style={{ background: "#D4D4D4", height: 8 }} />

  //                 {/* active (black) segment */}
  //                 <div
  //                   className="absolute rounded-full"
  //                   style={{
  //                     left: activeLeft,
  //                     width: activeWidth,
  //                     background: "#000000",
  //                     height: 8,
  //                   }}
  //                 />

  //                 {/* Two transparent range inputs overlayed to capture pointer.
  //                     We manage zIndex so whichever handle is being dragged gets pointer priority. */}
  //                 <input
  //                   type="range"
  //                   min={0}
  //                   max={100}
  //                   step={1}
  //                   value={min}
  //                   onMouseDown={() => setActiveHandle("min")}
  //                   onTouchStart={() => setActiveHandle("min")}
  //                   onChange={(e) => handleMinChange(Number(e.target.value))}
  //                   onMouseUp={() => setActiveHandle(null)}
  //                   onTouchEnd={() => setActiveHandle(null)}
  //                   style={{
  //                     position: "absolute",
  //                     left: 0,
  //                     top: 0,
  //                     width: "100%",
  //                     height: "36px",
  //                     background: "transparent",
  //                     appearance: "none",
  //                     WebkitAppearance: "none",
  //                     opacity: 0,
  //                     zIndex: activeHandle === "min" ? 3 : 2,
  //                     cursor: "pointer",
  //                   }}
  //                 />

  //                 <input
  //                   type="range"
  //                   min={0}
  //                   max={100}
  //                   step={1}
  //                   value={max}
  //                   onMouseDown={() => setActiveHandle("max")}
  //                   onTouchStart={() => setActiveHandle("max")}
  //                   onChange={(e) => handleMaxChange(Number(e.target.value))}
  //                   onMouseUp={() => setActiveHandle(null)}
  //                   onTouchEnd={() => setActiveHandle(null)}
  //                   style={{
  //                     position: "absolute",
  //                     left: 0,
  //                     top: 0,
  //                     width: "100%",
  //                     height: "36px",
  //                     background: "transparent",
  //                     appearance: "none",
  //                     WebkitAppearance: "none",
  //                     opacity: 0,
  //                     zIndex: activeHandle === "max" ? 3 : 2,
  //                     cursor: "pointer",
  //                   }}
  //                 />

  //                 {/* custom left handle (no bubble) */}
  //                 <div
  //                   className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
  //                   style={{
  //                     left: `${min}%`,
  //                     top: "50%",
  //                   }}
  //                 >
  //                   <div
  //                     style={{
  //                       width: 18,
  //                       height: 18,
  //                       borderRadius: "50%",
  //                       background: "#fff",
  //                       border: "3px solid #000",
  //                     }}
  //                   />
  //                 </div>

  //                 {/* custom right handle (no bubble) */}
  //                 <div
  //                   className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
  //                   style={{
  //                     left: `${max}%`,
  //                     top: "50%",
  //                   }}
  //                 >
  //                   <div
  //                     style={{
  //                       width: 18,
  //                       height: 18,
  //                       borderRadius: "50%",
  //                       background: "#fff",
  //                       border: "3px solid #000",
  //                     }}
  //                   />
  //                 </div>
  //               </div>

  //               {/* value boxes below track */}
  //               <div className="flex items-center justify-between">
  //                 <div className="border px-3 py-1 font-urbanist rounded">
  //                   ${min}
  //                 </div>
  //                 <span>to</span>
  //                 <div className="border px-3 py-1 font-urbanist rounded">
  //                   ${max}
  //                 </div>
  //               </div>

  //               <button
  //                 onClick={applyPrice}
  //                 className="py-2 bg-[#E5C97A] font-urbanist rounded-lg font-semibold"
  //               >
  //                 Apply
  //               </button>
  //             </div>
  //           )}
  //         </div>
  //       )}
  //     </div>
  //   );
  // };

  // export default FilterDropdown;


// import React, { useState, useRef, useEffect } from "react";
// import { ChevronDown } from "lucide-react";

// interface Props {
//   label: string;
//   type: "single" | "multi" | "price";
//   options?: string[];
//   value?: any;
//   onChange: (value: any) => void;
// }

// const FilterDropdown: React.FC<Props> = ({
//   label,
//   type,
//   options = [],
//   value,
//   onChange,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState<any>(type === "multi" ? [] : label);

//   const [min, setMin] = useState<number>(0);
//   const [max, setMax] = useState<number>(100);

//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (type === "multi") {
//       setSelected(value || []);
//     } else if (type === "single") {
//       setSelected(value || label);
//     } else if (type === "price" && value) {
//       setMin(typeof value.min === "number" ? value.min : 0);
//       setMax(typeof value.max === "number" ? value.max : 100);
//     }
//   }, [value, type, label]);

//   // outside click close
//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   // multi toggle
//   const toggleMulti = (opt: string) => {
//     let updated = [...selected];
//     if (updated.includes(opt)) updated = updated.filter((x) => x !== opt);
//     else updated.push(opt);

//     setSelected(updated);
//     onChange(updated);
//   };

//   const clearMulti = () => {
//     setSelected([]);
//     onChange([]);
//   };

//   const selectSingle = (opt: string) => {
//     setSelected(opt);
//     onChange(opt);
//     setIsOpen(false);
//   };

//   // FIXED — dual slider works on both sides
//   const handleMinChange = (v: number) => {
//     if (v < max) setMin(v);
//   };

//   const handleMaxChange = (v: number) => {
//     if (v > min) setMax(v);
//   };

//   const applyPrice = () => {
//     onChange({ min, max });
//     setIsOpen(false);
//   };

//   return (
//     <div ref={dropdownRef} className="relative w-full">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="h-[40px] px-4 w-full rounded-xs cursor-pointer bg-white border border-[#EED291] flex items-center justify-between text-sm font-urbanist shadow-sm hover:shadow-md"
//       >
//         <span className="truncate">
//           {type === "multi"
//             ? selected.length > 0
//               ? selected.join(", ")
//               : label
//             : type === "price"
//             ? `$${min} - $${max}`
//             : selected}
//         </span>
//         <ChevronDown size={18} className={`${isOpen ? "rotate-180" : ""} transition`} />
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-white border border-[#EED291] shadow-xl rounded-xl p-4 z-50">

//           {/* SINGLE SELECT */}
//           {type === "single" &&
//             options.map((opt) => (
//               <button
//                 key={opt}
//                 className={`block w-full text-left py-2 hover:bg-gray-100 rounded-md ${
//                   selected === opt ? "font-semibold underline underline-offset-4" : ""
//                 }`}
//                 onClick={() => selectSingle(opt)}
//               >
//                 {opt}
//               </button>
//             ))}

//           {/* MULTI SELECT */}
//           {type === "multi" && (
//             <div className="flex flex-col gap-2">
//               {options.map((opt) => (
//                 <label key={opt} className="flex items-center gap-3 py-1 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={selected.includes(opt)}
//                     onChange={() => toggleMulti(opt)}
//                     className="accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </label>
//               ))}

//               {selected.length > 0 && (
//                 <button onClick={clearMulti} className="text-sm underline text-[#0B0B0B]">
//                   Clear All
//                 </button>
//               )}
//             </div>
//           )}

//           {/* PRICE SLIDER */}
//           {type === "price" && (
//             <div className="flex flex-col gap-4">
//               <div className="relative w-full h-8 mt-2">

//                 {/* inactive track */}
//                 <div className="absolute inset-0 bg-[#D4D4D4] h-[6px] rounded-full" />

//                 {/* active track */}
//                 <div
//                   className="absolute h-[6px] bg-black rounded-full"
//                   style={{ left: `${min}%`, width: `${max - min}%` }}
//                 />

//                 {/* LEFT RANGE INPUT (only left half clickable) */}
//                 <input
//                   type="range"
//                   min={0}
//                   max={100}
//                   value={min}
//                   onChange={(e) => handleMinChange(Number(e.target.value))}
//                   className="absolute top-0 h-8 opacity-0 cursor-pointer"
//                   style={{
//                     left: 0,
//                     width: "50%",
//                     zIndex: 5,
//                   }}
//                 />

//                 {/* RIGHT RANGE INPUT (only right half clickable) */}
//                 <input
//                   type="range"
//                   min={0}
//                   max={100}
//                   value={max}
//                   onChange={(e) => handleMaxChange(Number(e.target.value))}
//                   className="absolute top-0 h-8 opacity-0 cursor-pointer"
//                   style={{
//                     right: 0,
//                     width: "50%",
//                     zIndex: 4,
//                   }}
//                 />

//                 {/* left slider handle */}
//                 <div
//                   className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
//                   style={{ left: `${min}%`, top: "50%" }}
//                 >
//                   <div className="w-4 h-4 bg-white border-[3px] border-black rounded-full" />
//                 </div>

//                 {/* right slider handle */}
//                 <div
//                   className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
//                   style={{ left: `${max}%`, top: "50%" }}
//                 >
//                   <div className="w-4 h-4 bg-white border-[3px] border-black rounded-full" />
//                 </div>
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="border px-3 py-1 rounded">${min}</div>
//                 <span>to</span>
//                 <div className="border px-3 py-1 rounded">${max}</div>
//               </div>

//               <button
//                 onClick={applyPrice}
//                 className="py-2 bg-[#E5C97A] rounded-lg font-semibold"
//               >
//                 Apply
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilterDropdown;



// import React, { useState, useRef, useEffect } from "react";
// import { ChevronDown } from "lucide-react";

// interface Props {
//   label: string;
//   type: "single" | "multi" | "price";
//   options?: string[];
//   value?: any;
//   onChange: (value: any) => void;
// }

// const FilterDropdown: React.FC<Props> = ({
//   label,
//   type,
//   options = [],
//   value,
//   onChange,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState<any>(
//     type === "multi" ? [] : label
//   );

//   const [min, setMin] = useState<number>(0);
//   const [max, setMax] = useState<number>(100);

//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (type === "multi") {
//       setSelected(value || []);
//     } else if (type === "single") {
//       setSelected(value || label);
//     } else if (type === "price" && value) {
//       setMin(typeof value.min === "number" ? value.min : 0);
//       setMax(typeof value.max === "number" ? value.max : 100);
//     }
//   }, [value, type, label]);

//   // close on outside click
//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   // multi
//   const toggleMulti = (opt: string) => {
//     let updated = [...selected];
//     if (updated.includes(opt))
//       updated = updated.filter((x) => x !== opt);
//     else updated.push(opt);

//     setSelected(updated);
//     onChange(updated);
//   };

//   const clearMulti = () => {
//     setSelected([]);
//     onChange([]);
//   };

//   const selectSingle = (opt: string) => {
//     setSelected(opt);
//     onChange(opt);
//     setIsOpen(false);
//   };

//   // FINAL WORKING DUAL SLIDER
//   const handleMinChange = (v: number) => {
//     if (v <= max - 1) setMin(v);
//   };

//   const handleMaxChange = (v: number) => {
//     if (v >= min + 1) setMax(v);
//   };

//   const applyPrice = () => {
//     onChange({ min, max });
//     setIsOpen(false);
//   };

//   return (
//     <div ref={dropdownRef} className="relative w-full">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="h-[40px] px-4 w-full rounded-xs cursor-pointer bg-white border border-[#EED291] flex items-center justify-between text-sm font-urbanist shadow-sm hover:shadow-md"
//       >
//         <span className="truncate">
//           {type === "multi"
//             ? selected.length > 0
//               ? selected.join(", ")
//               : label
//             : type === "price"
//             ? `$${min} - $${max}`
//             : selected}
//         </span>
//         <ChevronDown
//           size={18}
//           className={`${isOpen ? "rotate-180" : ""} transition`}
//         />
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-white border border-[#EED291] shadow-xl rounded-xl p-4 z-50">

//           {/* SINGLE */}
//           {type === "single" &&
//             options.map((opt) => (
//               <button
//                 key={opt}
//                 className={`block w-full text-left py-2 hover:bg-gray-100 rounded-md ${
//                   selected === opt
//                     ? "font-semibold underline underline-offset-4"
//                     : ""
//                 }`}
//                 onClick={() => selectSingle(opt)}
//               >
//                 {opt}
//               </button>
//             ))}

//           {/* MULTI */}
//           {type === "multi" && (
//             <div className="flex flex-col gap-2">
//               {options.map((opt) => (
//                 <label
//                   key={opt}
//                   className="flex items-center gap-3 py-1 cursor-pointer"
//                 >
//                   <input
//                     type="checkbox"
//                     checked={selected.includes(opt)}
//                     onChange={() => toggleMulti(opt)}
//                     className="accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </label>
//               ))}

//               {selected.length > 0 && (
//                 <button
//                   onClick={clearMulti}
//                   className="text-sm underline text-[#0B0B0B]"
//                 >
//                   Clear All
//                 </button>
//               )}
//             </div>
//           )}

//           {/* PRICE – FINAL WORKING DUAL SLIDER */}
//           {type === "price" && (
//             <div className="flex flex-col gap-4">
              
//               <div className="relative w-full h-8 mt-2">
//                 {/* inactive track */}
//                 <div className="absolute inset-0 bg-[#D4D4D4] h-[6px] rounded-full" />

//                 {/* active segment */}
//                 <div
//                   className="absolute h-[6px] bg-black rounded-full"
//                   style={{
//                     left: `${min}%`,
//                     width: `${max - min}%`,
//                   }}
//                 />

//                 {/* MIN RANGE FULL WIDTH BUT ONLY RESPONSIVE NEAR HANDLE */}
//                 <input
//                   type="range"
//                   min={0}
//                   max={100}
//                   value={min}
//                   onChange={(e) =>
//                     handleMinChange(Number(e.target.value))
//                   }
//                   className="absolute top-0 w-full h-8 opacity-0 cursor-pointer"
//                   style={{ zIndex: 5 }}
//                 />

//                 {/* MAX RANGE */}
//                 <input
//                   type="range"
//                   min={0}
//                   max={100}
//                   value={max}
//                   onChange={(e) =>
//                     handleMaxChange(Number(e.target.value))
//                   }
//                   className="absolute top-0 w-full h-8 opacity-0 cursor-pointer"
//                   style={{ zIndex: 4 }}
//                 />

//                 {/* left handle */}
//                 <div
//                   className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
//                   style={{ left: `${min}%`, top: "50%" }}
//                 >
//                   <div className="w-4 h-4 bg-white border-[3px] border-black rounded-full" />
//                 </div>

//                 {/* right handle */}
//                 <div
//                   className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
//                   style={{ left: `${max}%`, top: "50%" }}
//                 >
//                   <div className="w-4 h-4 bg-white border-[3px] border-black rounded-full" />
//                 </div>
//               </div>

//               {/* PRICE LABELS */}
//               <div className="flex items-center justify-between">
//                 <div className="border px-3 py-1 rounded">${min}</div>
//                 <span>to</span>
//                 <div className="border px-3 py-1 rounded">${max}</div>
//               </div>

//               <button
//                 onClick={applyPrice}
//                 className="py-2 bg-[#E5C97A] rounded-lg font-semibold"
//               >
//                 Apply
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilterDropdown;


// import React, { useState, useRef, useEffect } from "react";
// import { ChevronDown } from "lucide-react";

// interface Props {
//   label: string;
//   type: "single" | "multi" | "price";
//   options?: string[];
//   value?: any;
//   onChange: (value: any) => void;
// }

// const FilterDropdown: React.FC<Props> = ({
//   label,
//   type,
//   options = [],
//   value,
//   onChange,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState<any>(
//     type === "multi" ? [] : label
//   );

//   const [min, setMin] = useState<number>(0);
//   const [max, setMax] = useState<number>(100);

//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (type === "multi") {
//       setSelected(value || []);
//     } else if (type === "single") {
//       setSelected(value || label);
//     } else if (type === "price" && value) {
//       setMin(typeof value.min === "number" ? value.min : 0);
//       setMax(typeof value.max === "number" ? value.max : 100);
//     }
//   }, [value, type, label]);

//   // close on outside click
//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   // multi select toggle
//   const toggleMulti = (opt: string) => {
//     let updated = [...selected];
//     if (updated.includes(opt)) updated = updated.filter((x) => x !== opt);
//     else updated.push(opt);

//     setSelected(updated);
//     onChange(updated);
//   };

//   const clearMulti = () => {
//     setSelected([]);
//     onChange([]);
//   };

//   const selectSingle = (opt: string) => {
//     setSelected(opt);
//     onChange(opt);
//     setIsOpen(false);
//   };

//   // FIXED — TRUE dual slider
//   const handleMinChange = (v: number) => {
//     if (v < max) setMin(v);
//   };

//   const handleMaxChange = (v: number) => {
//     if (v > min) setMax(v);
//   };

//   const applyPrice = () => {
//     onChange({ min, max });
//     setIsOpen(false);
//   };

//   return (
//     <div ref={dropdownRef} className="relative w-full">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="h-[40px] px-4 w-full rounded-xs cursor-pointer bg-white border border-[#EED291] flex items-center justify-between text-sm font-urbanist shadow-sm hover:shadow-md"
//       >
//         <span className="truncate">
//           {type === "multi"
//             ? selected.length > 0
//               ? selected.join(", ")
//               : label
//             : type === "price"
//             ? `$${min} - $${max}`
//             : selected}
//         </span>
//         <ChevronDown
//           size={18}
//           className={`${isOpen ? "rotate-180" : ""} transition`}
//         />
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-white border border-[#EED291] shadow-xl rounded-xl p-4 z-50">

   
//           {type === "single" &&
//             options.map((opt) => (
//               <button
//                 key={opt}
//                 className={`block w-full text-left py-2 hover:bg-gray-100 rounded-md ${
//                   selected === opt
//                     ? "font-semibold underline underline-offset-4"
//                     : ""
//                 }`}
//                 onClick={() => selectSingle(opt)}
//               >
//                 {opt}
//               </button>
//             ))}


//           {type === "multi" && (
//             <div className="flex flex-col gap-2">
//               {options.map((opt) => (
//                 <label
//                   key={opt}
//                   className="flex items-center gap-3 py-1 cursor-pointer"
//                 >
//                   <input
//                     type="checkbox"
//                     checked={selected.includes(opt)}
//                     onChange={() => toggleMulti(opt)}
//                     className="accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </label>
//               ))}

//               {selected.length > 0 && (
//                 <button
//                   onClick={clearMulti}
//                   className="text-sm underline text-[#0B0B0B]"
//                 >
//                   Clear All
//                 </button>
//               )}
//             </div>
//           )}

//           {type === "price" && (
//             <div className="flex flex-col gap-4">

//               <div className="relative w-full h-10 mt-2">

//                 <div className="absolute inset-0 bg-[#D4D4D4] h-[6px] rounded-full top-1/2 -translate-y-1/2" />

//                 <div
//                   className="absolute h-[6px] bg-black rounded-full top-1/2 -translate-y-1/2"
//                   style={{
//                     left: `${min}%`,
//                     width: `${max - min}%`,
//                   }}
//                 />

//                 <input
//                   type="range"
//                   min={0}
//                   max={100}
//                   value={min}
//                   onChange={(e) => handleMinChange(Number(e.target.value))}
//                   className="absolute h-10 opacity-0 cursor-pointer"
//                   style={{
//                     left: 0,
//                     width: "50%",
//                     zIndex: 6,
//                   }}
//                 />


//                 <input
//                   type="range"
//                   min={0}
//                   max={100}
//                   value={max}
//                   onChange={(e) => handleMaxChange(Number(e.target.value))}
//                   className="absolute h-10 opacity-0 cursor-pointer"
//                   style={{
//                     right: 0,
//                     width: "50%",
//                     zIndex: 5,
//                   }}
//                 />

//                 {/* Left handle */}
//                 <div
//                   className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
//                   style={{
//                     left: `${min}%`,
//                     top: "50%",
//                   }}
//                 >
//                   <div className="w-4 h-4 bg-white border-[3px] border-black rounded-full" />
//                 </div>

//                 {/* Right handle */}
//                 <div
//                   className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
//                   style={{
//                     left: `${max}%`,
//                     top: "50%",
//                   }}
//                 >
//                   <div className="w-4 h-4 bg-white border-[3px] border-black rounded-full" />
//                 </div>
//               </div>

//               {/* Labels */}
//               <div className="flex items-center justify-between">
//                 <div className="border px-3 py-1 rounded">${min}</div>
//                 <span>to</span>
//                 <div className="border px-3 py-1 rounded">${max}</div>
//               </div>

//               <button
//                 onClick={applyPrice}
//                 className="py-2 bg-[#E5C97A] rounded-lg font-semibold"
//               >
//                 Apply
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilterDropdown;


import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  label: string;
  type: "single" | "multi" | "price";
  options?: string[];
  value?: any;
  onChange: (value: any) => void;
}

const FilterDropdown: React.FC<Props> = ({
  label,
  type,
  options = [],
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<any>(
    type === "multi" ? [] : label
  );

  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(100);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (type === "multi") {
      setSelected(value || []);
    } else if (type === "single") {
      setSelected(value || label);
    } else if (type === "price" && value) {
      setMin(typeof value.min === "number" ? value.min : 0);
      setMax(typeof value.max === "number" ? value.max : 100);
    }
  }, [value, type, label]);

  // close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // multi select toggle
  const toggleMulti = (opt: string) => {
    let updated = [...selected];
    if (updated.includes(opt)) updated = updated.filter((x) => x !== opt);
    else updated.push(opt);

    setSelected(updated);
    onChange(updated);
  };

  const clearMulti = () => {
    setSelected([]);
    onChange([]);
  };

  const selectSingle = (opt: string) => {
    setSelected(opt);
    onChange(opt);
    setIsOpen(false);
  };

  // dual slider logic
  const handleMinChange = (v: number) => {
    if (v < max) setMin(v);
  };

  const handleMaxChange = (v: number) => {
    if (v > min) setMax(v);
  };

  const applyPrice = () => {
    onChange({ min, max });
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative w-full">

      {/* ---- CHANGE #1: always show label "Price" ---- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-[40px] px-4 w-full rounded-xs cursor-pointer bg-white border border-[#EED291] flex items-center justify-between text-sm font-urbanist shadow-sm hover:shadow-md"
      >
        <span className="truncate">
          {label}  {/* <-- always show label (Price) */}
        </span>
        <ChevronDown
          size={18}
          className={`${isOpen ? "rotate-180" : ""} transition`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border border-[#EED291] shadow-xl rounded-xl p-4 z-50">

          {/* SINGLE */}
          {type === "single" &&
            options.map((opt) => (
              <button
                key={opt}
                className={`block w-full text-left py-2 hover:bg-gray-100 rounded-md ${
                  selected === opt
                    ? "font-semibold underline underline-offset-4"
                    : ""
                }`}
                onClick={() => selectSingle(opt)}
              >
                {opt}
              </button>
            ))}

          {/* MULTI */}
          {type === "multi" && (
            <div className="flex flex-col gap-2">
              {options.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-3 py-1 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(opt)}
                    onChange={() => toggleMulti(opt)}
                    className="accent-[#E5C97A]"
                  />
                  <span>{opt}</span>
                </label>
              ))}

              {selected.length > 0 && (
                <button
                  onClick={clearMulti}
                  className="text-sm underline text-[#0B0B0B]"
                >
                  Clear All
                </button>
              )}
            </div>
          )}

          {/* PRICE DROPDOWN (dual slider) */}
          {type === "price" && (
            <div className="flex flex-col gap-4">

              <div className="relative w-full h-10 mt-2">
                <div className="absolute inset-0 bg-[#D4D4D4] h-[6px] rounded-full top-1/2 -translate-y-1/2" />

                <div
                  className="absolute h-[6px] bg-black rounded-full top-1/2 -translate-y-1/2"
                  style={{
                    left: `${min}%`,
                    width: `${max - min}%`,
                  }}
                />

                <input
                  type="range"
                  min={0}
                  max={100}
                  value={min}
                  onChange={(e) => handleMinChange(Number(e.target.value))}
                  className="absolute h-10 opacity-0 cursor-pointer"
                  style={{
                    left: 0,
                    width: "50%",
                    zIndex: 6,
                  }}
                />

                <input
                  type="range"
                  min={0}
                  max={100}
                  value={max}
                  onChange={(e) => handleMaxChange(Number(e.target.value))}
                  className="absolute h-10 opacity-0 cursor-pointer"
                  style={{
                    right: 0,
                    width: "50%",
                    zIndex: 5,
                  }}
                />

                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    left: `${min}%`,
                    top: "50%",
                  }}
                >
                  <div className="w-4 h-4 bg-white border-[3px] border-black rounded-full" />
                </div>

                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    left: `${max}%`,
                    top: "50%",
                  }}
                >
                  <div className="w-4 h-4 bg-white border-[3px] border-black rounded-full" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="border px-3 py-1 rounded">${min}</div>
                <span>to</span>
                <div className="border px-3 py-1 rounded">${max}</div>
              </div>

              <button
                onClick={applyPrice}
                className="py-2 bg-[#E5C97A] rounded-lg font-semibold"
              >
                Apply
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
