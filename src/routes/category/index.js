import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Item from '../../components/item';
import data from '../../data/data.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Category = () => {
  const [categoryData, setData] = useState([]);
  const [categoryTitle, setTitle] = useState('');
  const [query, setQuery] = useState("");
  const { type } = useParams();

  const options = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'alphabet', label: 'A-Z' },
    { value: 'ratingHigh', label: 'Highest Rating' },
    { value: 'ratingLow', label: 'Lowest Rating' }
  ]

  useEffect(() => {
    setTitle(type.charAt(0).toUpperCase() + type.slice(1));

    for (let propName in data) {
      if (propName === type) {
        setData(data[propName]);
      }
    }
  }, [type]);

  categoryData.filter(post => {
      if (query === '') {
        return post;
      } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
        return post;
      }
    }).map((item, i) => {
      const title = item.title;
      return (
        <Item
          key={i}
          title={title}
          countLikes={item.countLikes}
          countDislikes={item.countDislikes}
        />
      );
    })

  return (
    <div className="category-component">
      <div className="category-header">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </Link>
        <h1 className="category-title">{categoryTitle}</h1>
      </div>
      <div class="flex-container">
        <div class="flex-child">
          <h4>Find {categoryTitle}:</h4>
          <input placeholder=" Search" onChange={event => setQuery(event.target.value)} />
        </div>
        <div class="flex-child">
          <h4>Sort {categoryTitle}:</h4>
          <Select options={options} />
        </div>
      </div>
      <div className="categories">
        <div>
          {categoryData.map((item, i) => {
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
