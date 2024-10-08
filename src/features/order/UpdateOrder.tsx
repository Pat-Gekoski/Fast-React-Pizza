import { useFetcher } from 'react-router-dom'
import Button from '../../shared/Button'
import { updateOrder } from '../../services/apiRestaurant'

function UpdateOrder({ order }: any) {
	const fetcher = useFetcher()

	return (
		<fetcher.Form method='PATCH' className='text-right'>
			<Button type='primary'>Make Priority</Button>
		</fetcher.Form>
	)
}

export default UpdateOrder

export async function action({ params }: any) {
	const data = { priority: true }
	await updateOrder(params.orderId, data)
	return null
}
