import { useState } from "react";
import {GoChevronDown, GoChevronRight} from "react-icons/go";
import styled from "styled-components";

function ExpandablePanel({ header, children }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return(
        <ExpandablePanelWrapper>
            <ExpandablePanelHeaderWrapper>
                <ExpandablePanelHeaderIcon onClick={handleClick}>
                    {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
                </ExpandablePanelHeaderIcon>
                <ExpandablePanelHeader>
                    {header}
                </ExpandablePanelHeader>
            </ExpandablePanelHeaderWrapper>
            {
                isExpanded &&
                <ExpandablePanelChildrenWrapper>
                    {children}
                </ExpandablePanelChildrenWrapper>
            }
        </ExpandablePanelWrapper>
    );
}

export default ExpandablePanel;

const ExpandablePanelWrapper = styled.div`
  margin-bottom: 0.5rem;
  border-width: 1px;
  border-radius: 0.25rem;
`;

const ExpandablePanelHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  
`;

const ExpandablePanelHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ExpandablePanelHeaderIcon = styled.div`
  cursor: pointer;
  margin-right: 0.5rem;
`;

const ExpandablePanelChildrenWrapper = styled.div`
  padding: 0.5rem;
  border-top-width: 1px;
`;