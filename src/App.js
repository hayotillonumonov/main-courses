import "./App.css";
import Titile from "./Component/Titile";
import MainCoursesItem from "./Component/MainCoursesItem";

function App() {
  return (
    <div className="container">
      <div className="main-courses">
        <Titile title="Bizning zamonaviy " titleSpan="kurslarimiz" />
        <MainCoursesItem />
      </div>
    </div>
  );
}

export default App;
