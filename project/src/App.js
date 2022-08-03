import Section01 from "./doc/Section01";
import Section02 from "./doc/Section02";

const App = () => {
  return (
    // <i className="xi-bars mainColor"></i>
    <>
      <nav>
        <ul>
          <li>
            <a href="">Section01</a>
          </li>
          <li>
            <a href="">Section02</a>
          </li>
        </ul>
      </nav>
      <Section01 />
      <Section02 />
    </>
  );
};

export default App;
