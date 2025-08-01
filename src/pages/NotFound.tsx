
export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0d1117",
        color: "#f0f6fc",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
          animation: "pulse 2s infinite",
        }}
      >
        🚧 404 - Not Found
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "400px" }}>
        Oops. The page you’re looking for just danced out of existence.
      </p>
      <a
        href="/"
        style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#238636",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLAnchorElement).style.backgroundColor = "#2ea043";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLAnchorElement).style.backgroundColor = "#238636";
        }}
      >
        Take Me Home
      </a>

      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}
