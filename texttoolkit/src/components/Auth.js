import React from 'react'
import '../css/login.css'


export default function Auth() {
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
                            <form>
                                <div className="form-group">
                                    <label className="form-control-label">USERNAME</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input type="password" className="form-control"/>
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
