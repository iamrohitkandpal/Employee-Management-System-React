import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedUserData, setLoggedUserData] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedUser = localStorage.getItem("loggedUser");
  //     if(loggedUser){
  //       setUser(loggedUser.role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (authData.admin.find((e) => e.email == email && e.password == password)) {
        setUser('admin');
        localStorage.setItem("loggedUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find((e) => e.email == email && e.password == password);
      if(employee){
        setUser('employee');
        setLoggedUserData(employee);
        localStorage.setItem("loggedUser", JSON.stringify({ role: "employee" }));
      }
    } else {
      alert("Incorrect Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : (user == "employee" ? <EmployeeDashboard data={loggedUserData}/> : null)}
    </>
  );
};

export default App;
