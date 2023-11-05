import styled from "styled-components";
import {GoSync} from "react-icons/go";

function IconButton({ children, loading, className, ...rest }) {
    return(
        <ButtonWrapper {...rest} disabled={loading} className={className}>
            {loading ? <GoSync className={'animate-spin'} /> : children}
        </ButtonWrapper>
    );
}

export default IconButton;

const ButtonWrapper = styled.button`
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border: 1px solid #3b82f6;
  background-color: #3b82f6;
  color: #fff;
  border-radius: 5px;
  font-size: x-large;
  
  &.delete {
    background-color: var(--warm-red);
  }
  
  &.edit {
    background-color: rgb(31 41 55);
  }
  
  &:hover {
    cursor: pointer;
  }
`;