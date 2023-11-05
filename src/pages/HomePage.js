import {PageWrapper} from "../styles/PageWrapper.styled";
import {useSelector} from "react-redux";


function HomePage() {
    const {jwtToken} = useSelector(state => state.keys);

    return(
        <PageWrapper>
            {jwtToken ? 'Token Received' : 'Home Page'}
        </PageWrapper>
    );
}

export default HomePage;