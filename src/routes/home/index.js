import { NavLink } from 'react-router-dom';
import {ReactComponent as BookIcon} from '../../app/assets/book-line.svg';
import {ReactComponent as MovieIcon} from '../../app/assets/movie.svg';
import {ReactComponent as RestaurantIcon} from '../../app/assets/food-restaurant.svg';
import {ReactComponent as TVIcon} from '../../app/assets/screen.svg';

const Home = () => {
	return(
		<div className="component">
		<div className="category-container">
			<NavLink to="/category/books">
				<div className="category">
					<div>
						<BookIcon className="category-icon" />
					</div>
					<div>
						<button className="category-title">Books</button>
					</div>
				</div>
			</NavLink>	

			<NavLink to="/category/movies">
				<div className="category">
					<div>
						<MovieIcon className="category-icon" />
					</div>
					<div>
						<button className="category-title">Movies</button>
					</div>
				</div>
			</NavLink>

			<NavLink to="/category/restaurants">
				<div className="category">
					<div>
						<RestaurantIcon className="category-icon" />
					</div>
					<div>
						<button className="category-title">Restaurant</button>
					</div>
				</div>
			</NavLink>

			<NavLink to="/category/television">
				<div className="category">
					<div>
						<TVIcon className="category-icon" />
					</div>
					<div>
						<button className="category-title">Television</button>
					</div>
				</div>
			</NavLink>	

		</div>
		<div className="search-container">

		</div>
	</div>
	)
}

export default Home;
