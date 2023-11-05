import ReactDOM from "react-dom";
import { useEffect } from "react";
import styled from "styled-components";

function Modal({ onClose, children, actionBar }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "visible";
        }
    }, []);

    return ReactDOM.createPortal(
        <FullModalWrapper>
            <ModalBackground onClick={onClose}></ModalBackground>
            <ModalWrapper>
                <ModalContentWrapper>
                    {children}
                    <ModalActionBarWrapper>
                        {actionBar}
                    </ModalActionBarWrapper>
                </ModalContentWrapper>
            </ModalWrapper>
        </FullModalWrapper>,

        document.querySelector('.modal-container')
    );
}

export default Modal;

const FullModalWrapper = styled.div`
  
`;

const ModalBackground = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgb(209 213 219);
  opacity: 0.8;
`;

const ModalWrapper = styled.div`
  position: fixed;
  inset: 10rem;
  padding: 2.5rem;
  background-color: rgb(255, 255, 255);
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ModalActionBarWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

