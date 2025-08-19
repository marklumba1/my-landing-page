`use client`;
export default function Button({
  label,
  onClick,
  type = "primary",
}: {
  label: string;
  onClick?: () => void;
  type?:  string;
}) {
    const buttonTypeCss = type === `secondary` ? `bg-black text-white` : ``
  return (
    <button
      className={`border rounded-xl px-4 py-2 relative group ${buttonTypeCss}`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <span className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center  group-hover:-translate-y-full transition">
          {label}
        </span>
        <span className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center   translate-y-full  group-hover:translate-y-0 transition">
          {label}
        </span>
        <span className="opacity-0">{label}</span>
      </div>
    </button>
  );
}
