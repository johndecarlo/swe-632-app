import { h } from 'preact';
import main from '../../style'
import style from './style.css';
import book from '../../assets/book.png';
import movies from '../../assets/movies.png';
import restaurants from '../../assets/restaurants.png';
import tv from '../../assets/tv.png';
import { Link } from 'preact-router/match';

const Home = () => (
	<div class={main.component}>
		<h1>Categories</h1>
		<div className={style.categories}>
			<Link href="/category/books">
				<img className={style.category} src={book} alt="books" type="Book" />
			</Link>

			<Link href="/category/movies">
				<img className={style.category} src={movies} alt="movies" type="Movies" />
			</Link>

			<Link href="/category/restaurants">
				<img className={style.category} src={restaurants} alt="restaurants" type="Restaurants" />
			</Link>

			<Link href="/category/tv">
				<img className={style.category} src={tv} alt="tv" type="TV Shows" />
			</Link>
		</div>
	</div>
);

export default Home;
