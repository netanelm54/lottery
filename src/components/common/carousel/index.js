import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  position: relative;
`;
const Items = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 100px);
  align-items: center;
  justify-content: start;
  overflow-x: hidden;
`;
const Arrow = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  background: ${(props) => props.theme.colors.gray};
  box-shadow: 1px 1px 2px ${(props) => props.theme.colors.shadowGray};
  color: ${(props) =>
    props.disabled ? props.theme.colors.darkGray : props.theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  cursor: ${(props) => (props.disabled ? "context-menu" : "pointer")};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 30px;
`;
const ArrowLeft = styled(Arrow)`
  left: 2px;
`;
const ArrowRight = styled(Arrow)`
  right: 2px;
`;

const Carousel = ({ name, children, cardWidth }) => {
  const id = `carousel_${name}`;
  const [reachRight, setReachRight] = useState(false);
  const [reachLeft, setReachLeft] = useState(true);

  const scrollRight = () => {
    setReachLeft(false);
    const content = document.getElementById(id);
    const scroll = content.scrollLeft + content.clientWidth - cardWidth;
    content.scrollTo({
      left: scroll,
      behavior: "smooth",
    });
    if (content.scrollWidth - (scroll + content.clientWidth) < 1) {
      setReachRight(true);
    }
  };

  const scrollLeft = () => {
    setReachRight(false);
    const content = document.getElementById(id);
    const scroll = content.scrollLeft - content.clientWidth - cardWidth;
    content.scrollTo({
      left: scroll,
      behavior: "smooth",
    });
    if (scroll < 1) {
      setReachLeft(true);
    }
  };

  return (
    <Container>
      <ArrowLeft disabled={reachLeft} onClick={scrollLeft}>
        {"<"}
      </ArrowLeft>
      <Items id={id}>{children}</Items>
      <ArrowRight disabled={reachRight} onClick={scrollRight}>
        {">"}
      </ArrowRight>
    </Container>
  );
};

Carousel.propTypes = {
  children: PropTypes.node,
  cardWidth: PropTypes.number,
};

export default Carousel;
