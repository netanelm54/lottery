import Carousel from "../common/carousel";
import Card from "./card";
import { items } from "./data.json";

const DashboardManager = () => {
  return (
    <div>
      <Carousel name="lotteryCards" cardWidth={110}>
        {items.map((item) => (
          <Card item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default DashboardManager;
