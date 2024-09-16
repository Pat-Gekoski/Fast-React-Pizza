import { useLoaderData } from 'react-router-dom'
import { getMenu } from '../../services/apiRestaurant'
import MenuItem from './MenuItem'

function Menu() {
	const menu: Array<any> = useLoaderData() as Array<any>

	return (
		<ul className='divide-y divide-stone-200 px-2'>
			{menu.map((pizza) => (
				<MenuItem pizza={pizza} key={pizza.id} />
			))}
		</ul>
	)
}

export async function loader(): Promise<Array<any>> {
	const menu = await getMenu()
	return menu
}

export default Menu
