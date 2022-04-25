import { useRouter } from "next/router";

function ClientProjectIdPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <main>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
    </main>
  );
}

export default ClientProjectIdPage;
