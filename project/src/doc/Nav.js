import { NavLink } from "react-router-dom";

/*a 링크의 새로고침 현상을 제거하기 위해 사용 - 싱글페이지 이므로! */

const Nav = () => {
  return (
    <nav className="Nav">
      <ul className="container">
        {/* <li>
          { <NavLink to="/section01">main</NavLink> }
          { <a href ="/">main</a> 를 변경한것 }
          <NavLink to="/section01">main</NavLink>
        </li> */}
        <li>
          <NavLink to="/section01">Section01</NavLink>
        </li>
        <li>
          <NavLink to="/section02">Section02</NavLink>
        </li>
        <li>
          <NavLink to="/section03">Section03</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
