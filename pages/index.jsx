function Home() {
  return (
    <div
      style={{
        display: "flex",
        gap: "2.5rem",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "98vh",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{ borderRadius: "50%", width: "12rem", height: "auto" }}
          src="https://github.com/CarlosLonghi.png"
          alt="Foto de perfil"
        />

        <h1
          style={{
            fontSize: "1.8rem",
            lineHeight: "1.1",
            textAlign: "center",
            margin: "0",
          }}
        >
          🚧 EM CONSTRUÇÃO 🚧
        </h1>
      </div>

      <img
        style={{
          width: "10rem",
          height: "auto",
          maxWidth: "60%",
          borderRadius: "8px",
        }}
        src="https://media.giphy.com/media/5tF8WJbiH6vf2QO481/giphy.gif"
      />

      <span
        style={{
          fontSize: "1.2rem",
          letterSpacing: "1px",
          lineHeight: "1.1",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Volte mais tarde 👋😁
      </span>

      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          display: "flex",
          gap: "2rem",
        }}
      >
        <a
          href="https://www.linkedin.com/in/carloslonghi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link para meu LinkedIn"
        >
          <img
            src="https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
            alt="Logo do LinkedIn"
          />
        </a>

        <a
          href="https://github.com/CarlosLonghi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link para meu GitHub"
        >
          <img
            src="https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white"
            alt="Logo do GitHub"
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
