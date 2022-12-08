import Input from "../../components/Input/Input";
import ContextBar from "../../components/ContextBar/ContextBar";

const Home = () => {
  return (
    <div className="text-txt-white w-10/12 lg:w-8/12 xl:w-1/2">
      <ContextBar text={"Home"} />
      <div>
        <Input />
      </div>
    </div>
  );
};

export default Home;
