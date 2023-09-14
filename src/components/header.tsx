import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [path, setPath] = useState(true);

  useEffect(() => {
    if (window.location.pathname === "/search") {
      setPath(false);
    } else {
      setPath(true);
    }
  }, [path]);

  return (
    <div className="header">
      <h1>What's Weather?</h1>
      <div className="navi">
        <Link to={"/"} id={path ? "active" : ""} onClick={() => setPath(true)}>
          현재 지역
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link
          to={"/search"}
          id={!path ? "active" : ""}
          onClick={() => setPath(false)}
        >
          다른 지역
        </Link>
      </div>
    </div>
  );
}

export default Header;
