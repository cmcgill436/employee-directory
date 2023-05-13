import { Link } from "react-router-dom";

export const employeeArr = [
  {
    id: 1,
    img: "james.png",
    name: "James King",
    role: "President and CEO",
    officeNum: "(555)867-5309",
    mobileNum: "(555)867-5310",
    linkedin: "linkedin.com/jamesking",
    email: "james.king@reactpro.com",
  },
  {
    id: 2,
    img: "julie.jpg",
    name: "Julie Taylor",
    role: "VP of Marketing",
    officeNum: "(781)000-0002",
    mobileNum: "(617)000-0002",
    linkedin: "linkedin.com/julietaylor",
    email: "julie.taylor@reactpro.com",
  },
  {
    id: 3,
    img: "eugene.jpg",
    name: "Eugene Lee",
    role: "CFO",
    officeNum: "(281) 330-8004",
    mobileNum: "(281) 330-8005",
    linkedin: "linkedin.com/eugenelee",
    email: "eugene.lee@reactpro.com",
  },
  {
    id: 4,
    img: "john.jpg",
    name: "John Williams",
    role: "VP of Engineering",
    officeNum: "(781)777-9311",
    mobileNum: "(617)777-9312",
    linkedin: "linkedin.com/johnwilliams",
    email: "john.williams@reactpro.com",
  },
  {
    id: 5,
    img: "ray.jpg",
    name: "Ray Moore",
    role: "VP of Sales",
    officeNum: "(781)555-5555",
    mobileNum: "(617)555-5556",
    linkedin: "linkedin.com/raymoore",
    email: "ray.moore@reactpro.com",
  },
  {
    id: 6,
    img: "paul.jpg",
    name: "Paul Jones",
    role: "QA Manager",
    officeNum: "(354)489-4608",
    mobileNum: "(617)489-4618",
    linkedin: "linkedin.com/julietaylor",
    email: "paul.jones@reactpro.com",
  },
];

const employeeList = employeeArr.map((employee, index) => {
  const { name, id, img } = employee;

  return (
    <Link key={index} to={`/employee/${id}`} className="list">
      <img className="pic" src={img} alt={name} />
      <h2>{name}</h2>
    </Link>
  );
});

function EmployeeList(props) {
  return <div className="employee-list">{employeeList}</div>;
}

export default EmployeeList;
