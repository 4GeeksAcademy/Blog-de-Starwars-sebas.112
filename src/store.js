export const initialStore = () => {
  return {
    people: [],
    planets: [],
    vehicles: [],
    favorite: [],

  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
   
    case 'get_people':

      return {
        ...store,
        people: action.payload
      };

    case 'get_planets':

      return {
        ...store,
        planets: action.payload
      };

    case 'get_vehicles':
      return {
        ...store,
        vehicles: action.payload
      };



    case 'add_favorite':

      return {
        ...store,
        favorite: [...store.favorite, action.payload]

      }

    case 'remove_favorite':
      return {
        ...store,
        favorite: store.favorite.filter(item => item.id !== action.payload)
      };



    default:
      throw Error('Unknown action.');
  }
}
