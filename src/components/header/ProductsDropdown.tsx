export const ProductsDropdown = () => {
  return (
    <div className="relative invisible md:visible">
      <a
        href="/products"
        className="relative flex items-center h-full px-3 py-2 rounded-lg font-roboto_mono hover:bg-white/20 transition-colors"
      >
        <span className="text-xs font-medium tracking-[0.25px] uppercase md:text-white md:font-normal">
          Products
        </span>
      </a>
    </div>
  );
};
