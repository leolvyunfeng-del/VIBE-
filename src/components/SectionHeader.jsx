export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 text-sm font-semibold uppercase text-ember">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-stone-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
