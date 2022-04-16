import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <h1 className="text-2xl font-bold text-blue-500 ">Dashboard Page</h1>
      <Link to={"/profile"} className="text-blue-600 underline ">
        Go to Profile
      </Link>
    </div>
  );
};

export default Dashboard;
