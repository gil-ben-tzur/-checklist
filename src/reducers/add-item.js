const additem = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description:action.description,
          itmurl:action.itmurl,
          status:action.status
        }
      ]

      case 'SET_STATUS':
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            status: action.status
          }
        } else {
          return item
        }
      })
      case 'DELETE_ITEM':
      return state.filter((item)=>
              item.id !== action.id
            )
    default:
      return state
  }
}

export default additem


