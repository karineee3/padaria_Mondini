const numero = 48996803140
const mensagem ="Olá,%20Bom%20dia.%0AGostaria%20de%20fazer%20um%20pedido"
const link ='https:/wa.me/55'+numero+'?text='+mensagem




function Navbar(){
return(
    <nav>
        <div className="logo" />
        <h1>Padaria Mondini</h1>
        <div className="links">
          <a href="#produtos">Produtos</a>
          <a href="#produtos">Pedidos</a>
          <a href="#produtos">Quem somos</a>
          <a href="#produtos">Trabalhe conosco</a>
        </div>
        <div className="media">
          <a  href={link} ><div className="medialink" id="wa" /></a>
          <a  href="www.instagram.com"><div className="medialink" id="instagram" /></a>
          

        </div>
      </nav>

)
}export default Navbar