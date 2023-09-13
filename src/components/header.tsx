import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>What's Weather?</h1>
      <Link to={"/"}>This Place</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to={"/search"}>Other Place</Link>
    </div>
  );
}

export default Header;
