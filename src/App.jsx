import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Submit from "./components/Submit";
import Contest from "./components/Contest";
import Edit from "./components/Edit";
// import PrivateRoutes from "./Components/PrivateRoute";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route component={Home} element={<Home />} path="/" exact /> */}
        <Route element={<Home />} path="/" exact />
        <Route element={<Submit />} path="/submit" exact />
        <Route element={<Edit />} path="/edit/:id" exact />
        <Route element={<Contest />} path="/contest/:id" />
        {/* <Route element={<PrivateRoutes />}>
          <Route element={<UserDashboard />} path="/profile" exact />

          <Route path="/event/:id" element={<SingleEvent />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
