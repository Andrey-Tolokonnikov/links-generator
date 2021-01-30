import React from 'react'

const EditableLink = ({item, style, editable, setEditable, saveEdit})=>{
	return(
		<React.Fragment>
			<div className={style.section}>{item.name}</div>
			<div className={style.section}>
				<input autoFocus type="text" value={editable.text} 
				onChange={e=>setEditable({id: item.id, text: e.target.value})} 
				className={style.addressInput}
				onBlur={()=>{saveEdit(); setEditable({id: null, text:""})}}
				></input>
				<div className={style.control}>
					<i className="far fa-edit"></i>
				</div>
			</div>
		</React.Fragment>
		)
}
export default EditableLink 