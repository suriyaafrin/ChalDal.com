import "./App.css";
import Popular from "./popular";
import Hiro from "./Hiro";
import Brand from "./brand";
import Shop from "./shop";
import Download from "./download";
import Delivery from "./delivary";
import Warehouse from "./wareHouse";
import Card from "./card";
import Navbar from "./navbar";
// import { brands } from './data.js';
// import { products } from './data.js';
export default function App() {
  

  return (
    <>
      <Navbar /> 
      <Hiro />
      <Card />
      <Popular />
      <Brand />
      <Shop />
      <Download />
      <Warehouse />    
      <Delivery />
    </>
  );
}
