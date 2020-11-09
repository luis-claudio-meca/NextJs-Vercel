import { useState } from 'react'

function Contadora (){
    const [contador, setContador] = useState(1)

    function adicionarContador(){
        setContador (contador + 1);
    }

    return (<div>
        <h1>{contador}</h1>
        <button onClick = {adicionarContador}>Adicionar</button>
        </div>)
}



function Home(){
    
    return (
        <div>
        <h1>Home</h1>
        <Contadora />
         </div>
        )
        
    

}

export default Home