import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListUser from "./components/ListUser";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
const App = () => {
  return (
    <div className="bg-slate-700 h-screen">
<Router>
<header className="text-gray-600 body-font">
    <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center px-4 py-3 bg-slate-300">
      <Link to="/" className="mr-5 bg-slate-700 text-white px-3 py-1 rounded-md shadow-md hover:text-gray-200">List User</Link>
      <Link to="user/create" className="mr-5 bg-slate-700 text-white px-3 py-1 rounded-md shadow-md hover:text-gray-200">Create User</Link>
     
    </nav>
  
</header>
  <Routes>
    <Route path="/" element={<ListUser />} />
    <Route path="user/create" element={<CreateUser />} />
    <Route path="user/:id/edit" element={<EditUser />} />
  </Routes>
</Router>



    </div>
  )
}

export default App