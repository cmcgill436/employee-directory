import Header2 from "../components/Header2";
import EmployeeListItem from "../components/EmployeeListItem";

function EmployeePage(props) {
  return (
    <div className="homepage">
      <Header2 />
      <EmployeeListItem />
    </div>
  );
}

export default EmployeePage;
