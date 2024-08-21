import React, { useEffect, useState } from "react";
import "./admin.css";
import Menu from "../../assets/ba.svg";
import Avatar from "../../assets/circle-user-solid.svg";
import Card from "../../assets/credit-card-solid.svg";
import Notification from "../../assets/bell-solid.svg";
import Help from "../../assets/circle-info-solid.svg";
import Sale from "../../assets/money-bill-trend-up-solid.svg";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import Chart from "../../assets/chart-simple-solid.svg"
import Chart1 from "../../assets/chart1.svg"
import Chart2 from "../../assets/chart2.svg"
import Chart3 from "../../assets/chart3.svg"
import DeleteIcon from '../../assets/trash-solid.svg'
import Order from '../../assets/order.svg'
import Money from "../../assets/sack-dollar-solid.svg"
import { collection, getDocs,doc,deleteDoc } from "firebase/firestore";
import { db } from "../../components/firebase";
const admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const userList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
  }, []);
  const removeUser = async (id) => {
    const userToBeRemoved = users.find(user => user.id === id);

    // Check if the user is not an admin before deleting
    if (userToBeRemoved.role !== 'admin') {
      const userDoc = doc(db, 'users', id); // Adjust 'users' to your collection name
      await deleteDoc(userDoc);
      setUsers(users.filter(user => user.id !== id));
    } else {
      alert("The admin user cannot be removed.");
    }
  };
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="admin">
      <div className="adminNav" style={{ paddingLeft: menuToggle ? "0px" : "30px" }} >
        <div className="optionSlider" style={{ width: menuToggle ? "20%" : "0%",display:menuToggle ? "flex" : "none" }} ></div>
        <div className="adminSearch">
          <img src={Menu} alt="" onClick={()=> setMenuToggle(!menuToggle)} />
          <div className="adminInput">
            
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="adminIcons">
         
          <img src={Help} alt="" />
          <img src={Card} alt="" />
          <img src={Notification} alt="" />

          <img src={Avatar} alt="" />
        </div>
      </div>
<div className="adminMain">
    <div className="toggle" style={{ width: menuToggle ? "19.65%" : "0%",display:menuToggle ? "flex" : "none" }}>
        <h1>Toggle Sidebar</h1>
       
  
    </div>
    <div className="adminContent" style={{ width: menuToggle ? "81%" : "100%" }}>
        <div className="stats">


   <div className="stat">
<div class="page" style={{backgroundColor:"#D1E0F9"}}><img src={Sale} width={32} height={32} alt="" /></div>
  <h1> Sales</h1> 
 <div className="numbers " style={{color:"#4174DB"}}> <p>+10% Increase</p> <img src={Chart} alt="" /></div>
   </div>
   <div className="stat">
<div class="page" style={{backgroundColor:"#FFCCCC"}}><img src={Order} width={32} height={32} alt="" /></div>
  <h1>Pending Orders</h1> 
 <div className="numbers" style={{color:"#FF0000"}}> <p>-2% Decrease</p> <img src={Chart2} alt="" /></div>
   </div>
   <div className="stat">
<div class="page" style={{backgroundColor:"#CCFFCC"}}><img src={Money} alt="" width={32} height={32} /></div>
  <h1>Profit</h1> 
 <div className="numbers" style={{color:"#006400"}}> <p>+25% Increase</p> <img src={Chart3} alt="" /></div>
   </div>
   <div className="stat">
