import { useEffect, useState }from 'react';
import Pagination from './Components/Pagination';
import Selector from "./Components/Selector";
import './App.css';


function App() {

    const [ itens, setItens ] = useState([])
    const [ itensPerPage, setItensPerPage] = useState(8)
    const [ currentPage, setCurrentPage] = useState(1)
    const [ pages, setpages] = useState(1)

    const fetchData = async () => {
        const result = await fetch('http://localhost:8000/cliente?page='+currentPage+'&rp='+ itensPerPage)
            .then(response => response.json())
            .then(data => data)
            setItens(result.registros)
            setpages(result.total)
    }


    useEffect(()=>{
        fetchData()
    },[currentPage, itensPerPage])


    

    return (
        <div className="App" >

            <h1>Teste Pagination</h1>


            <Selector  itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />

          



             //itens? condição caso for undefined nao executara o map.
            {itens?.map(item => {
                return <div className="item" key={item.id}>

                    <span>NOME: {item.razao}</span>
                    <span>ID: {item.id}</span>
                    <span>ATIVO: {item.ativo}</span>
                </div>
            })}
             // condição caso resultado nao existir retornar aviso ao ususario
            {itens === undefined ? <h3>Nenhum resuldo encontrado, tente novamente</h3> : '' }

            <Pagination
                pages={pages}
                itensPerPage={itensPerPage}
                setpages={setpages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}

            />

        </div>
    );
}

export default App;
