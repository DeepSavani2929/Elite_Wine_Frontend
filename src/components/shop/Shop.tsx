import React, { useState, useMemo, useEffect } from "react";
import { X, Filter, Plus, Minus } from "lucide-react";
import ProductsChild from "../products/productsChild";
import FilterDropdown from "../ui/FilterDropDown";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

interface Product {
  type: string;
  productImg: string;
  productName: string;
  variety: string;
  varietylogo: string;
  price: string;
  medal?: string;
  flavour: string;
  size: string;
  inStock: boolean;
  categoryType: string;
}

const Shop: React.FC = () => {
  const [filters, setFilters] = useState({
    size: [] as string[],
    price: { min: 0, max: 100 },
    grape: [] as string[],
    all: [] as string[],
    availability: [] as string[],
    sortBy: "Alphabetically Z-A",
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const itemsPerPageOptions = [6, 10, 20, 30, 100];
  const [limit, setLimit] = useState(itemsPerPageOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  const [errorMessage, setErrorMessage] = useState("");

  const fetchFilteredProducts = async () => {
    try {
      const sizeStr = filters.size.length ? filters.size.join(",") : "";
      const categoryStr = filters.all.length ? filters.all.join(",") : "";
      const grapeStr = filters.grape.length ? filters.grape.join(",") : "";
      const availability = filters.availability.length
        ? filters.availability.join(",")
        : "";

      const queryParams = new URLSearchParams({
        size: sizeStr,
        grape: grapeStr,
        minPrice: filters.price.min.toString(),
        maxPrice: filters.price.max.toString(),
        availability,
        categoryType: categoryStr,
        sortBy: filters.sortBy,
        page: currentPage.toString(),
        limit: limit.toString(),
      });

      const url = `${
        import.meta.env.VITE_API_URL
      }/products/getFilteredProducts?${queryParams.toString()}`;
      const res = await axios.get(url);

      if (res.data.success) {
        const products = res.data.data;
        setFilteredProducts(products);
        setTotalItems(res.data.total);

        if (products.length === 0) {
          if (filters.availability.includes("Out Of Stock")) {
            setErrorMessage("No out-of-stock products found.");
          } else if (filters.availability.includes("In Stock")) {
            setErrorMessage("No in-stock products available.");
          } else {
            setErrorMessage("No products found for the selected filters.");
          }
        } else {
          setErrorMessage("");
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      console.error("FILTER API FAILED:", error);
    }
  };

  useEffect(() => {
    fetchFilteredProducts();
  }, [filters, limit, currentPage]);

  const totalPages = Math.ceil(totalItems / limit);
  const currentProducts = filteredProducts;

  const shopDetails = useSelector((state: any) => state.cart.productsDetails);

  const handleOpenSidebar = () => {
    if (typeof window !== "undefined" && window.innerWidth > 1024) return;
    setSidebarOpen(true);
  };

  const sizeOptions = ["Small", "Medium", "Large", "Extra Large"];
  const grapeOptions = [
    "Merlot",
    "Pinot Noir",
    "Sauvignon Blanc",
    "Riesling",
    "Rosé",
    "Gewurztraminer",
    "Rouge Pur",
    "Pinot Grigio",
  ];
  const availabilityOptions = ["In Stock", "Out Of Stock"];
  const allOptions = ["Featured", "Popular", "New Arrivals"];
  const sortByOptions = [
    "Best Sellers",
    "Featured",
    "Alphabetically A-Z",
    "Alphabetically Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, old to new",
    "Date, new to old",
  ];

  const handleFilterChange = (name: string, value: any) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const removeChip = (type: string, value: string) => {
    if (type === "size") {
      setFilters((prev) => ({
        ...prev,
        size: prev.size.filter((x) => x !== value),
      }));
    } else if (type === "price") {
      setFilters((prev) => ({ ...prev, price: { min: 0, max: 100 } }));
    } else if (type === "grape") {
      setFilters((prev) => ({
        ...prev,
        grape: prev.grape.filter((g) => g !== value),
      }));
    } else if (type === "availability") {
      setFilters((prev) => ({
        ...prev,
        availability: prev.availability.filter((a) => a !== value),
      }));
    } else if (type === "all") {
      setFilters((prev) => ({
        ...prev,
        all: prev.all.filter((x) => x !== value),
      }));
    }
  };

  const Accordion = ({ title, children }: { title: string; children: any }) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="border-b border-gray-300 pb-3">
        <button
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center w-full text-left py-3 font-urbanist font-semibold text-lg"
        >
          <span>{title}</span>
          {open ? (
            <Minus size={20} className="text-[#0B0B0B]" />
          ) : (
            <Plus size={20} className="text-[#0B0B0B]" />
          )}
        </button>

        {open && <div className="pl-2 pb-2">{children}</div>}
      </div>
    );
  };

  const clearAll = () => {
    setFilters({
      size: [],
      price: { min: 0, max: 100 },
      grape: [],
      all: [],
      availability: [],
      sortBy: "Best Sellers",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Chip = ({ label, onRemove }: any) => (
    <div className="bg-[#EED291] text-[#0B0B0B] px-3 py-1 rounded-md flex items-center gap-2 font-urbanist text-sm">
      {label}
      <button onClick={onRemove}>
        <X size={16} />
      </button>
    </div>
  );

  return (
    <>
      <div className="bg-[url('/images/productDetailsImg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center ">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-38 md:mt-45 lg:mt-50 xl:mt-60 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-white">
            Home <span className="font-Poppins me-1 ms-1">&gt; </span>Shop
          </p>
          <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
            Products
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="w-[95%] mx-auto pt-[55px] xl:pt-[100px]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6">
            <div className="flex items-center flex-wrap gap-3">
              <button
                onClick={handleOpenSidebar}
                className="flex items-center gap-2 w-[60px] h-[40px] rounded-lg font-urbanist font-semibold text-sm text-[#0B0B0B]"
              >
                <Filter size={18} />
                <span>Filter</span>
              </button>

              <div className="hidden xl:flex items-center gap-3">
                <div className="w-[150px]">
                  <FilterDropdown
                    type="multi"
                    label="Size"
                    value={filters.size}
                    options={sizeOptions}
                    onChange={(v) => handleFilterChange("size", v)}
                  />
                </div>

                <div className="w-[200px]">
                  <FilterDropdown
                    type="price"
                    value={filters.price}
                    label="Price"
                    onChange={(v) => handleFilterChange("price", v)}
                  />
                </div>

                <div className="w-[240px]">
                  <FilterDropdown
                    type="multi"
                    label="All"
                    value={filters.all}
                    options={allOptions}
                    onChange={(v) => handleFilterChange("all", v)}
                  />
                </div>

                <div className="w-[200px]">
                  <FilterDropdown
                    type="multi"
                    label="Grape"
                    value={filters.grape}
                    options={grapeOptions}
                    onChange={(v) => handleFilterChange("grape", v)}
                  />
                </div>

                <div className="w-[200px]">
                  <FilterDropdown
                    type="multi"
                    label="Availability"
                    value={filters.availability}
                    options={availabilityOptions}
                    onChange={(v) => handleFilterChange("availability", v)}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="font-urbanist font-semibold text-sm md:text-base text-[#0B0B0B]">
                Sort By:
              </span>
              <div className="w-[180px]">
                <FilterDropdown
                  type="single"
                  value={filters.sortBy}
                  label={filters.sortBy}
                  options={sortByOptions}
                  onChange={(v) => handleFilterChange("sortBy", v)}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {(filters.size.length > 0 ||
              filters.price.min !== 0 ||
              filters.price.max !== 100 ||
              filters.grape.length > 0 ||
              filters.availability.length > 0 ||
              filters.all.length > 0) && (
              <button
                onClick={clearAll}
                className="text-[#0B0B0B] cursor-pointer hover:text-[#EED291] transition duration-600 underline font-urbanist text-sm"
              >
                Clear All
              </button>
            )}

            {filters.size.map((s) => (
              <Chip key={s} label={s} onRemove={() => removeChip("size", s)} />
            ))}

            {(filters.price.min !== 0 || filters.price.max !== 100) && (
              <Chip
                label={`$${filters.price.min} - $${filters.price.max}`}
                onRemove={() => removeChip("price", "")}
              />
            )}

            {filters.grape.map((g) => (
              <Chip key={g} label={g} onRemove={() => removeChip("grape", g)} />
            ))}

            {filters.availability.map((a) => (
              <Chip
                key={a}
                label={a}
                onRemove={() => removeChip("availability", a)}
              />
            ))}

            {filters.all.map((c) => (
              <Chip key={c} label={c} onRemove={() => removeChip("all", c)} />
            ))}
          </div>
        </div>

        {errorMessage && (
          <div className="w-[95%] xl:w-[80%] mx-auto mt-6 text-center text-red-600 font-urbanist font-semibold text-lg">
            {errorMessage}
          </div>
        )}

        <div className="w-[95%] xl:w-[80%] pb-[55px] xl:pb-[100px] mx-auto grid gap-8 grid-cols-2 md:grid-cols-3 mt-10">
          {!errorMessage &&
            currentProducts.map((product, index) => (
              <ProductsChild key={index} product={product} />
            ))}
        </div>

        {!errorMessage && (
          <div className="w-full flex gap-y-4 flex-col md:flex-row justify-between items-center px-6 pb-12">
            <div className="flex items-center gap-2 mt-4 md:mt-0 font-urbanist">
              <p className="text-sm">Showing</p>

              <select
                value={limit}
                onChange={(e) => {
                  setLimit(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border border-[#E5C97A] rounded-lg px-2 py-1 text-sm"
              >
                {itemsPerPageOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <p className="text-sm">
                of <span className="font-semibold">{totalItems}</span> entries
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border cursor-pointer font-urbanist border-[#E5C97A] rounded disabled:opacity-50"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                return (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`px-4 py-2 rounded font-urbanist cursor-pointer text-sm ${
                      currentPage === p
                        ? "bg-[#EED291]"
                        : "bg-white border border-[#EED291]"
                    }`}
                  >
                    {p}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border cursor-pointer font-urbanist border-[#EED291] rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;