<div class="page"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M3.5 18V7c0-4 1-5 5-5h7c4 0 5 1 5 5v10c0 .14 0 .28-.01.42" stroke="#de7700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.35 15H20.5v3.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15ZM8 7h8M8 10.5h5" stroke="#de7700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
  <h1>Page Views</h1> 
 <div className="numbers" style={{color:'#de7700'}}> <p>+406 Views</p> <img src={Chart1} alt="" /></div>
   
   
   
   
   </div>


        </div>
        <div className="userBoard">
            <div className="insights">
                <div className="leftins">
                    <h1>User Board</h1>
                    <p> <b>Total 3  Users</b> Visited Today</p>
                </div>
                <div className="rightins">
                <h1>{users.length} </h1>
                <p> Registered</p>
                </div>
            </div>
            <div className="table">
                <table>
                          <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role || "User"}</td>
              <td>
                <img src={DeleteIcon} style={{ width: "35px", height: "35px",cursor:"pointer" }} alt="Delete" onClick={()=> removeUser(user.id)}/>
              </td>
            </tr>
          ))}

                        </tbody>
                        </table>

            </div>
        </div>

      <div className="tproducts">
      <div className="insights">
                <div className="leftins">
                    <h1>Top Sold Products</h1>
                    
                </div>
                <div className="rightins">
                <select name="" id="">
                  <option value="Today">Today</option>
                  <option value="Yesterday">Yesterday</option>
                  <option value="This Week">This Week</option>
                  <option value="This Month">This Month</option>
                  </select>
                  <button>Add Product</button>
                </div>
            </div>
      <div className="table">
          <table>
          <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Sales</th>
                            <th>Price</th>
                            <th>Earnings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#1232</td>
                            <td style={{display:'flex',alignItems:'center',textAlign:'center'}}><img src="https://www.shipbob.com/wp-content/uploads/2022/06/PRODUCT-RANGE.jpg" alt="" style={{width:'40px',height:'40px',marginLeft:"260px",marginRight:"30px"}}/>Perfume Set</td>
                            <td>102</td>
                            <td>$35</td>
                            <td>$390</td>
                        </tr>
                        <tr>
                            <td>#1232</td>
                            <td style={{display:'flex',alignItems:'center',textAlign:'center'}}><img src="https://www.shipbob.com/wp-content/uploads/2022/06/PRODUCT-RANGE.jpg" alt="" style={{width:'40px',height:'40px',marginLeft:"260px",marginRight:"30px"}}/>Perfume Set</td>
                            <td>102</td>
                            <td>$35</td>
                            <td>$390</td>
                        </tr>
                        <tr>
                            <td>#1232</td>
                            <td style={{display:'flex',alignItems:'center',textAlign:'center'}}><img src="https://www.shipbob.com/wp-content/uploads/2022/06/PRODUCT-RANGE.jpg" alt="" style={{width:'40px',height:'40px',marginLeft:"260px",marginRight:"30px"}}/>Perfume Set</td>
                            <td>102</td>
                            <td>$35</td>
                            <td>$390</td>
                        </tr>
                        <tr>
                            <td>#1232</td>
                            <td style={{display:'flex',alignItems:'center',textAlign:'center'}}><img src="https://www.shipbob.com/wp-content/uploads/2022/06/PRODUCT-RANGE.jpg" alt="" style={{width:'40px',height:'40px',marginLeft:"260px",marginRight:"30px"}}/>Perfume Set</td>
                            <td>102</td>
                            <td>$35</td>
                            <td>$390</td>
                        </tr>
                        <tr>
                            <td>#1232</td>
                            <td style={{display:'flex',alignItems:'center',textAlign:'center'}}><img src="https://www.shipbob.com/wp-content/uploads/2022/06/PRODUCT-RANGE.jpg" alt="" style={{width:'40px',height:'40px',marginLeft:"260px",marginRight:"30px"}}/>Perfume Set</td>
                            <td>102</td>
                            <td>$35</td>
                            <td>$390</td>
                        </tr>
                        <tr>
                            <td>#1232</td>
                            <td style={{display:'flex',alignItems:'center',textAlign:'center'}}><img src="https://www.shipbob.com/wp-content/uploads/2022/06/PRODUCT-RANGE.jpg" alt="" style={{width:'40px',height:'40px',marginLeft:"260px",marginRight:"30px"}}/>Perfume Set</td>
                            <td>102</td>
                            <td>$35</td>
                            <td>$390</td>
                        </tr>
                        <tr>
                            <td>#1232</td>
                            <td style={{display:'flex',alignItems:'center',textAlign:'center'}}><img src="https://www.shipbob.com/wp-content/uploads/2022/06/PRODUCT-RANGE.jpg" alt="" style={{width:'40px',height:'40px',marginLeft:"260px",marginRight:"30px"}}/>Perfume Set</td>
                            <td>102</td>
                            <td>$35</td>
                            <td>$390</td>
                        </tr>
                        <tr>
                            <td>#1232</td>
                            <td style={{display:'flex',alignItems:'center',textAlign:'center'}}><img src="https://www.shipbob.com/wp-content/uploads/2022/06/PRODUCT-RANGE.jpg" alt="" style={{width:'40px',height:'40px',marginLeft:"260px",marginRight:"30px"}}/>Perfume Set</td>
                            <td>102</td>
                            <td>$35</td>
                            <td>$390</td>
                        </tr>
                        <tr>
                            <td>#1232</td>
                            <td style={{display:'flex',alignItems:'center',textAlign:'center'}}><img src="https://www.shipbob.com/wp-content/uploads/2022/06/PRODUCT-RANGE.jpg" alt="" style={{width:'40px',height:'40px',marginLeft:"260px",marginRight:"30px"}}/>Perfume Set</td>
                            <td>102</td>
                            <td>$35</td>
                            <td>$390</td>
                        </tr>
                    
                        </tbody>
          </table>
      </div>

      </div>







        </div>
   
</div>




    </div>
  );
};

export default admin;
