type ShapeDividerProps = {
  variant?: "bottom-1741054392" | "bottom-1741052430" | "bottom-1741057438";
  className?: string;
};

export default function ShapeDivider({
  variant = "bottom-1741052430",
  className = "",
}: ShapeDividerProps) {
  const variants = {
    "bottom-1741054392": {
      svg: (
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            className="shape-fill"
          />
        </svg>
      ),
      containerClass: "custom-shape-divider-bottom-1741054392",
    },
    "bottom-1741052430": {
      svg: (
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="shape-fill"
          />
        </svg>
      ),
      containerClass: "custom-shape-divider-bottom-1741052430",
    },
    "bottom-1741057438": {
      svg: (
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          />
        </svg>
      ),
      containerClass: "custom-shape-divider-bottom-1741057438",
    },
  };

  const selected = variants[variant];

  return (
    <div className={`${selected.containerClass} ${className}`}>
      {selected.svg}
    </div>
  );
}

