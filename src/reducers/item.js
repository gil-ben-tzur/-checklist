// 

export default function(){
	return[
	{
		id:1,
		title:"bil",
		description:"item 1 description",
		isList:false
		/*status:{
			onProgress:true,
			onHold:false,
			done:false
		}*/
	},
	{
		id:2,
		title:"Gil Two item list",
		description:"item 2 description",
		isList:true,
		listItems:[
			{checked:false,listIndex:1,listContent:"list one"},
			{checked:false,listIndex:2,listContent:"list 2"},
			{checked:false,listIndex:3,listContent:"list 3"},
			]
		
      
		/*status:{
			onProgress:true,
			onHold:false,
			done:false
		}*/
	}
	,
	{
		id:3,
		title:"gil3",
		description:"item 3 description",
		isList:false
		/*status:{
			onProgress:true,
			onHold:false,
			done:false
		}*/
	}
	]
}