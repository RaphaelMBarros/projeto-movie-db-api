import { useState } from 'react'
import Header from "./components/Header/Header";
import { Routes, Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MovieDetail from './pages/MovieDetail/MovieDetail';


function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App" style={{backgroundColor: "#303030"}}>
      <Header onSubmit={(inputValue) => setSearchValue(inputValue)}/>
      <Routes>
        <Route path="/" element={<Home searchValueProp = {searchValue}/>} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  )
}

export default App

