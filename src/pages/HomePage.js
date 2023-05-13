import Header from "../components/Header";
import EmployeeList from "../components/EmployeeList";
import SearchBar from "../components/SeachBar";

function HomePage(props) {
  return (
    <div className="homepage">
      <Header />
      <SearchBar />
      <br />
      <EmployeeList />
    </div>
  );
}

export default HomePage;
