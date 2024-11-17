import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedUserData, setLoggedUserData] = useState(null);
  const [userData, SetUserData] = useContext(AuthContext);

  useEffect(() => {
      const loggedUser = localStorage.getItem("loggedUser");

      if(loggedUser){
        const userData = JSON.parse(loggedUser);
        setUser(userData.role);
        setLoggedUserData(userData.data);
      }
  }, []); 
  
  const handleLogin = (email, password) => {
    if (userData.admin.find((e) => e.email == email && e.password == password)) {
        const admin = userData.admin.find((e) => e.email == email && e.password == password);
        setLoggedUserData(admin);
        setUser('admin');
        localStorage.setItem("loggedUser", JSON.stringify({ role: "admin", data: admin }));
    } else if (userData) {
      const employee = userData.employees.find((e) => e.email == email && e.password == password);
      if(employee){
        setUser('employee');
        setLoggedUserData(employee);
        localStorage.setItem("loggedUser", JSON.stringify({ role: "employee", data: employee }));
      }
    } else {
      alert("Incorrect Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser} data={loggedUserData}/> : (user == "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedUserData}/> : null)}
    </>
  );
};

export default App;





