import React, {useState} from 'react'
import style from './links.module.css'
import EditableLink from './editableLink.jsx'
import SimpleLink from './simpleLink.jsx'
let Links =(props)=>{
	let [editable, setEditable] = useState({id: null, text: ''})
	let defaultLinks = JSON.parse(localStorage.links??"[]")
	const save = (name, address, id)=>{
    	let newArr=JSON.stringify([...defaultLinks, {name, address, id}])
    	localStorage.setItem("links", newArr)
    }
    const saveEdit = ()=>{
    	const num = props.links.findIndex(link=>link.id===editable.id)
    	const name = props.links.find(link=>link.id===editable.id).name
    	props.editLink(name, editable.text, editable.id, num)
    	let arr =[...defaultLinks.slice(0, num), {name, address: editable.text, id: editable.id}, ...defaultLinks.slice(num+1)]
    	localStorage.setItem("links", JSON.stringify(arr))
    }
    const addLink = ()=>{
    	let address=`${props.currentProtocol}://${props.currentText}:${props.currentPort+props.currentEnd}`
    	props.addLink(props.currentText, address, props.links.length)
    	save(props.currentText,address,props.links.length)
    }
	return(
	<div>
		<div className={style.btn__wrapper}> 
		<div>
			<button onClick={()=>{props.changeProtocol('http')}} className={`${style.btn} ${props.currentProtocol==='http'?style.active:''}`}>http</button>
			<button onClick={()=>{props.changeProtocol('https')}} className={`${style.btn} ${props.currentProtocol==='https'?style.active:''}`}>https</button>
		</div>
		<div>
			<label htmlFor='portInput'>Port: </label>
			<input id="portInput" type="number" min='0' placeholder="Enter the port" value={props.portText} onChange={(e)=>{props.changeTextPort(e.target.value)}}/>
			<button onClick={()=>{props.changePort()}} className={style.btn}>set</button>
		</div>
		<div>
			<label htmlFor='endInput'>Ending: </label>
			<input id="endInput" type="text" value={props.endText} onChange={(e)=>{props.changeEndText(e.target.value)}}/>
			<button onClick={()=>{props.changeCurrentEnd()}} className={style.btn}>set</button>
		</div>
		</div>
		<div className={style.table}>
			<div className={style.section}>Contour Name</div>
			<div className={style.section}>Links</div>
			<div className={style.section}></div>
			<div className={style.section}>Old Front</div>
			{props.links.map(item=>{
				return(
				editable.id===item.id?
				<EditableLink key={item.id} item={item} style={style} editable={editable} saveEdit={saveEdit} setEditable={setEditable}/>
				:
				<SimpleLink key={item.id} item={item} style={style}  setEditable={setEditable}/>
				)
			})}
		</div>
	
	<input placeholder="Enter the name of contour"  type="text" onChange={(e)=>{props.changeText(e.target.value)}} value={props.currentText}/>
	<button onClick={addLink}>Add Link</button>
	</div>
		)
}
export default Links
