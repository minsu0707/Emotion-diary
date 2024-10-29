import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { DiaryList } from "../components/DiaryList";

export const Home = () => {
  return (
    <div>
      <Header
        title={"2024년 10월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DiaryList />
    </div>
  );
};
