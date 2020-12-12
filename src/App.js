import React, { useState } from 'react';
import LoginForm from './components/LoginForm'


function App() {
   const adminUser = {
      email: "admin@admin.com",
      password: "admin",
   }

   const [user, setUser] = useState({ email: "" });
   const [error, setError] = useState("");
   const [errortwo, setErrortwo] = useState("");

   const Login = details => {
      console.log(details);
      if(details.email === adminUser.email && details.password === adminUser.password) {
         setUser({
            email: details.email,
         })
      } 
      if(details.email !== adminUser.email) {
         setError("Invalid UserName!");
      }
      if(details.password !== adminUser.password) {
         setErrortwo("Invalid Password!")
      }
   }

   const Logout = () => {
      setUser({ email: ""})
   }

   return (
      <div className="App">
         {(user.email != "") ? (
            <div className="welcome">
               <h2>Welcome, <span>{user.email}</span></h2>
               <button onClick={Logout}>Logout</button>
            </div>
         ) : (
               <LoginForm Login={Login} error={error} errortwo={errortwo} />
            )}
      </div>
   );
}

export default App;
