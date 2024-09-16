import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'

function Header() {
	return (
		<header className='flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-4 uppercase sm:px-6'>
			<Link className='tracking-[5px]' to={'/'}>
				Fast React Pizze Co.
			</Link>

			<SearchOrder />
			<Username />
		</header>
	)
}

export default Header
