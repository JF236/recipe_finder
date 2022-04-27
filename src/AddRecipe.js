import React from 'react';
import './App.css';

class Ingredient extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stepNumber: 1,
            amount: "",
            unit: "Unit",
            ingredient: "",
            ingredientList: ""
        };
      }
    
    render(){
        return (
          <div>
            <div> {this.state.ingredientList} </div>
            <div>
            <input type="number" className="amount" placeholder="Amount" value={this.state.amount} onChange={(evt) => this.updateAmount(evt)} />
            <select className="unit" value={this.state.unit} onChange={(evt) => this.updateUnit(evt)}>
              <option value="unit">Unit</option>
              <option value="cup(s)">Cup(s)</option>
              <option value="liter(s)">Liters(s)</option>
              <option value="gram(s)">Grams</option>
              <option value="teaspoon(s)">Teaspoon(s)</option>
              <option value="tablespoon(s)">Tablespoon(s)</option>
              <option value="milliliter(s)">Milliliters</option>
              <option value="milligram(s)">Milligrams</option>
              <option value="">No Unit</option>
            </select>
            <input type="text" className="ingredientName" placeholder="Ingredient" value={this.state.ingredient} onChange={(evt) => this.updateIngredient(evt)} />
            <button className="addIngredientButton"
            onClick={() => this.addIngredient()}>Add Ingredient</button>
            </div>
          </div>
        );
    }
    updateUnit(evt){
      const val = evt.target.value;
      this.setState({
        unit: val
      });
    }

    updateAmount(evt){
      const val = evt.target.value;
      this.setState({
        amount: val
      });
    }

    updateIngredient(evt){
    const val = evt.target.value;
    this.setState({
      ingredient: val
    });
    }

    addIngredient(){
      const ingredient = this.state.ingredient;
      const amount = this.state.amount;
      const unit = this.state.unit;
      const stepNumber = this.state.stepNumber;
      this.setState({
        ingredientList: this.state.ingredientList + "\n" + stepNumber + ") " + amount + " " + unit + " " + ingredient,
        stepNumber: this.state.stepNumber + 1
      });
      this.state.amount = "";
      this.state.unit = "Unit";
      this.state.ingredient = "";
    }
}

class Steps extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        stepNumber: 1,
        inputValue: "",
        stepString: ""
    };
  }
  
  render(){
    return (
      <div className='container'>
        <h2>Steps</h2>
        <div>{this.state.stepString}
          <input placeholder="Add Step" value={this.state.inputValue} onChange={(evt) => this.updateInputValue(evt)}></input>
          <button onClick={() => this.saveStep()}>Add Step</button>
        </div>
      </div>
    );
  }

  saveStep(){
    const stepString = this.state.inputValue;
    const stepNumber = this.state.stepNumber;
    this.setState({
      stepString: this.state.stepString + stepNumber + ")" + stepString + "\n",
      stepNumber: this.state.stepNumber + 1
      }
    );
    this.state.inputValue = "";
  }

  updateInputValue(evt) {
    const val = evt.target.value;
    this.setState({
      inputValue: val
    });
  }
}


class View extends React.Component{
    render(){
        return(
            <div className='container'>
                <h1>Add a Recipe!</h1>
                <label>Recipe Name: </label>
                <input type="text" name="recipeName" className="recipeName" />
                <br />
                <br />
                <h2>Add Ingredients</h2>
                <Ingredient/>
                <br />
                <Steps/>
                <br />
                <button onClick={() => this.addRecipe()}>Add Recipe!</button>
            </div>
        );
    }
    addRecipe(){
      console.log()
    }
}

export default View;