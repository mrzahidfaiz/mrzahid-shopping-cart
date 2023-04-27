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
        updatedItem.qty++;
        updatedCart[index] = updatedItem;
      }
      return { ...state, cart: updatedCart };
    }
    default:
      return state;
  }
};

export default cartReducer;
