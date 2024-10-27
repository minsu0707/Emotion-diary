import { useSearchParams } from "react-router-dom";

export const Home = () => {
  const [params, setParams] = useSearchParams();

  return <div>Home</div>;
};
