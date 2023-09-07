const initialState = {
  trophy: "all",
  country: "all",
  position: "all",
  sortBy: "fantascore",
  limit: 6,
  page: 1,
  results: 44,
};

export default function iconsReducer(state = initialState, action) {
  switch (action.type) {
    case "icons/setTrophy":
      return { ...state, trophy: action.payload };
    case "icons/setCountry":
      return { ...state, country: action.payload };
    case "icons/setPosition":
      return { ...state, position: action.payload };
    case "icons/setSortBy":
      return { ...state, sortBy: action.payload };
    case "icons/setLimit":
      return { ...state, limit: action.payload };
    case "icons/setPage":
      return { ...state, page: action.payload };
    case "icons/setResults":
      return { ...state, results: action.payload };

    default:
      return state;
  }
}

export function setTrophy(trophy) {
  return { type: "icons/setTrophy", payload: trophy };
}

export function setCountry(country) {
  return { type: "icons/setCountry", payload: country };
}

export function setPosition(position) {
  return { type: "icons/setPosition", payload: position };
}

export function setSortBy(sort) {
  return { type: "icons/setSortBy", payload: sort };
}

export function setLimit(limit) {
  return { type: "icons/setLimit", payload: limit };
}

export function setPage(page) {
  return { type: "icons/setPage", payload: page };
}

export function setResults(results) {
  return { type: "icons/setResults", payload: results };
}
