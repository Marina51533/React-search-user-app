import "./card-list.styles.css";
import CardComponent from "../card/card.component";

const CardList = ({people}) => (
  <div className="card-list">
    {people.map((user) => {
      return <CardComponent user={user} />;
    })}
  </div>
    ) 

export default CardList;
