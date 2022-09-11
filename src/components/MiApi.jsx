import React, {useState, useEffect} from 'react'

const  MiApi = () => {
  //setear los hooks useState
  const [ info, setInfo ] = useState([]) //arreglo vacio
  const [ results, setResults ] = useState([])
  

  //función para traer los datos de la API
  const URL = 'https://aves.ninjas.cl/api/birds'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setInfo(data) 
    setResults(data)
  }   

   //función de búsqueda
   const searcher = (e) => {
    let search= e.target.value
      const busqueda = info.filter( (dato) =>dato.name.spanish.toLowerCase().includes(search.toLowerCase()));
      setResults(busqueda)
 }

 
   useEffect( ()=> {
    showData()
  }, [])
  
  //renderizamos la vista
   return (
    <div className='form'>
        <input  onChange={searcher} type="text" placeholder='Search' className='form-control'/>
        <table className='table'>
            <thead>
                <tr className='bglist'>
                    <th>NAME</th>
                    <th>SCIENTIFIC NAME</th>
                </tr>
            </thead>
            <tbody>
                { results.map( (info) => (
                    <tr key={info.uid}>
                        <td>{info.name.spanish}</td>
                        <td>{info.name.latin}</td>
                       
                    </tr>                    
                ))}
            </tbody>
        </table>
    </div>
  )
} 




export default MiApi;