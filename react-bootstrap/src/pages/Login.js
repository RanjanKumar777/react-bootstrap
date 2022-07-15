import React from 'react'
import InputBox from '../components/InputBox'

function Login() {
  return (
    <>
        <div className="container">

        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group">
                                            <InputBox label="Email Address" id="email" type="email" />
                                        </div>
                                        <div className="form-group">
                                            <InputBox label="Password" id="password" type="password" />
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <InputBox className="custom-control-input" label="" type="checkbox" id="checkbox" />
                                                <label className="custom-control-label" for="checkbox">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <a href=" " className="btn btn-primary btn-user btn-block">
                                            Login
                                        </a>
                                        <hr />
                                        <a href=" " className="btn btn-google btn-user btn-block">
                                            <i className="fa fa-google font-size-medium" aria-hidden="true"></i> Login with Google
                                        </a>
                                        <a href=" " className="btn btn-facebook btn-user btn-block">
                                            <i class="fa fa-facebook font-size-medium" aria-hidden="true"></i> Login with Facebook
                                        </a>
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                        <a className="small" href=" ">Forgot Password?</a>
                                    </div>
                                    <div className="text-center">
                                        <a className="small" href=" ">Create an Account!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        </div>
    </>
  )
}

export default Login