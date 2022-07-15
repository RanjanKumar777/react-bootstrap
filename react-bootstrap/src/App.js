import "./App.css";
import 'font-awesome/css/font-awesome.min.css';
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
      <div>
        <div className="container">
          <SignUp />
          {/* <ForgotPassword /> */}
        </div>
      </div>
  );
}

export default App;
