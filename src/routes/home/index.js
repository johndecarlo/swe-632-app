import { NavLink } from 'react-router-dom';
import main from '../../app/assets/main.jpg';
import {ReactComponent as BookIcon} from '../../app/assets/book-line.svg';
import {ReactComponent as MovieIcon} from '../../app/assets/movie.svg';
import {ReactComponent as RestaurantIcon} from '../../app/assets/food-restaurant.svg';
import {ReactComponent as TVIcon} from '../../app/assets/screen.svg';

const Home = () => (
	<div className="component">
		<div className="category-container">
			<div className="category">
				<div>
					<BookIcon className="category-icon" />
				</div>
				<div>
					<NavLink to="/category/books">
						Books
					</NavLink>
				</div>
			</div>

			<div className="category">
				<div>
					<MovieIcon className="category-icon" />
				</div>
				<div>
					<NavLink to="/category/movies">
						Movies
					</NavLink>
				</div>
			</div>

			<div className="category">
				<div>
					<RestaurantIcon className="category-icon" />
				</div>
				<div>
					<NavLink to="/category/restaurants">
						Restaurants
					</NavLink>
				</div>
			</div>

			<div className="category">
				<div>
					<TVIcon className="category-icon" />
				</div>
				<div>
					<NavLink to="/category/television">
						Television
					</NavLink>
				</div>
			</div>
		</div>
		<div className="search-container">
			<div className="search-bar-container">
				{/* <h1 className="main-search">Reviews</h1> */}
				{/* <Search className="main-search"/> */}
			</div>
			<img src={main} alt="main" className="main-image"/>
		</div>
	</div>
);

export default Home;
