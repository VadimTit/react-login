import React, {useState} from 'react';

function LoginForm({Login, error, errortwo}) {
   const [details, setDetails] = useState({ email: "", password: ""})

   const submitHandler = e => {
      e.preventDefault();

      Login(details);
   }

   return (
      <form onSubmit={submitHandler}>
            <div className="title">
               <span>Bank</span> Support Portal
            </div>
         <div className="form-inner">
            <div className="form-group">
               <input type="email" name="email" id="email" placeholder="E-mail" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
               <img class="img-cross" src="/images/cross.jpg" alt=""/>
               <img class="img-check" src="/images/check.png" alt=""/>
            </div>
            {(error !="") ? (<div className="error">{error}</div>) : ""}
            <div className="form-group">
               <input type="password" name="password" id="password" placeholder="Password" minlength="5" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
               <img class="img-cross" src="/images/cross.jpg" alt=""/>
               <img class="img-check" src="/images/check.png" alt=""/>
            </div>
            {(errortwo !="") ? (<div className="errortwo">{errortwo}</div>) : ""}
            <input type="submit" value="Login"/>
            <div className="form-group-description">Forgot your password? <a href="">Reset it here</a></div>
         </div>
         
      </form>
      
   )
}

export default LoginForm;
