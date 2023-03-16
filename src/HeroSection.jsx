import logo from "./assests/restauranfood.jpg";
function HeroSection() {
 return (<div className="herosection">
   <div className="hero-text">
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p>Combining traditional techniques with modern taste, at Little 
         Lemon dishes which don't just make you full but make you happy!</p>
         <button>Reserve a table</button>
   </div>
   <img className="hero-pic" src = {logo} alt = "our star dish"></img>
   
 </div>);
}
export default HeroSection;