export default function ImageBlock({ src, alt, className = "" }) {
  return (
    <figure className={`overflow-hidden bg-stone-100 ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </figure>
  );
}
