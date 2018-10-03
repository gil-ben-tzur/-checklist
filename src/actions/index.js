let nextTodoId = 0 
    
export const addItem = (title,description,status) => (

{
  type: 'ADD_ITEM',
  id:title.replace(/\s/g,'_') + nextTodoId++,
  itmurl:title.replace(/\s/g,'_'),
  title,
  description,
  status:status
})

export const setStatus = (id,status) => (
{
	type: 'SET_STATUS',
	id,
	status
})

export const deleteItem = (id) => (
{
	type: 'DELETE_ITEM',
	id,
	
})
