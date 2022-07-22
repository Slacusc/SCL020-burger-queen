import {useState, useRef} from "react";
import style from "./order.css";




function Mesero() {
  //Funcion menu desplegable
  const [menuId,setMenuId] = useState(0);
  const dropdownRef = useRef(null);
  const onClick = (id) => {
    if(menuId == id) {
      setMenuId(0)
    } else {
      setMenuId(id)
    }
  };
  //Funcion para mostrar cliente
    const [save, setSave] = useState("");
    return (
    <>
      <div className="Mesero">
        <h2>Nombre del cliente:</h2>
      </div>
        <form onSubmit={ev => {
          ev.preventDefault();
          setSave(ev.target.save.value);  
        }}
        >
        <input type="text" name="save" autoComplete="off"></input>
        <button className="postres" type="submit">Ingresar cliente</button>
        <p>Pedido de: {save}</p>
        </form>
      <div className="container">
      <div className="menu-postres">
        <button onClick={()=> onClick(1)} className="opciones">
          <span className="postres">Postres</span>
        </button>
        <nav
          ref={style.dropdownRef}
          className={`menu ${menuId == 1 ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">Pie de Limón</a>
            </li>
            <li>
              <a href="#">Brownie VeggieHappy</a>
            </li>
            <li>
              <a href="#">Flan de tofu</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="menu-entradas">
        <button onClick={()=> onClick(2)} className="opciones">
          <span className="postres">Entradas</span>
        </button>
        <nav
          ref={style.dropdownRef}
          className={`menu ${menuId == 2 ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">Sopa de tofu</a>
            </li>
            <li>
              <a href="#">Palta reina</a>
            </li>
            <li>
              <a href="#">Happy bowl</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="menu-hamburguesas">
        <button  onClick={()=> onClick(3)} className="opciones">
          <span className="postres">Hamburguesas</span>
        </button>
        <nav
          ref={style.dropdownRef}
          className={`menu ${menuId == 3 ?"active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">Seitan Burguer</a>
            </li>
            <li>
              <a href="#">Tofu Burguer</a>
            </li>
            <li>
              <a href="#">Falafel Burguer</a>
            </li>
          </ul>
        </nav>
      </div>
    
    
      <div className="menu-acomp">
        <button onClick={()=> onClick(4)} className="opciones">
          <span className="postres">Acompañamientos</span>
        </button>
        <nav
          ref={style.dropdownRef}
          className={`menu ${menuId == 4 ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">Papas fritas</a>
            </li>
            <li>
              <a href="#">Champiñones crujientes</a>
            </li>
            <li>
              <a href="#">Aros de cebolla</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
        <div>
      
         <p>Items:</p>   
         <button className="postres" id="postres">Enviar</button>
         <p>Total:$</p>  
    
    
  </div>
    </>
   )}

   export default Mesero