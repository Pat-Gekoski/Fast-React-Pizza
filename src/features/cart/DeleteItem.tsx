import { useDispatch } from 'react-redux'
import Button from '../../shared/Button'
import { deleteItem } from './cartSlice'

function DeleteItem({ pizzaId }: any) {
	const dispatch = useDispatch()
	return (
		<Button type='small' onClick={() => dispatch(deleteItem(pizzaId))}>
			Delete
		</Button>
	)
}

export default DeleteItem
