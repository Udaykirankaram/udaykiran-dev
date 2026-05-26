export default function SectionHeading({ subtitle, title }) {
  return (
    <div className="mb-14 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
        {subtitle}
      </p>

      <h2 className="text-3xl font-bold md:text-5xl">
        {title}
      </h2>
    </div>
  );
}