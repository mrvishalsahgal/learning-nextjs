import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { blogID } = await params;

  return {
    title: `Blog ${blogID}`,
  };
}
export default async function DynamicBlog({ params }) {
  const { blogID } = await params;
  if (!/^\d+$/.test(blogID)) {
    notFound();
  }

  return (
    <>
      <h1> Specific Blog {blogID} </h1>
      <p> ID : {blogID} </p>
    </>
  );
}
