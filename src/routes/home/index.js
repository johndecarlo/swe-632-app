import book from '../../app/assets/book.png';
import movies from '../../app/assets/movies.png';
import restaurants from '../../app/assets/restaurants.png';
import tv from '../../app/assets/tv.png';
import { NavLink } from 'react-router-dom';

const Home = () => (
	<div>
		<h1>Categories</h1>
		<div className="category">
			<NavLink to="/category/movies">
				<img className="category" src={movies} alt="movies" type="Movies" />
			</NavLink>
			<NavLink to="/category/tv">
				<img className="category"  src={tv} alt="tv" type="TV Shows" />
			</NavLink>
			<NavLink to="/category/restaurants">
				<img className="category"  src={restaurants} alt="restaurants" type="Restaurants" />
			</NavLink>
			<NavLink to="/category/books">
				<img className="category" src={book} alt="books" type="Book" />
			</NavLink>
		</div> 
	</div>
);

export default Home;
