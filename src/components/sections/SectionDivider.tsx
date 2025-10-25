const SectionDivider = () => {
  return (
    <div className="relative h-20">
      <div
        className="absolute inset-0 bg-accent"
        style={{
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
        }}
      />
    </div>
  );
};

export default SectionDivider;
