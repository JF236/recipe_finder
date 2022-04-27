import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
<BrowserRouter>
  <App />
</BrowserRouter>
), document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';

// class Menu extends React.Component {
//     render() {
//       return (
//         <div className="menu">
//           <div className='menuOption' id="menu1">Add A Recipe</div>
//           <div className='menuOption' id="menu2">Search Recipes by Category</div>
//           <div className='menuOption' id="menu3">Search Recipes by Name</div>
//           <div className='menuOption' id="menu3">My Recipes</div>
//           <div className='menuOption' id="menu3">Settings</div>
//         </div>
//       );
//     }
//   }

// //Use props to configure a component when it renders. 
// //Use state to keep track of any component data that you expect to change over time.

// //Using hooks:
// // const [timesPetted, setTimesPetted] = useState(0)
// //  timesPetted = state variable set to initial value (would be 0 in this case)
// //  setTimesPetted = function used to set the variable
// // [<getter>, <setter>] = useState(<initialValue>)

// //To set the state using a button
// // <Button
// // onPress={() => {
// //   setTimesPetted(false);
// // }}

// //Setting props of the button sing the statw of the isHungry variable:
// // disabled={!isHungry}
// // title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
// ///>
// function MenuOption(props){
//   return(
//     <button className='category'
//     onClick={() => console.log("clicked")}>{props.value}</button>
//   );
// }

// class View extends React.Component{
//   //const [searchOptions, setSearchOptions] = useState(0);

//   renderOption(i){
//     return(
//       <MenuOption value={i} newword="new" />
//     );
//   }

//   render(){
//     return(
//       <div style={{align: 'center'}} className='container'>
//         <h1>Recipedia</h1>
//         <Menu />
//         <div>
//         <h3>Step 1: Choose the category of the food you'd like to add:</h3>
//         <div className="step1">
//           {this.renderOption("breakfast")}
//           {this.renderOption("lunch")}
//           {this.renderOption("dinner")}
//           {this.renderOption("snacks")}

//         </div>
//       </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//     <View />,
//     document.getElementById('root'));

//               {/* <div className="category">
//             <button className='breakfast'
//               onClick={() => StepOneOption() }>Breakfast  
//             </button>
//           </div>
//           <div className="category">
//             <p>Lunch</p>
//           </div>
//           <div className="category">
//             <p>Dinner</p>
//           </div>
//           <div className="category">
//             <p>Dessert</p>
//           </div>
//           <div className="category">
//             <p>Snacks</p>
//           </div>  */}