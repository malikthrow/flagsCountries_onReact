import Header from "./components/Header";
import Main from "./components/Main";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";


function App() {


  return (
    <>
      <Header/>
        <Main>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
            </Routes>
        </Main>
    </>
  );
}

export default App;
