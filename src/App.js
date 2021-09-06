import './App.css';
import {useState} from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState("male");
  const [alcometer ,setAlcometer] =useState(0);

  function calculate(e){
    e.preventDefault();
    let alcohol = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let left = grams - (burning * time);

    if (gender === 'male') {
      alcohol = left / (weight * 0.7);
    } else {
      alcohol = left / (weight * 0.6)
    }

    if (alcohol < 0) {
      alcohol = 0;
    }

    setAlcometer(alcohol);
  }

  return (
    <form onSubmit={calculate}>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight</label>
        <input type="number" 
        onChange={e => setWeight(e.target.value)}
        value={weight}></input>
      </div>
      <div>
        <label>Bottles</label>
        <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
      <div>
        <label>Time</label>
        <select name="time" value={time} onChange={e => setTime(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked 
        onChange={e => setGender(e.target.value)}></input>
        <label>Male</label>
        <input type="radio" name="gender" value="female" 
        onChange={e => setGender(e.target.value)}></input>
        <label>Female</label>
      </div>
      <div>
        <label class="result">Alcohol in blood amount:</label>
        <output>{alcometer.toFixed(2)}</output>
      </div>
      <div>
        <button>Calculate</button>
      </div>
    </form>
  );
}

export default App;
