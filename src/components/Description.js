import { BsFilterLeft } from "react-icons/bs";
import { TbArrowsUpDown } from "react-icons/tb";

function Description() {
  return (
    <div className="DescriptionHolder">
      <div className="DescriptionTitle">
        <p>HOME / FOOTWEAR</p>
      </div>
      <div className="DescriptionFootwear">
        <div className="DescriptionFootwear-left">
          <p>FOOTWEAR</p>
        </div>
        <div className="DescriptionFootwear-right">
          <p className="help-text">
            Filters <BsFilterLeft className="nav-icon" />
          </p>
          <p className="help-text">
            Sort <TbArrowsUpDown className="nav-icon" />
          </p>
        </div>
      </div>
      <div className="DescriptionParagraph">
        <p>
          From Nike, Jordans, and Adidas to Anta and more, find the perfect pair
          you can wear to the streets or court in style and with comfort. TITAN
          offers the world’s best basketball products for men, women and youth
          that showcase different styles and materials for any sneakerhead out
          there - from sneakers to basketball shoes all the way to slides and
          sandals.
        </p>

        <p>
          Take your game to the next level with performance footwear made in
          collaboration with notable brands and your favorite athletes, such as
          LeBron James, Kevin Durant, Luka Doncic and more. Meanwhile, lifestyle
          footwear is perfect for sneakerheads who want to wear the special
          seasonal drops from famous brands and collaborations or the latest
          kicks with unique colorways and impressive low to high-top shoe
          designs. Go for sporty slides and sandals to rest your feet after
          court practice or for a relaxing day out wearing comfortable casual
          apparel or even dry-fit sportswear.
        </p>

        <p>
          Shop retro, performance, lifestyle shoes made from sustainable
          materials and the flavor of the season online or in TITAN stores. Find
          your size here to grab your go-to footwear with the perfect shoe fit.
          Nationwide Shipping is available.
        </p>
      </div>
    </div>
  );
}

export default Description;
