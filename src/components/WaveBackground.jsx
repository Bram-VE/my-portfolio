import "../styles/wave-background.css";

export default function WaveBackground() {
  return (
    <div id="home" className="wave-container">
      <div className="wave-wrapper wave1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path fill="rgba(15, 26, 43, 0.9)" d="M0,50 C100,60 200,40 300,50 C400,60 500,40 600,50 C700,60 800,40 900,50 C1000,60 1100,40 1200,50 L1200,0 L0,0 Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path fill="rgba(15, 26, 43, 0.9)" d="M0,50 C100,60 200,40 300,50 C400,60 500,40 600,50 C700,60 800,40 900,50 C1000,60 1100,40 1200,50 L1200,0 L0,0 Z" />
        </svg>
      </div>
      
      <div className="wave-wrapper wave2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path fill="rgba(15, 26, 43, 0.6)" d="M0,45 C100,35 200,55 300,45 C400,35 500,55 600,45 C700,35 800,55 900,45 C1000,35 1100,55 1200,45 L1200,0 L0,0 Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path fill="rgba(15, 26, 43, 0.6)" d="M0,45 C100,35 200,55 300,45 C400,35 500,55 600,45 C700,35 800,55 900,45 C1000,35 1100,55 1200,45 L1200,0 L0,0 Z" />
        </svg>
      </div>
      
      <div className="wave-wrapper wave3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path fill="rgba(15, 26, 43, 0.3)" d="M0,48 C100,58 200,38 300,48 C400,58 500,38 600,48 C700,58 800,38 900,48 C1000,58 1100,38 1200,48 L1200,0 L0,0 Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path fill="rgba(15, 26, 43, 0.3)" d="M0,48 C100,58 200,38 300,48 C400,58 500,38 600,48 C700,58 800,38 900,48 C1000,58 1100,38 1200,48 L1200,0 L0,0 Z" />
        </svg>
      </div>
    </div>
  );
}