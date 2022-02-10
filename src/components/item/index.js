import style from './style'

const Item = (props) => (
  <div className={style.cardContainer}>
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
);

export default Item;
