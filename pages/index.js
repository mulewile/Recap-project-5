import useSWR from "swr";
const apiURL = "https://example-apis.vercel.app/api/art";
export default function HomePage() {
  const { data, error, isLoading } = useSWR(apiURL);
  if (error) return <div>Could not Load</div>;
  if (isLoading) return <div>Loading..., wait.</div>;
  console.log(data[0]);
  return (
    <div>
      <h1>Welcome to the Art Gallery</h1>
    </div>
  );
}
