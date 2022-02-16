import { Router } from 'preact-router';
import Navigation from './navigation';
import Category from '../routes/category';
import Home from '../routes/home';
import Profile from '../routes/profile';
import WriteReview from '../routes/write_review';

const App = () => (
	<div id="app">
		<Navigation />
		<div id="main">
			<Router>
				<Home path="/" />
				<Category path="/category/:type" />
				<Profile path="/profile/" user="me" />
				<Profile path="/profile/:user" />
				<WriteReview path="/write_review/" user="me" />
				<WriteReview path="/write_review/:user" />
			</Router>
		</div>
	</div>
)

export default App;
