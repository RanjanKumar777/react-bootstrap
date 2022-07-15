import React from 'react'
import InputBox from '../components/InputBox'

function ForgotPassword() {
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
                                            <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                            <p className="mb-4">We get it, stuff happens. Just enter your email address below
                                                and we'll send you a link to reset your password!</p>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <InputBox label="Email Address" id="email" type="email" />
                                            </div>
                                            <a href=" " className="btn btn-primary btn-user btn-block">
                                                Reset Password
                                            </a>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <a className="small" href=" ">Create an Account!</a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href=" ">Already have an account? Login!</a>
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

export default ForgotPassword