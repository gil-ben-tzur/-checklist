//add item
function addItem(title,description){
	return{
			type:'ADD_ITEM',
			title,
			description
		}
}
//remove item
function removeItem(itemID,i){
	return{
			type:'REMOVE_ITEM',
			itemID,
			i
		}
}