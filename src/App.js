import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./Layout/Main/Main";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Page1 from "./Pages/Page1/Page1";
import Page2 from "./Pages/Page2/Page2";
import Page3 from "./Pages/Page3/Page3";
import Page4 from "./Pages/Page4/Page4";

function App() {
  return (
    <div className={`app`}>
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
