import React, { useReducer, useState } from 'react';

const initialState = {
  name: '',
  email: '',
  dob: '',
  color: '',
  salary: 0,
};

const actions = {
  nameChange: 'nameChange',
  emailChange: 'emailChange',
  dobChange: 'dobChange',
  colorChange: 'colorChange',
  salaryChange: 'salaryChange',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.nameChange:
      return { ...state, name: String(action.payload) };
    case actions.emailChange:
      return { ...state, email: String(action.payload) };
    case actions.dobChange:
      return { ...state, dob: String(action.payload) };
    case actions.colorChange:
      return { ...state, color: String(action.payload) };
    case actions.salaryChange:
      return { ...state, salary: parseInt(action.payload) };

    default:
      return { ...state };
  }
};

const validate = (values) => {
  const { name, email, dob, color, salary } = values;

  const validName = name.length;
  const validEmail = () => {
    return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email);
  };
  const validDob = dob.length;
  const validColor = color.length;
  const validSalary = !!salary;

  return Boolean(
    validName && validEmail && validDob && validColor && validSalary
  );
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState('');

  const getChangeHandler = (actionType) => (event) => {
    dispatch({ type: actionType, payload: event.target.value });
    setError('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate(state)) {
      return setError(
        'Something went wrong. Check all fields once again. Thanks.'
      );
    }

    return console.log('123');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={state.name}
          onChange={getChangeHandler(actions.nameChange)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={state.email}
          onChange={getChangeHandler(actions.emailChange)}
        />
      </div>

      <div>
        <label htmlFor="dob">Date of birthday:</label>
        <input
          id="dob"
          name="dob"
          type="date"
          value={state.dob}
          min="2018-01-01"
          max="2018-12-31"
          onChange={getChangeHandler(actions.dobChange)}
        />
      </div>

      <div>
        <label htmlFor="color">Favourite color:</label>
        <input
          id="color"
          name="color"
          type="color"
          value={state.color}
          onChange={getChangeHandler(actions.colorChange)}
        />
      </div>

      <div>
        <label htmlFor="salary">Salary</label>
        <input
          type="range"
          id="salary"
          name="salary"
          min="0"
          max="20000"
          step="1000"
          onChange={getChangeHandler(actions.salaryChange)}
        />
      </div>
      <button type="submit">Submit</button>

      {error && <p>{error}</p>}
    </form>
  );
};

export { Form };
