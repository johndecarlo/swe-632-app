import { h } from 'preact';
import style from './style.css';
import star_blank from '../../assets/star_uncolored.png';
import star_fill from '../../assets/star_colored.png';

const BookReview = () => (
	<div class={style.home}>
		<h1>Book Review Name</h1>
		<button onClick={() => }>Leave your own review</button>
		<div class={style.review}>
			<p>Jeffery Jones</p>
			<p>Food took over half an hour and service was poor</p>
			<div className={style.stars}>
				<img className={style.star} src={star_fill} alt="1 Star" />
				<img className={style.star} src={star_blank} alt="2 Stars" />
				<img className={style.star} src={star_blank} alt="3 Stars" />
				<img className={style.star} src={star_blank} alt="4 Stars" />
				<img className={style.star} src={star_blank} alt="5 Stars" />
			</div>
		</div>
		<div class={style.review}>
			<p>Chris Morgan</p>
			<p>Great food and great people</p>
			<div className={style.stars}>
				<img className={style.star} src={star_fill} alt="1 Star" />
				<img className={style.star} src={star_fill} alt="2 Stars" />
				<img className={style.star} src={star_fill} alt="3 Stars" />
				<img className={style.star} src={star_fill} alt="4 Stars" />
				<img className={style.star} src={star_fill} alt="5 Stars" />
			</div>
		</div>
		<div class={style.review}>
			<p>Thomas Smith</p>
			<p>Avergae experience for an average place</p>
			<div className={style.stars}>
				<img className={style.star} src={star_fill} alt="1 Star" />
				<img className={style.star} src={star_fill} alt="2 Stars" />
				<img className={style.star} src={star_fill} alt="3 Stars" />
				<img className={style.star} src={star_blank} alt="4 Stars" />
				<img className={style.star} src={star_blank} alt="5 Stars" />
			</div>
		</div>
	</div>
);

export default BookReview;
