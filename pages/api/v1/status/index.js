import database from "infra/database.js";

async function status(req, res) {
  const updatedAt = new Date().toISOString();

  const databaseName = process.env.POSTGRES_DB;

  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;

  const databaseMaxConnectionsResult = await database.query(
    "SHOW max_connections;",
  );
  const databaseMaxConnectionsValue = parseInt(
    databaseMaxConnectionsResult.rows[0].max_connections,
  );

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  res.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        opened_connections: databaseOpenedConnectionsValue,
        max_connections: databaseMaxConnectionsValue,
        version: databaseVersionValue,
      },
    },
  });
}

export default status;
