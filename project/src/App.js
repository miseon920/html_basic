import Section01 from "./doc/Section01";
import Section02 from "./doc/Section02";
import Section03 from "./doc/Section03";
import Section04 from "./doc/Section04";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./doc/Nav";

const App = () => {
  return (
    // <i className="xi-bars mainColor"></i>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Section01 />} />
        <Route path="/section01" element={<Section01 />} />
        <Route path="/section02" element={<Section02 />} />
        <Route path="/section03" element={<Section03 />} />
        <Route path="/section04" element={<Section04 />} />
        {/* element은 연결시킬려고 하는 컴포넌트 이름, path는 원하는 url 주소로 작성 */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
