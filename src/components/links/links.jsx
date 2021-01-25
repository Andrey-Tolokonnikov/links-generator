import React from 'react'
import style from './links.module.css'
let Links =(props)=>{
    const addLink=()=>{
    	let address=`${props.currentProtocol}://${props.currentText}:${props.currentPort+props.currentEnd}`
    	props.addLink(props.currentText, address, props.links.length)
    	let oldLinks = localStorage.links??"[]"
    	let newArr=JSON.stringify([...JSON.parse(oldLinks), {name: props.currentText, address: address, id: props.links.length}])
    	localStorage.setItem("links", newArr)
    }
 
	return(
	<div>
		<div className={style.btn__wrapper}> 
		<div>
			<button onClick={()=>{props.changeProtocol('http')}} className={`${style.btn} ${props.currentProtocol==='http'?style.active:''}`}>http</button>
			<button onClick={()=>{props.changeProtocol('https')}} className={`${style.btn} ${props.currentProtocol==='https'?style.active:''}`}>https</button>
		</div>
		<div>
			<input type="number" min='0' placeholder="Enter the port" value={props.portText} onChange={(e)=>{props.changeTextPort(e.target.value)}}/>
			<button onClick={()=>{props.changePort()}} className={style.btn}>set</button>
		</div>
		<div>
			<input type="text" placeholder="Ending of link" value={props.endText} onChange={(e)=>{props.changeEndText(e.target.value)}}/>
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
				<React.Fragment key={item.id}>
					<div className={style.section}>{item.name}</div>
					<div className={style.section}><a href={item.address} target='_blank' rel="noreferrer noopener">{item.address}</a><div className={style.control}><i className="far fa-edit"></i></div></div>
				</React.Fragment>
				)
			})}
		</div>
	
	<input placeholder="Enter the name of contour"  type="text" onChange={(e)=>{props.changeText(e.target.value)}} value={props.currentText}/>
	<button onClick={addLink}>Add Link</button>
	</div>
		)
}
export default Links
