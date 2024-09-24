import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface CartState {
	cart: Array<{
		pizzaId: number
		name: string
		quantity: number
		unitPrice: number
		totalPrice: number
	}>
}

const initialState: CartState = {
	cart: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			console.log('Action: ', action)
			state.cart.push(action.payload)
		},
		deleteItem(state, action) {
			state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
		},
		increaseItemQuantity(state, action) {
			const item = state.cart.find((item) => item.pizzaId === action.payload)

			if (item) {
				item.quantity++
				item.totalPrice = item.quantity * item.unitPrice
			}
		},
		decreaseItemQuantity(state, action) {
			const item = state.cart.find((item) => item.pizzaId === action.payload)

			if (item) {
				item.quantity--
				item.totalPrice = item.quantity * item.unitPrice
			}

			if (item?.quantity === 0) {
				cartSlice.caseReducers.deleteItem(state, action)
			}
		},
		clearCart(state) {
			state.cart = []
		},
	},
})

export const getCart = (state: RootState) => state.cart.cart

export const getTotalCartQuantity = (state: RootState) => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)

export const getTotalCartPrice = (state: RootState) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)

export const getCurrentQuantityById = (id: number) => (state: RootState) =>
	state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
