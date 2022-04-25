import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();
  //extracting the dynamic path segment data
  const dynamicPathSegmentData = router.query;
  console.log(dynamicPathSegmentData);
  return (
    <main>
      <h1>The Portfolio Project Page</h1>
    </main>
  );
}

export default PortfolioProjectPage;
