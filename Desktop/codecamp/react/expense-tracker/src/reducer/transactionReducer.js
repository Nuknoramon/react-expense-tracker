export const FETCH_TRANSACTION = "FETCH_TRANSACTION";
export const CREATE_TRANSACTION = "CREATE_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";

export function transactionReducer(state, action) {
  switch (action.type) {
    case FETCH_TRANSACTION: {
      return action.value.transactions;
    }
    // case CREATE_TRANSACTION: {

    // }
    case DELETE_TRANSACTION: {
      const idx = state.findIndex((el) => el.id === action.value.id);
      if (idx !== -1) {
        const cloneState = [...state];
        cloneState.splice(idx, 1);
        return cloneState;
      }
      return state;
    }
    default:
      return state;
  }
}
