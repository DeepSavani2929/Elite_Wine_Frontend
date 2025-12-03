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

  const [min, setMin] = useState(10);
  const [max, setMax] = useState(80);

  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const selectSingle = (opt: string) => {
    setSelected(opt);
    onChange(opt);
    setIsOpen(false);
  };

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
          {type === "single" &&
            options.map((opt) => (
              <button
                key={opt}
                className={`block w-full text-left py-2 hover:bg-gray-100 cursor-pointer rounded-md
                  ${
                    selected === opt
                      ? "font-semibold underline underline-offset-4 text-[#0B0B0B]"
                      : ""
                  }`}
                onClick={() => selectSingle(opt)}
              >
                {opt}
              </button>
            ))}

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
                <div className="border px-3 py-1 font-urbanist rounded">
                  ${min}
                </div>
                <span>to</span>
                <div className="border px-3 py-1 font-urbanist rounded">
                  ${max}
                </div>
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
