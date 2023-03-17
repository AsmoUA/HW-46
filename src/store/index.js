import { legacy_createStore } from "redux";

const initialState = {
    coffee: 0,
    sugar: 0,

    // Якщо потрібно, щоб кількість завантажувалась після перезавантаження,
    // то треба рокоментувати код нижче, та закоментівати код якіий вище(coffee, sugar)
    
    // coffee: localStorage.getItem("coffee") ? +localStorage.getItem("coffee") : 0,
    // sugar: localStorage.getItem('sugar')  ? localStorage.getItem('sugar') : 0,
    isLoggedIn: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "incrementCoffee":
      return {
        ...state,
        coffee: state.coffee + 1,
      };
    case "decrementCoffee":
      if (state.coffee > 0) {
        return {
          ...state,
          coffee: state.coffee - 1,
        };
      }
      return { ...state };

    case "increase":
      return {
        ...state,
        coffee: state.coffee + action.number,
      };
    case "incrementSugar":
      return {
        ...state,
        sugar: state.sugar + 1,
      };
    case "decrementSugar":
      if (state.sugar > 0) {
        return {
          ...state,
          sugar: state.sugar - 1,
        };
      }
      return { ...state };
    case "increaseSugar":
      return {
        ...state,
        sugar: state.sugar + action.number,
      };
    case "logIn":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "logOut":
      return {
        coffee: 0,
        sugar: 0,
        isLoggedIn: false,
      };
    case "Upload":
      return {
        ...state,
        coffee: +localStorage.getItem("coffee"),
        sugar: +localStorage.getItem("sugar"),
      };
    case "Clear":
      return {
        coffee: 0,
        sugar: 0,
        isLoggedIn: true,
      }
    default:
      return state;
  }
};

const store = legacy_createStore(rootReducer);

export default store;
