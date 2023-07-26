import React, { useState } from 'react'
import '../css/login.css'


export default function Auth() {
    const [form,setForm]=useState({});

    const logInForm =(e)=>{
        console.log(e.target.value,e.target.name);
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const signInForm=async(e)=>{
        e.preventDefault();
        const response=await fetch('http://localhost:8080/signin',{
        method:'POST',
        body:JSON.stringify(form),
        headers:{
            'Content-Type':'application/json'
        }
        })
        const data=await response.json();
        console.log(data); // show that the 
        // console.log(response); // show that the connet with backend server localhost
        // console.log(form); //form data print

    }


  return (
    <>

    <div  style={{ marginTop: '65px' }}>
        <div className="container">
            <div className="row justify-content-center">
                
                <div className="col-10 col-lg-6 col-md-6  login-box">
                    <div className="col-lg-12 login-title">
                        
                        ADMIN PANEL
                    </div>
                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form">
                            <form onSubmit={signInForm}>
                                <div className="form-group">
                                    <label className="form-control-label">USERNAME</label>
                                    <input type="text" onChange={logInForm} name='userName' className="form-userN"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input type="password" onChange={logInForm} name='userPassword' className="form-control"/>
                                </div>
                                <div className="col-lg-12 loginbttm">
                                    <div className="col-lg-6 login-btm login-text"></div>
                                    <div className="col-lg-6 login-btm login-button">
                                        <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
