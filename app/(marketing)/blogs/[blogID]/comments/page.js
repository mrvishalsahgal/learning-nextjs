export default async function CommentsPage({ params }) {
  const { blogID } = await params;
  return (
    <>
      <h2>Comments</h2>
      <p> Blog ID: {blogID} </p>
    </>
  );
}
