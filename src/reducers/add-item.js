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
          itemStstus:action.itemStstus[0]
        }
      ]

      case 'TOGGLE_ITEM_STATE':
      return state.map(item =>
        (item.id === action.id)
          ? {...item, completed: !item.completed}
          : item
      )

    default:
      return state
  }
}

export default additem


