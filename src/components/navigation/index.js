import { Link } from 'preact-router/match';
import style from './style.css';

const Navigation = () => (
	<header className={style.header}>
		<h1>Ureview</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/write_review">Wrtie Review</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
		</nav>
	</header>
);

export default Navigation;
