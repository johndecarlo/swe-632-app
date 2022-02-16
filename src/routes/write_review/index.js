import { h } from 'preact';
import style from './style.css';
import star_blank from '../../assets/star_uncolored.png';
import star_fill from '../../assets/star_colored.png';

const WriteReview = () => (
	<div class={style.home}>
		<form>
			<h1 class={style.heading}>Write a Review for **insert item here**</h1>
			<h2 class={style.question}>How many stars would you like to leave?:</h2>
			<div className={style.starRating}>
				<img className={style.star} src={star_fill} alt="1 Star" />
				<img className={style.star} src={star_fill} alt="2 Stars" />
				<img className={style.star} src={star_fill} alt="3 Stars" />
				<img className={style.star} src={star_fill} alt="4 Stars" />
				<img className={style.star} src={star_blank} alt="5 Stars" />
			</div>
			<h2 class={style.question}>Write a summary of your experience:</h2>
			<textarea id="experience" name="experience" rows="8" cols="75"></textarea>
			<br/>
			<input type="submit" value="Submit" />
		</form>
	</div>
);

export default WriteReview;
