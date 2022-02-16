import style from './style'
import star_blank from '../../assets/star_uncolored.png';
import star_fill from '../../assets/star_colored.png';

const Item = (props) => (
  <div className={style.cardContainer}>
    <div className="card">
      <div className="card-body">
        <div id="card-sub-body">
          <h3 className={style.cardTitle}>{props.title}</h3>
          <div className={style.starRating}>
            <img className={style.star} src={star_blank} alt="1 Star" />
            <img className={style.star} src={star_blank} alt="2 Stars" />
            <img className={style.star} src={star_blank} alt="3 Stars" />
            <img className={style.star} src={star_blank} alt="4 Stars" />
            <img className={style.star} src={star_blank} alt="5 Stars" />
          </div>
          <p className={style.reviewText}>10 Reviews</p>
        </div>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Read Reviews</a>
        <a href="../write_review" class="btn btn-primary">Write a Review</a>
      </div>
    </div>
  </div>
);

export default Item;
