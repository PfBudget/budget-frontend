import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import styled from "styled-components";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (index) => {

        setExpandedIndex((current) => {
            if(current === index) {
                return -1;
            } else {
                return index;
            }
        });

    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <IconWrapper>
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </IconWrapper>

        return (
            <ItemWrapper key={item.id}>
                <ItemHeadWrapper onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </ItemHeadWrapper>
                {isExpanded && <ItemContentWrapper>{item.content}</ItemContentWrapper>}
            </ItemWrapper>
        );
    });

    return(
        <AccordionWrapper>
            {renderedItems}
        </AccordionWrapper>
    );
}

export default Accordion;

const IconWrapper = styled.span`
  font-size: xx-large;
`;

const ItemWrapper = styled.div`
  
`;

const ItemHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background-color: rgb(249 250 251);
  border-bottom-width: 1px;
  cursor: pointer;
`;

const ItemContentWrapper = styled.div`
  border-bottom: 1px solid black;
  padding: 1.25rem;
`;

const AccordionWrapper = styled.div`
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  border-radius: 0.25rem;
`;