import MenuProfile from "../Components/MenuHome";
import Video from "../Components/Video";

const Home = () => {
  const Lang = window.localStorage.getItem("Lang");

  return (
    <>
      <div></div>
      <div
        className={`flex ${
          Lang === "English" ? "flex-row" : "flex-row-reverse"
        } gap-10`}
      >
        <div>
          <MenuProfile />
        </div>
        <div>
          <Video />
        </div>
      </div>
    </>
  );
};

export default Home;
