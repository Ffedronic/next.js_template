import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <main>
      <h1>The Projects Page of a Given CLient</h1>
    </main>
  );
}

export default ClientProjectsPage;
