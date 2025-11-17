// import React, { useState, useRef, useEffect } from 'react';
// import { ChevronDown } from 'lucide-react';

// interface FilterDropdownProps {
//   label: string;
//   options: string[];
//   onSelect: (option: string) => void;
//   defaultValue?: string;
//   variant?: 'beige' | 'white';
// }

// const FilterDropdown: React.FC<FilterDropdownProps> = ({
//   label,
//   options,
//   onSelect,
//   defaultValue = options[0],
//   variant = 'beige',
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState(defaultValue);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleSelect = (option: string) => {
//     setSelected(option);
//     onSelect(option);
//     setIsOpen(false);
//   };

//   const bgColor = variant === 'beige' ? 'border border-[#EED291]' : 'bg-white border border-[#EED291]';
//   const textColor = variant === 'beige' ? 'text-[#0B0B0B]' : 'text-[#0B0B0B]';

//   return (
//     <div ref={dropdownRef} className="relative w-full">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`${bgColor} ${textColor} h-[40px] px-4 cursor-pointer font-urbanist font-semibold text-sm flex items-center justify-between gap-3 w-full transition-all duration-200 hover:shadow-md`}
//       >
//         <span className="truncate">{selected}</span>
//         <ChevronDown size={18} className={`transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 right-0 md:left-0 md:right-auto mt-2 bg-white border border-[#EED291] rounded-lg shadow-lg z-50 min-w-max">
//           {options.map((option) => (
//             <button
//               key={option}
//               onClick={() => handleSelect(option)}
//               className={`block w-full text-left px-6 py-3 font-urbanist text-sm md:text-base transition-all duration-150 ${
//                 selected === option
//                   ? 'text-[#641026] border-b-2 border-[#641026]'
//                   : 'text-[#0B0B0B] hover:bg-[#F5F5F5]'
//               }`}
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilterDropdown;



// ===== Updated FilterDropdown.tsx =====

// import React, { useState, useRef, useEffect } from "react";
// import { ChevronDown } from "lucide-react";

// interface Props {
//   label: string;
//   type: "single" | "multi" | "price";
//   options?: string[];
//   onChange: (value: any) => void;
// }

// const FilterDropdown: React.FC<Props> = ({ label, type, options = [], onChange }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState<any>(type === "multi" ? [] : label);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const [minPrice, setMinPrice] = useState(10);
//   const [maxPrice, setMaxPrice] = useState(80);

//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsOpen(false);
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const toggleMulti = (option: string) => {
//     let updated = [...selected];
//     if (updated.includes(option)) updated = updated.filter(o => o !== option);
//     else updated.push(option);
//     setSelected(updated);
//     onChange(updated);
//   };

//   const handleSingle = (option: string) => {
//     setSelected(option);
//     onChange(option);
//     setIsOpen(false);
//   };

//   const applyPrice = () => {
//     onChange({ min: minPrice, max: maxPrice });
//     setIsOpen(false);
//   };

//   return (
//     <div ref={dropdownRef} className="relative w-full">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="h-[40px] px-4 w-full rounded-lg bg-white border border-[#EED291] flex items-center justify-between text-sm font-urbanist shadow-sm hover:shadow-md transition"
//       >
//         <span>{label}</span>
//         <ChevronDown size={18} className={`transition ${isOpen ? "rotate-180" : ""}`} />
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-xl p-4 z-50 animate-fadeIn border border-[#EED291]">

//           {/* SINGLE SELECT */}
//           {type === "single" && options.map((opt) => (
//             <button key={opt} onClick={() => handleSingle(opt)} className="block w-full text-left py-2 hover:bg-gray-100 rounded-md">
//               {opt}
//             </button>
//           ))}

//           {/* MULTI-SELECT WITH CHECKBOXES */}
//           {type === "multi" && options.map((opt) => (
//             <label key={opt} className="flex items-center gap-3 py-2 cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={selected.includes(opt)}
//                 onChange={() => toggleMulti(opt)}
//                 className="w-4 h-4 accent-[#E5C97A]"
//               />
//               <span>{opt}</span>
//             </label>
//           ))}

//           {/* PRICE SLIDER */}
//           {type === "price" && (
//             <div>
//               <div className="flex flex-col gap-4 p-2">
//                 <input type="range" min={0} max={100} value={minPrice} onChange={(e)=> setMinPrice(+e.target.value)} className="w-full" />
//                 <input type="range" min={0} max={100} value={maxPrice} onChange={(e)=> setMaxPrice(+e.target.value)} className="w-full" />

//                 <div className="flex items-center justify-between gap-3">
//                   <input value={minPrice} readOnly className="border px-3 py-1 rounded w-full" />
//                   <span>to</span>
//                   <input value={maxPrice} readOnly className="border px-3 py-1 rounded w-full" />
//                 </div>

//                 <button onClick={applyPrice} className="w-full py-2 bg-[#E5C97A] rounded-lg font-semibold mt-2">Apply</button>
//               </div>
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
//   onChange: (value: any) => void;
// }

// const FilterDropdown: React.FC<Props> = ({ label, type, options = [], onChange }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState<any>(type === "multi" ? [] : label);

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Dual-thumb slider values
//   const [min, setMin] = useState(10);
//   const [max, setMax] = useState(80);

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

//   const applyPrice = () => {
//     onChange({ min, max });
//     setIsOpen(false);
//   };

//   return (
//     <div ref={dropdownRef} className="relative w-full">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="h-[40px] px-4 w-full rounded-lg bg-white border border-[#EED291] flex items-center justify-between text-sm font-urbanist shadow-sm hover:shadow-md"
//       >
//         <span>{label}</span>
//         <ChevronDown size={18} className={`${isOpen ? "rotate-180" : ""} transition`} />
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-white border border-[#EED291] shadow-xl rounded-xl p-4 z-50">

//           {/* SINGLE */}
//           {type === "single" &&
//             options.map((opt) => (
//               <button
//                 key={opt}
//                 className="block w-full text-left py-2 hover:bg-gray-100 rounded-md"
//                 onClick={() => selectSingle(opt)}
//               >
//                 {opt}
//               </button>
//             ))}

//           {/* MULTI */}
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

//           {/* PRICE: Dual thumb slider */}
//           {type === "price" && (
//             <div className="flex flex-col gap-4">

//               {/* Track */}
//               <div className="relative w-full h-2 bg-gray-200 rounded-full">
//                 <div
//                   className="absolute h-full bg-[#E5C97A] rounded-full"
//                   style={{
//                     left: `${min}%`,
//                     width: `${max - min}%`,
//                   }}
//                 />

//                 {/* Thumb 1 */}
//                 <input
//                   type="range"
//                   min={0}
//                   max={100}
//                   value={min}
//                   onChange={(e) => {
//                     const val = +e.target.value;
//                     if (val < max) setMin(val);
//                   }}
//                   className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
//                 />

//                 {/* Thumb 2 */}
//                 <input
//                   type="range"
//                   min={0}
//                   max={100}
//                   value={max}
//                   onChange={(e) => {
//                     const val = +e.target.value;
//                     if (val > min) setMax(val);
//                   }}
//                   className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
//                 />
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="border px-3 py-1 rounded">{min}</div>
//                 <span>to</span>
//                 <div className="border px-3 py-1 rounded">{max}</div>
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
//   onChange: (value: any) => void;
// }

// const FilterDropdown: React.FC<Props> = ({
//   label,
//   type,
//   options = [],
//   onChange,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState<any>(
//     type === "multi" ? [] : label
//   );

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const [min, setMin] = useState(10);
//   const [max, setMax] = useState(80);

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
//           {/* SINGLE */}
//           {type === "single" &&
//             options.map((opt) => (
//               <button
//                 key={opt}
//                 className="block w-full text-left py-2 hover:bg-gray-100 rounded-md"
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

//           {/* PRICE */}
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
//                     const val = +e.target.value;
//                     if (val < max) setMin(val);
//                   }}
//                   className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
//                 />

//                 <input
//                   type="range"
//                   min={0}
//                   max={100}
//                   value={max}
//                   onChange={(e) => {
//                     const val = +e.target.value;
//                     if (val > min) setMax(val);
//                   }}
//                   className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
//                 />
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
//   value?: any;                 // <-- ADDED
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

//   // 🔥 LOCAL STATE — WILL SYNC WITH PARENT
//   const [selected, setSelected] = useState<any>(
//     type === "multi" ? [] : label
//   );

//   const [min, setMin] = useState(10);
//   const [max, setMax] = useState(80);

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   /* 
//   ----------------------------------------------------
//   🔥 VERY IMPORTANT: SYNC with parent filter values
//   ----------------------------------------------------
//   */
//   useEffect(() => {
//     if (type === "multi") {
//       setSelected(value || []); // sync multi values
//     } else if (type === "single") {
//       setSelected(value || label); // sync single value
//     } else if (type === "price" && value) {
//       setMin(value.min);
//       setMax(value.max);
//     }
//   }, [value, type, label]);

//   /* CLOSE DROPDOWN ON OUTSIDE CLICK */
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

//   /* MULTI SELECT */
//   const toggleMulti = (opt: string) => {
//     let updated = [...selected];
//     if (updated.includes(opt)) updated = updated.filter((x) => x !== opt);
//     else updated.push(opt);

//     setSelected(updated);
//     onChange(updated);
//   };

//   /* SINGLE SELECT */
//   const selectSingle = (opt: string) => {
//     setSelected(opt);
//     onChange(opt);
//     setIsOpen(false);
//   };

//   /* PRICE RANGE */
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
//                 className="block w-full text-left py-2 hover:bg-gray-100 rounded-md"
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

//           {/* PRICE */}
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

  const [min, setMin] = useState(10);
  const [max, setMax] = useState(80);

  const dropdownRef = useRef<HTMLDivElement>(null);

  /* SYNC WITH PARENT */
  useEffect(() => {
    if (type === "multi") {
      setSelected(value || []);
    } else if (type === "single") {
      setSelected(value || label);
    } else if (type === "price" && value) {
      setMin(value.min);
      setMax(value.max);
    }
  }, [value, type, label]);

  /* CLOSE ON OUTSIDE CLICK */
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

  /* MULTI SELECT */
  const toggleMulti = (opt: string) => {
    let updated = [...selected];
    if (updated.includes(opt)) updated = updated.filter((x) => x !== opt);
    else updated.push(opt);

    setSelected(updated);
    onChange(updated);
  };

  /* SINGLE SELECT */
  const selectSingle = (opt: string) => {
    setSelected(opt);
    onChange(opt);
    setIsOpen(false);
  };

  /* APPLY PRICE */
  const applyPrice = () => {
    onChange({ min, max });
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-[40px] px-4 w-full rounded-xs cursor-pointer bg-white border border-[#EED291] flex items-center justify-between text-sm font-urbanist shadow-sm hover:shadow-md"
      >
        <span className="truncate">
          {type === "multi"
            ? Array.isArray(selected) && selected.length > 0
              ? selected.join(", ")
              : label
            : selected}
        </span>
        <ChevronDown
          size={18}
          className={`${isOpen ? "rotate-180" : ""} transition`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border border-[#EED291] shadow-xl rounded-xl p-4 z-50">

          {/* SINGLE SELECT */}
          {type === "single" &&
            options.map((opt) => (
              <button
                key={opt}
                className={`block w-full text-left py-2 hover:bg-gray-100 rounded-md
                  ${selected === opt ? 
                    "font-semibold underline underline-offset-4 text-[#0B0B0B]" 
                    : ""}`}
                onClick={() => selectSingle(opt)}
              >
                {opt}
              </button>
            ))}

          {/* MULTI SELECT */}
          {type === "multi" &&
            options.map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-3 py-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(opt)}
                  onChange={() => toggleMulti(opt)}
                  className="w-4 h-4 accent-[#E5C97A]"
                />
                <span>{opt}</span>
              </label>
            ))}

          {/* PRICE RANGE */}
          {type === "price" && (
            <div className="flex flex-col gap-4">
              <div className="relative w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="absolute h-full bg-[#E5C97A] rounded-full"
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
                  onChange={(e) => {
                    const v = +e.target.value;
                    if (v < max) setMin(v);
                  }}
                  className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
                />

                <input
                  type="range"
                  min={0}
                  max={100}
                  value={max}
                  onChange={(e) => {
                    const v = +e.target.value;
                    if (v > min) setMax(v);
                  }}
                  className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="border px-3 py-1 font-urbanist rounded">${min}</div>
                <span>to</span>
                <div className="border px-3 py-1 font-urbanist rounded">${max}</div>
              </div>

              <button
                onClick={applyPrice}
                className="py-2 bg-[#E5C97A] font-urbanist rounded-lg font-semibold"
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
