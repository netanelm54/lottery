import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import Carousel from "../common/carousel";
import Card from "./card";
import { fetchLottery as fetchLotteryAction } from "../../actions";
import { useEffect, useState } from "react";

const Button = styled.div`
  border-radius: 3px;
  background: ${(props) => props.theme.colors.blue};
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.white};
  padding: 8px 11px;
  width: 110px;
  cursor: pointer;
  text-align: center;
  margin-left: 60px;
  margin-bottom: 24px;
`;

const DashboardManager = ({ fetchLottery, lottery }) => {
  const [sortOrder, setSortOrder] = useState("reward");

  useEffect(() => {
    fetchLottery(sortOrder);
  }, [sortOrder]);

  const toggleSort = () => {
    if (sortOrder === "reward") {
      setSortOrder("end");
    } else {
      setSortOrder("reward");
    }
  };

  return (
    <div>
      <Button onClick={toggleSort}>
        {sortOrder === "reward" ? "Sort by End Date" : "Sort by Reward"}
      </Button>
      {lottery && lottery.length && (
        <Carousel name="lotteryCards" cardWidth={110}>
          {lottery.map((item) => (
            <Card item={item} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

DashboardManager.propTypes = {
  lottery: PropTypes.array,
  fetchLottery: PropTypes.func,
};

const mapStateToProps = ({ lottery }) => ({
  lottery,
});

export default connect(mapStateToProps, { fetchLottery: fetchLotteryAction })(
  DashboardManager
);
