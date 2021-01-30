let initialState={
	links:[],
	currentText: '',
	currentProtocol: 'http',
	currentPort: '0000',
	portText: '0000',
	endText: '',
	currentEnd: '',

}
const linksReducer=(state=initialState, action)=>{
	switch(action.type){
		case 'ADD-LINK':
			return (action.firstOpen||state.currentText)?{...state,currentText: '', links: [...state.links, {name: action.linkName, address: action.linkAddress, id: action.id}]}:state
		case 'EDIT-LINK':
			let arr=[...state.links]
			arr[action.num]={name: action.name, address: action.address, id: action.id}
			return {...state, links: arr} 
		case 'CHANGE-AREA-TEXT':
			return {...state, currentText: action.text}
		case 'CHANGE-PROTOCOL':
			return {...state, currentProtocol: action.prot}
		case 'CHANGE-PORT':
			return {...state, currentPort: state.portText}
		case 'CHANGE-TEXT-PORT':
			return {...state, portText: action.text}
		case 'CHANGE-END-TEXT':
			return {...state, endText: action.text}
		case 'CHANGE-CURRENT-END':
			return {...state, currentEnd: state.endText}
		default:			
			return state
	}
}
export const addLink = (Name, Address, id, firstOpen=false)=>({type: 'ADD-LINK', linkName: Name, linkAddress: Address, id: id, firstOpen:firstOpen})
export const editLink = (name, address, id, num)=>({type: 'EDIT-LINK', name:name, address:address, id: id, num: num})
export const changeText = newText=>({type: 'CHANGE-AREA-TEXT', text: newText})
export const changeProtocol = text=>({type: 'CHANGE-PROTOCOL', prot: text})
export const changePort = ()=>({type: 'CHANGE-PORT'})
export const changeTextPort = number=>({type: 'CHANGE-TEXT-PORT', text: number})
export const changeEndText = text=>({type: 'CHANGE-END-TEXT', text: text})
export const changeCurrentEnd = ()=>({type: 'CHANGE-CURRENT-END'})
export default linksReducer