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
  const [selected, setSelected] = useState<any>(type === "multi" ? [] : label);

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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-[40px] px-4 w-full rounded-xs font-urbanist cursor-pointer bg-white border border-[#EED291] flex items-center justify-between text-sm font-urbanist shadow-sm hover:shadow-md"
      >
        <span className="truncate">{label}</span>
        <ChevronDown
          size={18}
          className={`${isOpen ? "rotate-180" : ""} transition`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border border-[#EED291] shadow-xl font-urbanist rounded-xl p-4 z-50">
          {type === "single" &&
            options.map((opt) => (
              <button
                key={opt}
                className={`block w-full text-left py-2 hover:bg-gray-100 font-urbanist rounded-md ${
                  selected === opt
                    ? "font-semibold underline underline-offset-4"
                    : ""
                }`}
                onClick={() => selectSingle(opt)}
              >
                {opt}
              </button>
            ))}

          {type === "multi" && (
            <div className="flex flex-col gap-2 font-urbanist">
              {options.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-3 py-1  font-urbanist cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(opt)}
                    onChange={() => toggleMulti(opt)}
                    className="accent-[#E5C97A] cursor-pointer font-urbanist"
                  />
                  <span>{opt}</span>
                </label>
              ))}

              {selected.length > 0 && (
                <button
                  onClick={clearMulti}
                  className="text-md text-left hover:text-[#EED291] transition duration-600 font-urbanist cursor-pointer underline text-[#0B0B0B]"
                >
                  Clear All
                </button>
              )}
            </div>
          )}

          {type === "price" && (
            <div className="flex flex-col gap-4 font-urbanist">
              <div className="relative w-full h-10 mt-2">
                <div className="absolute inset-0 bg-[#D4D4D4] h-[6px] rounded-full top-1/2 -translate-y-1/2" />

                <div
                  className="absolute h-[6px] bg-black rounded-full top-1/2 -translate-y-1/2 font-urbanist"
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

              <div className="flex items-center justify-between font-urbanist">
                <div className="border px-3 py-1 rounded">${min}</div>
                <span>to</span>
                <div className="border px-3 py-1 rounded">${max}</div>
              </div>

              <button
                onClick={applyPrice}
                className="py-2 cursor-pointer bg-[#E5C97A] rounded-lg font-semibold"
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
