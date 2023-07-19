import React, {useState} from "react";

//include images into your bundle



//create your first component
const Home = () => {

	const [frase, setFrase] = useState("");
	const [tarea, setTarea] = useState(["Tarea1", "Tarea2", "Tarea3", "Tarea4"]);

	
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
		<div>
		<form onSubmit={handleSubmit}>
			<input type="text" value={frase} onChange={e => setFrase(e.target.value)}/>
		</form>
		<ul> {tarea.map((item) => <li onClick={ () => handleCancel(item)}>  {item}  </li>)}
		{/* {tarea.map((item) => {return (<li> {item} </li>)})} */}
		</ul>
		</div>
		
	);		
};

export default Home;
