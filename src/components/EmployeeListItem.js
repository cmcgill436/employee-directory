import { employeeArr } from "./EmployeeList";
import { useParams } from "react-router-dom";

export default function EmployeeListItem(props) {
  const { id } = useParams();

  // console.log(employeeArr, "I am here");

  const result = employeeArr.find(
    (employee, index) => index === parseInt(id - 1)
  );
  // console.log(result.img);
  // console.log(typeof result.img);

  // Check if `result` exists
  if (!result) {
    return <div>Employee not found</div>;
  }

  return (
    <div className="employees">
      <div>
        <img className="empPic" src={`/${result.img}`} alt={result.name} />
        <div>
          <h2>{result.name}</h2>
          <h3> {result.role}</h3>
        </div>
      </div>
      <h3>
        Call Office: <br /> {result.officeNum}
      </h3>
      <h3>Call Mobile: {result.mobileNum}</h3>
      <h3>LinkedIn: {result.linkedin}</h3>
      <h3>Email: {result.email}</h3>
    </div>
  );
}
