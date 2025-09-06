import { useLoaderData } from "react-router-dom";

function MainLayout() {
  const data = useLoaderData() ?? []; // default to empty array

  return (
    <div>
      {data.length === 0
        ? ""
        : data.map((news) => (
            <div className="flex flex-col">
              <p key={news._id}>{news.title}</p>
              <br />
            </div>
          ))}
    </div>
  );
}

export default MainLayout;
