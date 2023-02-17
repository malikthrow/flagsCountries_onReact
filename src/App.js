import Header from "./components/Header";
import Main from "./components/Main";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Fullstory from "./pages/Fullstory";
import {useState} from "react";



function App() {
  const [countries,setCountries] = useState([])

  return (
    <>
      <Header/>
        <Main>
            <Routes>
                <Route path={'/'} element={<HomePage countries={countries} setCountries={setCountries}/>}/>
                <Route path={'/country/:name'} element={<Fullstory/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </Main>
    </>
  );
}

export default App;
