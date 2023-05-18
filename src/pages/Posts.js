import { useParams } from "react-router-dom";

export default function Posts() {
  const { id } = useParams();
  return <h1>This is post #{id}</h1>;
}
