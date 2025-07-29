export default async function Page({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  return (
    <div>
      <h1>Page {projectId}</h1>
    </div>
  );
}
