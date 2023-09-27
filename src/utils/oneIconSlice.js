const initialState = {
  icon: null,
};

export default function oneIconReducer(state = initialState, action) {
  switch (action.type) {
    case "oneIcon/setIcon":
      return { ...state, icon: action.payload };
    default:
      return state;
  }
}

export function setIcon(icon) {
  return { type: "oneIcon/setIcon", payload: icon };
}
