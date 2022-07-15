import "./App.css";
import 'font-awesome/css/font-awesome.min.css';
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";

function App() {
  return (
      <div>
        <div className="container">
          <SignUp />
          {/* <ForgotPassword /> */}
          {/* <Login /> */}
        </div>
      </div>
  );
}

export default App;
