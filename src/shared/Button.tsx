import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

function Button({ children, disabled, to, type }: PropsWithChildren<any>) {
	const base =
		'inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed'

	const styles = {
		primary: base + ' px-4 py-3 md:px-6 md:py-4',
		small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
	}

	if (to) {
		return (
			<Link className={styles[type as 'primary' | 'small']} to={to}>
				{children}
			</Link>
		)
	}

	return (
		<button disabled={disabled} className={styles[type as 'primary' | 'small']}>
			{children}
		</button>
	)
}

export default Button
