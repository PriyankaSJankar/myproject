import React from 'react';
import { useState } from 'react';


 function Crud()
//  export default function Crud()
  {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[address,setAddress]=useState("");
  const[users,setUsers]=useState([]);
  const[edit,setEdit]=useState(false); 
  const[active,setActive]=useState([]);  

  const addUser =(e)=>{
    e.preventDefault();

    const user={
      name,
      email,
      address,    
    };

    // update true and false 
    if(edit)
    {
      let copy= users;
      Object.assign(copy[active],user)
      setUsers([...copy])

    }
    else{
      setUsers([...users,user]);

    }
    setName("")
    setEmail("")
    setAddress("")
  };

  // edit 
  const onEditClick =(index)=>
  {
    const user=users[index];
    setName(user.name);
    setEmail(user.email);
    setAddress(user.address);
    setEdit(true);
    setActive(index);
  }

  const ondeleteClick = (user)=>{
    if(window.confirm("are u want to delete"))
    {
    let copy=users.filter((item)=>item!== user);
    setUsers([...copy]);
  }

  };


  return (
    <div className="new" >
      <h1>crud application </h1>
      <div className="cantainer" >
          <div className="row">
             <div className="col">
              <form onSubmit={addUser}>
                <div className="formgroup">
                 <label for ="">Name:</label>
                 <input type="text" className="form1 " value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>


                <div className="formgroup">
                 <label   for ="">Email:</label>
                 <input type="email" className="form1" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>


                <div className="formgroup">
                 <label for ="">Address</label>
                 <input type="text" className="form1" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                </div>

               <button  classname="btn">{edit?"update":"add"}</button>
              </form>
             </div>
          </div>
      </div>
      <table class="table11" border="3px" height="50px" width="900px">
               
                 <th>Name </th>
                 <th>Email </th>
                 <th>Adreess </th>
                 <th>Edit  </th>
                 <th>Delete </th>
              
            <tbody >
               {
                users.map((user,index)=>{
                  return(
                    <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>
                      <button classname="btn" onClick={()=>onEditClick(index)}>edit</button>
                    </td>
                    <td>
                      <button classname="btn1" onClick={()=>ondeleteClick(user)}>delete</button>
                    </td>

                  </tr>
                    )
                })
               }
            </tbody>
      </table>
    </div>
  );
            }

export default Crud;