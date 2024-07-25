import dados from "../data/textos.json"
const numero = 48996803140
const mensagem ="Olá,%20Bom%20dia.%0AGostaria%20de%20fazer%20um%20pedido"
const link ='https:/wa.me/55'+numero+'?text='+mensagem




function Navbar(){
  const links = dados.eng.links
return(
    <nav>
        <div className="logo" />
        <h1>Padaria Mondini</h1>
        <div className="links">
          <a href="#produtos">{links[0]}</a>
          <a href="#produtos">{links[1]}</a>
          <a href="#produtos">{links[2]}</a>
          <a href="#produtos">{links[3]}</a>
        </div>
        <div className="media">
          <a  href={link} ><div className="medialink" id="wa" /></a>
          <a  href="www.instagram.com"><div className="medialink" id="instagram" /></a>
          

        </div>
      </nav>

)
}export default Navbar