import { BrowserRouter, Route, Routes} from "react-router";
import Home from "./components/Pages";
import Books from "./components/Pages/books";
import Login from "./components/Pages/auth/login";
import Register from "./components/Pages/auth/register";
import Teams from "./components/Pages/teams";
import Contact from "./components/Pages/contact";



function App() {
  return ( 
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="teams" element={<Teams />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </> 
  );
}

export default App
