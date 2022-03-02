import React, { useState, useEffect } from 'react';
import Item from '../../components/item';
import data from '../../data/data.json';
import { useParams } from 'react-router-dom';

const Category = () => {
  const [categoryData, setData] = useState([]);
  const [categoryTitle, setTitle] = useState('');
  const { type } = useParams();

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
      <h1 className="category-title">{categoryTitle}</h1>
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
}

export default Category;