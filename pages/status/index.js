import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  return response.json();
}

export default function StatusPage() {
  const { data, error, isLoading } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 5000,
  });

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  if (error) {
    return <h1>Erro ao carregar página de Status</h1>;
  }

  return (
    <>
      <h1>Status</h1>
      <UpdatedAt dateTime={data.updated_at} />

      <h2>Banco de Dados</h2>
      <StatusInfo
        title={"Conexões abertas"}
        info={data.dependencies.database.opened_connections}
      />

      <StatusInfo
        title={"Conexões disponíveis"}
        info={data.dependencies.database.max_connections}
      />

      <StatusInfo
        title={"Versão do PostgreSQL"}
        info={data.dependencies.database.version}
      />
    </>
  );
}

function UpdatedAt({ dateTime }) {
  const formatted = new Date(dateTime).toLocaleString("pt-BR");

  return <StatusInfo title="Última atualização" info={formatted} />;
}

function StatusInfo({ title, info }) {
  return (
    <div>
      <strong>{title}: </strong>
      <span>{info}</span>
    </div>
  );
}
