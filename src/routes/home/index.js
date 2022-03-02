import { NavLink } from 'react-router-dom';

const Home = () => (
	<div className="component">
		<div className="category-container">
			<div className="category">
				<NavLink to="/category/books">
					Books
				</NavLink>
			</div>
			<div className="category">
				<NavLink to="/category/movies">
					Movies
				</NavLink>
			</div>
			<div className="category">
				<NavLink to="/category/restaurants">
					Restaurants
				</NavLink>
			</div>
			<div className="category">
				<NavLink to="/category/tv">
					TV
				</NavLink>
			</div>
		</div> 
	</div>
);

export default Home;
