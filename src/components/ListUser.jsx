import { useEffect, useState } from "react";
import baseUrl from "../uri/url";
import axios from "axios";

const ListUser = () => {
const [users, setusers] = useState([])
    
    function getUsers(){
        axios.get(`${baseUrl}/api/save`).then(function(response){
            setusers(response.data)
        })
       
    }

    useEffect(() => {
        getUsers();
        
        }, [])

        console.log(users)

  return (
   <section className="px-4 py-3">
<table className="table bg-slate-800 text-white">
  <thead>
    <tr className="bg-slate-600">
      <th className="px-4 py-2">#</th>
      <th className="px-4 py-2">Name</th>
      <th className="px-4 py-2">Email</th>
      <th className="px-4 py-2">Mobile</th>
      <th className="px-4 py-2">Created At</th>
      <th className="px-4 py-2">Action</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user =>(
         <tr key={user.id}>
          <td className="border px-4 py-2">{user.id}</td>
         <td className="border px-4 py-2">{user.username}</td>
         <td className="border px-4 py-2">{user.email}</td>
         <td className="border px-4 py-2">{user.mobile}</td>
         <td className="border px-4 py-2">{user.create_at}</td>
         <td className="border px-4 py-2">
   <div className="px-2 flex flex-wrap">
   
   </div>
         </td>
         </tr>
    ))}
   
  </tbody>
</table>
   </section>
  );
};

export default ListUser;
