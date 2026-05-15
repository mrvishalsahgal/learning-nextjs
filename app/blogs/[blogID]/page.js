export default async function DynamicBlog({ params }) {
  const { blogID } = await params;

  return (
    <>
      <h1> Specific Blog {blogID} </h1>
      <p> ID : {blogID} </p>
    </>
  );
}
