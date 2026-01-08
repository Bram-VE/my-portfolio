import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    document.title = "Resume | Bram Van Eccelpoel";
  }, []);

  return (
    <iframe
      src="/Resume_BramVanEccelpoel.pdf"
      title="Resume"
      style={{
        width: "100%",
        height: "100vh",
        border: "none"
      }}
    />
  );
}
