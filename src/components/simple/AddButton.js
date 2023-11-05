import styled from "styled-components";
import {GoSync} from "react-icons/go";

function AddButton({ children, loading, ...rest }) {
    return(
        <ButtonWrapper {...rest} disabled={loading}>
            {loading ? <GoSync className={'animate-spin'} /> : children}
        </ButtonWrapper>
    );
}

export default AddButton;

const ButtonWrapper = styled.button`
  width: 7.5rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border: 1px solid #3b82f6;
  background-color: #3b82f6;
  color: #fff;
  border-radius: 5px;
  
  &:hover {
    cursor: pointer;
  }
`;