
import '../layouts/produtos.css'
function Salgados(){
    return(
        <div>
            <h1>SALGADOS</h1>
            <div className="produtos">
                <div className="produto">
                    <figure id={`salgados${2}`}></figure>
                    <span>Cento de salgados</span>


                </div>  
                {/* Fim da div produto */}

            </div>
            {/* Fim da div produtos */}
        </div>
    )
}export default Salgados