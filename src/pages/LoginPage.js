import LoginForm from "../components/forms/LoginForm";
import {PageWrapper} from "../styles/PageWrapper.styled";
import {useState} from "react";
import RegisterForm from "../components/forms/RegisterForm";
import Button from "../components/simple/Button";


function LoginPage() {
    const [showRegisterForm, setShowRegisterForm] = useState(false);

    const handleShowRegisterForm = () => {
        setShowRegisterForm(true);
    };

    const handleShowLoginForm = () => {
        setShowRegisterForm(false);
    };

    let content;
    if(showRegisterForm) {
        content = (
            <>
                <RegisterForm />
                <Button onClick={handleShowLoginForm}>Show Login Form</Button>
            </>
        );
    } else {
        content = (
            <>
                <LoginForm />
                <Button onClick={handleShowRegisterForm}>Show Register Form</Button>
            </>
        );
    }

    return(
        <PageWrapper>
            {content}
        </PageWrapper>
    );
}

export default LoginPage;