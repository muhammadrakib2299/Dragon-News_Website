import { useLoaderData } from "react-router-dom";
import NewCard from "../NewCard";

function MainLayout() {
  const data = useLoaderData() ?? [];

  return (
    <div>
      {data.map((news) => (
        <NewCard key={news._id} news={news}></NewCard>
      ))}
    </div>
  );
}

export default MainLayout;
