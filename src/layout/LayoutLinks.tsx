import { Link, Outlet } from "react-router-dom";

const LayoutLink: React.FC<{}> = () => {
  return (
    <div>
      <nav>
        <Link to={"/"}>მთავარი</Link> | <Link to={"/history"}>ისტორია</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default LayoutLink;
