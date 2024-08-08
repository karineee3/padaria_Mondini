import '../layouts/produtos.css'
function Doces(){
    return(
        <div>
            <h1>DOCES</h1>
        <div className="produtos">
            <div className="produto">
                <figure id={`doces${1}`}></figure>
                <h4>Bolos no pote</h4>
                <div className="seletores">
                    <span>maracuja</span> <input type="number" name="" id="" />
                </div>
                <div className="seletores">
                    <span>brigadeiro</span> <input type="number" name="" id="" />
                </div>
                <div className="seletores">
                    <span>Leite Ninho</span> <input type="number" name="" id="" />
                </div>
                <div className="seletores">
                    <span>Morango</span> <input type="number" name="" id="" />
                </div>
                <button className="pedido">Adicionar ao carrinho </button>
            </div>
                   {/* Fim da div produto */}

                   <div className='produto'>
                    <figure id={`doces${2}`}></figure>
                    <h4 className="Titulo">Docinhos</h4>
                    <div className="opcoes">

                        <div className={`opcao${1}`}>
                            <h4>Brigadeiro</h4>
                            <input className="Docinhos" type="checkbox" name="" id="" />
                        </div>
                        <div className={`opcao${2}`}>
                            <h4>Beijinho</h4>
                            <input className="Docinhos" type="checkbox" name="" id="" />
                        </div>
                        <button className="pedido"> Adicionar ao carrinho</button>
                    </div>
                   </div>


                
        </div>
        
        </div>
    )
        
    
}export default  Doces  