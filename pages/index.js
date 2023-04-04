import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
const apiURL = "https://example-apis.vercel.app/api/art";
export default function HomePage() {
  const { data, error, isLoading } = useSWR(apiURL);
  const pieces = data;
  if (error) return <div>Could not Load</div>;
  if (isLoading) return <div>Loading..., wait.</div>;
  console.log(data);
  return <ArtPieces pieces={pieces} />;
}
