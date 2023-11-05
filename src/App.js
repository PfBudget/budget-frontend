import {useSelector} from "react-redux";
import styled from "styled-components";
import Navbar from "./components/navigation/Navbar";
import Route from "./components/simple/Route";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import TestPage from "./pages/TestPage";
import "./fonts/Cera Pro Black.ttf";

function App() {
    const {jwtToken} = useSelector(state => state.keys);

    const AuthenticatedApp = () => {
        return(
            <AppRoutesWrapper>
                <Route path={"/"}>
                    <HomePage />
                </Route>
                <Route path={"/test"}>
                    <TestPage />
                </Route>
            </AppRoutesWrapper>
        );
    };

    const UnauthenticatedApp = () => {
        return(
            <AppRoutesWrapper>
                <Route path={"/"}>
                    <HomePage />
                </Route>
                <Route path={"/test"}>
                    <TestPage />
                </Route>
                <Route path={"/login"}>
                    <LoginPage />
                </Route>
            </AppRoutesWrapper>
        );
    };

    return(
        <AppWrapper>
            <Navbar />
            {jwtToken ? AuthenticatedApp() : UnauthenticatedApp()}
        </AppWrapper>
    );
}

export default App;

const AppWrapper = styled.div`
  background-color: var(--prussian-blue);
  color: var(--tiffany-blue);
  min-height: 100vh;
`;

const AppRoutesWrapper = styled.section`
  
`;