import './carta.css'


export default function Card({ datos }) {
 
  return (
        <div className="carta" style={{ backgroundColor: datos.color }} >
            <div className="carta_header"> 
                <img src={datos.icon} alt="" /> 
            </div>
            <div className="cuerpo">  
                <div>
                  <h1>{datos.titulo}</h1>
                  <div><img src="./src/images/icon-ellipsis.svg" alt="" /></div>
                </div>
                <h1>{datos.horas}hrs</h1>
                <h3>Last Week - {datos.horas_ant}hrs</h3>
            </div>
        </div>


  );
}
