import { NavLink } from 'react-router-dom';
import main from '../../app/assets/main.jpg';
import Search from '../../components/search';
import {ReactComponent as BookIcon} from '../../app/assets/read-book.svg';

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
		<div className="search-container">
			<img src={main} alt="main" className="main-image"/>
			<div className="search-component">
				<Search />
			</div>
		</div>
	</div>
);

export default Home;
