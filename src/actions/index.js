let nextTodoId = 0
export const addItem = title => ({
  type: 'ADD_ITEM',
  id: nextTodoId++,
  title

})
