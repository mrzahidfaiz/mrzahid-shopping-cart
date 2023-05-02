const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      console.log(state);
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[index] };
        updatedItem.quantity++;
        updatedCart[index] = updatedItem;
      }
      return { ...state, cart: updatedCart };
    }
    case "DECREMENT_PRODUCT": {
      const updatedCart = [...state.cart];
      const itemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updatedCart[itemIndex] };
      if (updatedItem.quantity === 1) {
        const filteredCart = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return { ...state, cart: filteredCart };
      } else {
        updatedItem.quantity--;
        updatedCart[itemIndex] = updatedItem;
        return { ...state, cart: updatedCart };
      }
    }
    default:
      return state;
  }
};

export default cartReducer;
