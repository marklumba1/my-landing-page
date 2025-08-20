export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div
        className="absolute -z-10 top-0 right-0 bottom-0 left-0 bg-repeat bg-[length:20px_20px]"
        style={{ backgroundImage: `url(/dots.svg)` }}
      >
        <div className="bg-gradient-to-t from-transparent to-white absolute top-0 bottom-0 w-full" />
        <div className="bg-gradient-to-b from-transparent to-white absolute top-0 bottom-0 w-full" />
      </div>
      {children}
    </div>
  );
}
