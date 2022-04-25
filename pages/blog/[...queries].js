import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <main>
      <h1>The Blog Posts Page</h1>
    </main>
  );
}

export default BlogPostsPage;
