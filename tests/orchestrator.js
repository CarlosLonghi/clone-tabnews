import retry from "async-retry";

async function waitForAllServices() {
  await waitForWebServer();

  async function waitForWebServer() {
    return retry(fetchStatusPage, {
      retries: 100,
      maxTimeout: 2000,
      onRetry: (error, attempt) => {
        process.stdout.write(
          `Attempt ${attempt} - Message: ${error.message}\n`,
        );
      },
    });

    async function fetchStatusPage() {
      const res = await fetch("http://localhost:3000/api/v1/status");

      if (res.status !== 200) {
        throw Error();
      }
    }
  }
}

export default { waitForAllServices };
