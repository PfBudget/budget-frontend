import useNavigation from "../../hooks/use-navigation";
import styled, {css} from "styled-components";

function Link({ to, children, className, activeStyle }) {
    const { currentPath, navigate } = useNavigation();

    const isActive = currentPath === to;

    const handleClick = (e) => {
        if(e.metaKey || e.ctrlKey) {
            return;
        }

        e.preventDefault();
        navigate(to);
    };

    return(
        <LinkWrapper
            className={className}
            isActive={isActive}
            activeStyle={activeStyle}
            onClick={handleClick}
            href={to}
        >
            {children}
        </LinkWrapper>
    );
}

export default Link;

const LinkWrapper = styled.a`
    color: #75dddd;
    text-decoration: none;

    ${({ isActive, activeStyle }) => isActive && css`
        ${activeStyle}
    `}
`;