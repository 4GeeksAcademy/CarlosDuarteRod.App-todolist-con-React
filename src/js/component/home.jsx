import React, {useState} from "react";

//include images into your bundle



//create your first component
const Home = () => {

	const [frase, setFrase] = useState("");
	const [tarea, setTarea] = useState([]);

	
	const handleSubmit = (e) => {
		e.preventDefault();
		setTarea([...tarea, frase]);
		setFrase("");
	}

	const handleCancel = (element) => {
		// console.log (linea);
		// let lista1 = tarea.filter((item) => item !== element )
		// console.log (lista1, tarea);
		// setTarea(lista1);
		// console.log (lista1, tarea);
		setTarea(tarea.filter((item) => item !== element))
	}

	return(
		<div className="container">
		<form onSubmit={handleSubmit}>
			<input type="text" value={frase} onChange={e => setFrase(e.target.value)}/>
		</form>
		<ul> {tarea.map((item) => <li>  {item} <button onClick={ () => handleCancel(item)} type="button" class="btn-close" aria-label="Close" ></button> </li> )} 
		{/* {tarea.map((item) => {return (<li> {item} </li>)})} */}
		</ul>
		<footer>
			{tarea.length} {"item left"}
		</footer>
		</div>
		
	);		
};

export default Home;
