import '../layouts/produtos.css'
function Bebidas(){
    return(
        <div>
            <h1>BEBIDAS</h1>
            <div className="produtos">
                <div className="produto">
                    <figure id={`bebidas${1}`}></figure>
                    <h4>Sucos</h4>
                    <div className="seletores">
                        <span>Laranja</span> <input type="number" name="" id="" />

                    </div>
                    <div className="seletores">
                        <span>Uva</span> <input type="number" name="" id="" />

                    </div>
                    <div className="seletores">
                        <span>morango</span> <input type="number" name="" id="" />
                    </div>
                    <div className="seletores">
                        <span>Melancia</span> <input type="number" name="" id="" />
                    </div>
                    <button className="pedido"> Adicionar ao carrinho</button>
                </div>
                 {/* Fim da div produto */}

                 <div className='produto'>
                    <figure id={`bebidas${2}`}></figure>
                    <h4 className="Titulo"> Cafés</h4>
                    <div className="opcoes">

                        <div className={`opcao${1}`}>
                            <h4>Café espresso</h4>
                            <input className="Bebidas" type="checkbox" name="" id="" />

                        </div>
                        <div className={`opcao${2}`}>
                            <h4>Café Americano</h4>
                            <input className="Bebidas" type="checkbox" name="" id="" />
                        </div>
                        <button className="pedido"> Adicionar ao carrinho</button>
                 </div>
                    </div>
                        {/* Fim da div produto */}

                        <div className='produto'>
                            <figure id={`bebidas${3}`}></figure>
                            <h4>CHÁS</h4>
                            <div className="seletores">
                                <span>Chá gelado</span> <input type="number" name="" id="" />

                            </div>
                            <div className="seletores">
                                <span>Chá verde </span> <input type="number" name="" id="" />

                            </div>
                            <div className="seletores">
                                <span>Chá preto</span> <input type="number" name="" id="" />
                            </div>
                            <div className="seletores"> 
                                <span>Chá de gengibre</span> <input type="number" name="" id="" />
                            </div>
                            
                        <button className="pedido"> Adicionar ao carrinho</button>
                        </div>
                                 

            </div>
        </div>
    )
} export default Bebidas