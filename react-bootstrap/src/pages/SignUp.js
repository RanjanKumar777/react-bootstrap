import React from 'react';
import InputBox from '../components/InputBox';

function SignUp() {
  return (
    <>
        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        Create an Account!
                      </h1>
                    </div>
                    <form className="user">
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <InputBox label="First Name" type="text" id="first_name" />
                        </div>
                        <div className="col-sm-6">
                            <InputBox label="Last Name" type="text" id="last_name" />
                        </div>
                      </div>
                      <div className="form-group">
                        <InputBox label="Email Address" type="text" id="email" />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <InputBox label="Password" type="password" id="password" />
                        </div>
                        <div className="col-sm-6">
                            <InputBox label="Confirm Password" type="password" id="confirm_password" />
                        </div>
                      </div>
                      <a
                        href=" "
                        className="btn btn-primary btn-user btn-block"
                      >
                        Register Account
                      </a>
                      <hr />
                      <a
                        href=" "
                        className="btn btn-google btn-user btn-block"
                      >
                        <i className="fa fa-google font-size-medium" aria-hidden="true"></i> Register with
                        Google
                      </a>
                      <a
                        href=" "
                        className="btn btn-facebook btn-user btn-block"
                      >
                        <i class="fa fa-facebook font-size-medium" aria-hidden="true"></i> Register
                        with Facebook
                      </a>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href=" ">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href=" ">
                        Already have an account? Login!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default SignUp