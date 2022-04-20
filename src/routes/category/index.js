import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Item from '../../components/item';
import data from '../../data/data.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { ReactComponent as BookIcon } from '../../app/assets/book-line.svg';
import { ReactComponent as MovieIcon } from '../../app/assets/movie.svg';
import { ReactComponent as RestaurantIcon } from '../../app/assets/food-restaurant.svg';
import { ReactComponent as TVIcon } from '../../app/assets/screen.svg';

const Category = () => {
  const [categoryData, setData] = useState([]);
  const [categoryTitle, setTitle] = useState('');
  const [query, setQuery] = useState('');
  const { type } = useParams();

  const myComponentStyle = {
    color: 'black',
  };

  const options = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'alphabet', label: 'A-Z' },
  ];

  useEffect(() => {
    setTitle(type.charAt(0).toUpperCase() + type.slice(1));

    for (let propName in data) {
      if (propName === type) {
        setData(data[propName]);
      }
    }
  }, [type]);

  return (
    <div className="category-component">
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
      <br />
      <div className="category-header">
        <Link className="return-button" to="/">
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </Link>
        <h1 className="category-title">{categoryTitle}</h1>
      </div>
      <div className="flex-container">
        <div className="flex-child">
          <h4>Find {categoryTitle}:</h4>
          <input
            placeholder=" Search"
            onChange={event => setQuery(event.target.value)}
          />
        </div>
        <div className="flex-child">
          <h4>Sort {categoryTitle}:</h4>
          <Select style={myComponentStyle} options={options} />
        </div>
      </div>
      <div className="categories">
        <div>
          {categoryData
            .filter(post => {
              if (query === '') {
                return post;
              } else if (
                post.title.toLowerCase().includes(query.toLowerCase())
              ) {
                return post;
              }
            })
            .sort(function (a, b) {
              const nameA = a.title.toUpperCase(); // ignore upper and lowercase
              const nameB = b.title.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }

              // names must be equal
              return 0;
            })
            .map((item, i) => {
              const title = item.title;
              return (
                <Item
                  key={i}
                  title={title}
                  countLikes={item.countLikes}
                  countDislikes={item.countDislikes}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Category;
