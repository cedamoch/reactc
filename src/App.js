import logo from './logo.svg';
import './App.css';
import Restaurante from './Componentes/Restaurante';
const listaRestaurante = [
  {nombre:"roldos", direccion:"av de la prensa", tipo:"Panaderia", imagen:"https://plus.unsplash.com/premium_photo-1695405363183-e55554168063?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VuJTIwZGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D"},
  {nombre:"KFC", direccion:"Recreo", tipo:"comidarapida", imagen:"https://www.shutterstock.com/image-illustration/david-street-style-graphic-designtextile-600nw-2265632523.jpg"},
  {nombre:"JuanValdes", direccion:"del maestro", tipo:"cafeteria", imagen:"https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720"}
]

function App() {
  return (
    <div className="App">
      {
        listaRestaurante.map((r) => <Restaurante nombre={r.nombre} direccion={r.direccion} tipo={r.tipo} imagen={r.imagen}></Restaurante>)
      }
      
    </div>
  );
}

export default App;
