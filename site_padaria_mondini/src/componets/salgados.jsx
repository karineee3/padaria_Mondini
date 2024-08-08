
import '../layouts/produtos.css'
function Salgados() {
    return (
        <div>
            <h1>SALGADOS</h1>
            <div className="produtos">
                <div className="produto">
                    <figure id={`salgados${2}`}></figure>
                    <span>Cento de salgados</span> <p></p>
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

            </div>
            {/* Fim da div produtos */}
        </div>
    )
} export default Salgados