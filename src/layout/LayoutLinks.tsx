import { Link, Outlet } from "react-router-dom";

const LayoutLink: React.FC<{}> = () => {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/user"}>Users</Link>
        <Link to={"/album"}>Album</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default LayoutLink;
