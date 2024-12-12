function Home() {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "98vh",
      }}
    >
      <h1
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "2rem",
          fontWeight: "bold",
          letterSpacing: "0.2rem",
          lineHeight: "1.2",
        }}
      >
        EM CONSTRUÇÃO 🚧🧑‍💻
      </h1>

      <img
        style={{
          width: "28rem",
          height: "auto",
          maxWidth: "70%",
          borderRadius: "6px",
        }}
        src="https://media.giphy.com/media/5tF8WJbiH6vf2QO481/giphy.gif"
      />
    </div>
  );
}

export default Home;
