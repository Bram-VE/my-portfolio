import "../styles/glow-image.css";

export default function GlowImage({ src, alt }) {
  return (
    <div className="glow-image">
      <img src={src} alt={alt} />
    </div>
  );
}
