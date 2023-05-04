import Footer from "./components/Footer";
import Header from "./components/Header";
import SmallImage from "./components/SmallImage";
import ProfileImage from "./components/UserProfileImg";
import CreateAccount from "./views/CreateAccount";
import LogIn from "./views/LogIn";
import NotificationList from "./views/NotificationList";
import UserPanel from "./views/UserPanel";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthorizationProvider } from "./services/authorization"
import Description from "./views/description";
import "./App.css"




function App() {

  return(
/*    <>
      <Header/>
        <AuthorizationProvider>
          <BrowserRouter>
            <nav>
              <ul>
                <Link>
                  <li>Páxina principal</li>
                </Link>
              </ul>
            </nav>
            <main>
              <Routes>
                <Route/>
                <Route/>
              </Routes>
            </main>
          </BrowserRouter>
        </AuthorizationProvider>
      <Footer/>
    </>*/
    <AuthorizationProvider>
    <LogIn/>
    </AuthorizationProvider>

  );
}

export default App