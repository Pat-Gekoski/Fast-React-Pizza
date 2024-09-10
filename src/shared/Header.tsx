import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
	return (
		<header>
			<Link to={'/'}>Fast React Pizze Co.</Link>

			<SearchOrder />

			<p>Patric</p>
		</header>
	);
}

export default Header;
