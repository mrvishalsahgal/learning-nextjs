export default async function CatchAllRoute({ params }) {
  const { filePath } = await params;
  console.log(filePath);

  return (
    <>
      <h2>File Not Found</h2>
      <p>File path: {filePath.join("/")}</p>
    </>
  );
}
