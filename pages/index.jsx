import Image from "next/image";

function Home() {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "98vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 0.5rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "1.5rem",
          maxWidth: "400px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src="https://github.com/CarlosLonghi.png"
          alt="Foto de perfil"
          style={{
            borderRadius: "50%",
            width: "120px",
            height: "120px",
            objectFit: "cover",
            marginBottom: "1rem",
          }}
        />

        <h1
          style={{
            fontSize: "1.8rem",
            margin: "0 0 1rem 0",
          }}
        >
          Carlos Longhi
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.4",
            marginBottom: "0rem",
            color: "#333",
          }}
        >
          <strong>Desenvolvedor Full Stack</strong> graduado em Análise e
          Desenvolvimento de Sistemas, com mais de <strong>2 anos</strong> de
          experiência prática no desenvolvimento de aplicações web escaláveis e
          integrações complexas.
        </p>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.4",
            marginBottom: "2rem",
            color: "#333",
          }}
        >
          Possuo experiência no desenvolvimento Back-end utilizando{" "}
          <strong>Laravel</strong> e <strong>Node.js</strong>, e no Front-end
          desenvolvendo interfaces responsivas com <strong>Next.js</strong> e{" "}
          <strong>TailwindCSS</strong>.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <a
            href="https://www.linkedin.com/in/carloslonghi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link para meu LinkedIn"
            style={{ textDecoration: "none" }}
          >
            <Image
              src="https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="Logo do LinkedIn"
              style={{ height: "40px" }}
            />
          </a>

          <a
            href="https://github.com/CarlosLonghi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link para meu GitHub"
            style={{ textDecoration: "none" }}
          >
            <Image
              src="https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white"
              alt="Logo do GitHub"
              style={{ height: "40px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
