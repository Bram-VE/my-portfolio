export default function Design() {
  return (
    <main>
      {/* Title */}
      <section>
        <h1>Design System Preview</h1>
        <p>
          This page showcases backgrounds, typography, accents, and shadows used
          throughout the portfolio.
        </p>
      </section>

      {/* Background layers */}
      <section>
        <h2>Background layers</h2>

        <div
          style={{
            display: "grid",
            gap: "var(--space-md)",
            marginTop: "var(--space-md)",
          }}
        >
          <div
            style={{
              background: "var(--bg-dark)",
              padding: "var(--space-lg)",
              borderRadius: "var(--radius-md)",
              color: "var(--text-main)",
            }}
          >
            bg-dark
          </div>

          <div
            style={{
              background: "var(--bg)",
              padding: "var(--space-lg)",
              borderRadius: "var(--radius-md)",
              color: "var(--text-main)",
            }}
          >
            bg
          </div>

          <div
            style={{
              background: "var(--bg-light)",
              padding: "var(--space-lg)",
              borderRadius: "var(--radius-md)",
              color: "var(--text-main)",
            }}
          >
            bg-light
          </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2>Typography</h2>

        <h1 style={{ fontSize: "var(--text-xxl)" }}>Heading XXL</h1>
        <h2 style={{ fontSize: "var(--text-xl)" }}>Heading XL</h2>
        <p style={{ fontSize: "var(--text-md)", color: "var(--text-main)" }}>
          Body text (md) – clean and readable for portfolio content.
        </p>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
          Muted small text for descriptions.
        </p>
      </section>

      {/* Buttons */}
      <section>
        <h2>Buttons & Accent</h2>

        <div
          style={{
            display: "flex",
            gap: "var(--space-md)",
            marginTop: "var(--space-md)",
          }}
        >
          <button
            style={{
              background: "var(--accent)",
              color: "var(--text-main)",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "var(--radius-md)",
              cursor: "pointer",
              boxShadow: "var(--shadow-sm)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-md)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-sm)")}
          >
            Primary Button
          </button>

          <button
            style={{
              background: "transparent",
              color: "var(--accent)",
              border: "1px solid var(--border-strong)",
              padding: "0.75rem 1.5rem",
              borderRadius: "var(--radius-md)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-highlight)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent)")}
          >
            Secondary
          </button>
        </div>
      </section>

      {/* Shadows */}
      <section>
        <h2>Shadow system</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "var(--space-lg)",
            marginTop: "var(--space-md)",
          }}
        >
          <div style={cardStyle("var(--shadow-xs)")}>shadow-xs</div>
          <div style={cardStyle("var(--shadow-sm)")}>shadow-sm</div>
          <div style={cardStyle("var(--shadow-md)")}>shadow-md</div>
          <div style={cardStyle("var(--shadow-lg)")}>shadow-lg</div>
          <div style={cardStyle("var(--shadow-glow)")}>shadow-glow</div>
        </div>
      </section>

      {/* Elevation demo */}
      <section>
        <h2>Hover elevation</h2>

        <div
          style={{
            marginTop: "var(--space-md)",
            background: "var(--bg-light)",
            padding: "var(--space-lg)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-sm)",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "var(--shadow-md)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "var(--shadow-sm)";
          }}
        >
          Hover me — this simulates card elevation
        </div>
      </section>
    </main>
  );
}

/* Helper */
function cardStyle(shadow) {
  return {
    background: "var(--bg-light)",
    padding: "var(--space-lg)",
    borderRadius: "var(--radius-lg)",
    boxShadow: shadow,
    border: "1px solid var(--border-subtle)",
    textAlign: "center",
    color: "var(--text-main)",
  };
}
