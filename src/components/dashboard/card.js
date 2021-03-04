import PropTypes from "prop-types";
import styled from "styled-components";
import Countdown from "react-countdown";
import { formatBigNumbers } from "../../utils/formater";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 110px;
  padding: 14px;
  margin: 4px 8px;
  border-radius: 3px;
  box-shadow: 1px 1px 2px ${(props) => props.theme.colors.shadowGray};
  background: ${(props) => props.theme.colors.yellow};
  align-items: center;
`;
const Name = styled.div`
  font-family: ${(props) => props.theme.fonts.semiBold};
  font-size: 16px;
`;
const Reward = styled.div`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 20px;
  margin: 16px 0 8px;
`;
const Button = styled.div`
  border-radius: 3px;
  background: ${(props) => props.theme.colors.red};
  font-family: ${(props) => props.theme.fonts.medium};
  padding: 5px 10px;
  margin-bottom: 4px;
  width: auto;
  width: 85px;
`;
const Link = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
`;
const CountDown = styled.div`
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 12px;
`;

const Card = ({ item }) => {
  const renderCountDown = (countDown) => {
    if (countDown.completed) {
      return "Done";
    }
    return `${countDown.days ? countDown.days + "D " : ""} 
    ${countDown.hours || "00"}: 
    ${countDown.minutes || "00"}: 
    ${countDown.seconds || "00"}
    `;
  };
  return (
    <Container>
      <Name>{item.name}</Name>
      <Reward>
        {item.currency}
        {formatBigNumbers(item.reward)}
      </Reward>
      <Button>
        <Link href={item.link} target="_blank">
          Play Now
        </Link>
      </Button>
      <CountDown>
        <Countdown date={new Date(item.end)} renderer={renderCountDown} />
      </CountDown>
    </Container>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
