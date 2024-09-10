import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
	const menu: Array<any> = useLoaderData();
	
	return (
		<ul>
			{menu.map(pizza => <MenuItem pizza={pizza} key={pizza.id} />)}
		</ul>
	);
}

export async function loader(): Promise<Array<any>> {
	const menu = await getMenu();
	return menu;
}

export default Menu;
