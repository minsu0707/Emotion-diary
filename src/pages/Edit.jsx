import { parsePath, useParams } from "react-router-dom";

export const Edit = () => {
  const params = useParams();

  return <div>{params.id}번 일기입니다.</div>;
};
