
import '../layouts/produtos.css'
function Salgados() {
    return (
        <div>
            <h1>SALGADOS</h1>
            <div className="produtos">
                <div className="produto">
                    <figure id={`salgados${2}`}></figure>
                    <h4>Cento de salgados</h4> <p></p>
                    <div className="seletores">
                        <span>Bolinha de queijo</span> <input type="number" name="" id="" />
                    </div>
                    <div className="seletores">
                        <span>Coxinha</span> <input type="number" name="" id="" />
                    </div>
                    <div className="seletores">
                        <span>Mini pasteis</span> <input type="number" name="" id="" />
                    </div>
                    <div className="seletores">
                        <span>Quibe</span> <input type="number" name="" id="" />
                    </div>
                    <button className="pedido">Adicionar ao carrinho</button>
                </div>
                {/* Fim da div produto */}
                <div className='produto'>
                    <figure id={`salgados${3}`}></figure>
                    <h4 className="Titulo">Torta salgada</h4>
                    <div className="opcoes">

                        <div className={`opcao${1}`}>
                            <h4 >Torta de Frango</h4>
                            <input className="Torta" type="checkbox" name="" id="" />
                        </div>
                        <div className={`opcao${2}`}>
                            <h4>Torta de atum</h4>
                            <input className="Torta" type="checkbox" name="" id="" />
                        </div>
                    </div>
                        <button className="pedido"> Adicionar ao carrinho</button>


                </div>
                <div className='produto'>
                    <figure id={`salgados${4}`}></figure>
                    <h4 className="Titulo">Esfirras</h4>
                    <div className="opcoes">

                        <div className={`opcao${1}`}>
                            <h4>Esfirra de carne</h4>
                            <input className="Esfirra" type="checkbox" name="" id="" />
                        </div>
                        <div className={`opcao${2}`}>
                            <h4>Esfirra de queijo</h4>
                            <input className="Esfirra" type="checkbox" name="" id="" />
                        </div>
                    </div>
                    <button className="pedido">Adicionar ao carrinho</button>
                </div>

            </div>
            {/* Fim da div produtos */}

            <div className='produto'>
                <figure id={`salgados${5}`}></figure>
                <h4>Pasteis</h4>
                <div className="seletores">
                    <span>Carne</span> <input type="number" name="" id="" />
                </div>

                <div className="seletores">
                    <span>Queijo</span> <input type="number" name="" id="" />
                </div>

                <div className="seletores">
                    <span>Frango</span> <input type="number" name="" id="" />
                </div>

                <div className="seletores">
                    <span>Camarão</span> <input type="number" name="" id="" />
                </div>
                <button className="pedido"> Adicionar ao carrinho</button>
            </div>
        </div>
    )
} export default Salgados