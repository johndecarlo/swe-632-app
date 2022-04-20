import { NavLink } from 'react-router-dom';
import main from '../../app/assets/main.jpg';
import { ReactComponent as BookIcon } from '../../app/assets/book-line.svg';
import { ReactComponent as MovieIcon } from '../../app/assets/movie.svg';
import { ReactComponent as RestaurantIcon } from '../../app/assets/food-restaurant.svg';
import { ReactComponent as TVIcon } from '../../app/assets/screen.svg';

const Home = () => (
  <div className="component">
    <div className="category-container">
      <NavLink to="/category/books" className="category">
        <div>
          <BookIcon className="category-icon" />
        </div>
        <div>Books</div>
      </NavLink>

      <NavLink to="/category/movies" className="category">
        <div>
          <MovieIcon className="category-icon" />
        </div>
        <div>Movies</div>
      </NavLink>

      <NavLink to="/category/restaurants" className="category">
        <div>
          <RestaurantIcon className="category-icon" />
        </div>
        <div>Restaurants</div>
      </NavLink>

      <NavLink to="/category/television" className="category">
        <div>
          <TVIcon className="category-icon" />
        </div>
        <div>Television </div>
      </NavLink>
    </div>
    <div className="search-container">
      <div className="search-bar-container">
        {/* <h1 className="main-search">Reviews</h1> */}
        {/* <Search className="main-search"/> */}
      </div>
      <img src={main} alt="main" className="main-image" />
    </div>
  </div>
);

export default Home;
