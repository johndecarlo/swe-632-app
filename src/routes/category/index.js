import style from './style.css';
import Item from '../../components/item'; 
import data from '../../data/data.json';
import {useEffect, useState} from "preact/hooks";

const Category = ({ type }) => {
	const [categoryData, setData] = useState([]);
	const [categoryTitle, setTitle] = useState("");

	useEffect(() => {
		setTitle(type.charAt(0).toUpperCase() + type.slice(1));
		for (let propName in data) {
			if(propName === type){
				setData(data[propName]);
			}
		}
	}, [type]);

	return(
		<div class={style.component}>
		<h1>{categoryTitle}</h1>
			<div className={style.categories}>
				<div>
					{categoryData.map((item, i) => {
						const title = item.title;
						return <Item key={i} title={title} /> 
					})}
				</div>
			</div>
	</div>
	)
}

export default Category;
