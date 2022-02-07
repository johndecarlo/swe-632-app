import { h } from 'preact';
import style from './style.css';
import book from '../../assets/book.png';
import movies from '../../assets/movies.png';
import restaurants from '../../assets/restaurants.png';
import tv from '../../assets/tv.png';

const Home = () => (
	<div class={style.home}>
		<h1>Categories</h1>
		<div className={style.categories}>
			<img src={book} alt="books" />
			<img src={movies} alt="movies" />
		</div>
		<div className={style.categories}>
			<img src={restaurants} alt="restaurants" />
			<img src={tv} alt="tv" />
		</div>
	</div>
);

export default Home;
