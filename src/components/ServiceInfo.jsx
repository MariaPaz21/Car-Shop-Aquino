import React, { useState } from "react";
import { toppings } from "./toppings";

const getFormattedTime = (time) => `${time} horas`;

function App({formData, setFormData}) {
  const [toppingsState, setToppingsState] = useState(
    toppings.map((topping) => ({
      ...topping,
      checked: false
    }))
  );
  const [total, setTotal] = useState(0);

  const handleOnChange = (index) => {
    const updatedToppingsState = [...toppingsState];
    updatedToppingsState[index].checked = !updatedToppingsState[index].checked;

    setToppingsState(updatedToppingsState);

    const totaltime = updatedToppingsState.reduce((sum, topping) => {
      if (topping.checked) {
        return sum + topping.time;
      }
      return sum;
    }, 0);

    setTotal(totaltime);
  };

  const checkedToppingsNames = toppingsState
    .filter((topping) => topping.checked)
    .map((topping) => topping.name);

  return (
    <div>
      <h3>Select Toppings</h3>
      <ul className="toppings-list">
        {toppingsState.map(({ name, time, checked }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item" value={formData.services}
                    onChange={(event) => setFormData({ ...formData, services: event.target.value })}>
                <div className="left-section">
                  <input
                    type="checkbox"
                    name={name}
                    id={`custom-checkbox-${index}`}
                    value={name}
                    checked={checked}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div  className="right-section">{getFormattedTime(time)}</div>
              </div>
            </li>
          );
        })}
        <li>
          <div className="toppings-list-item">
            <div className="left-section">Total:</div>
            <div value={formData.horas} onChange={(event) => setFormData({ ...formData, horas: event.target.value })} className="right-section">{getFormattedTime(total)}</div>
          </div>
        </li>
      </ul>
      <div>
        <h4>Checked Toppings:</h4>
        <ul >
          {checkedToppingsNames.map((name, index) => (
            <li key={index}>{name} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
