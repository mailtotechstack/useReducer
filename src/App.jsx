import { useReducer } from "react";
export default function App() {
  function CounterReducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(CounterReducer, { count: 0 });
  return (
    <div>
      <h1>count: {state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>(+1)</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>(-1)</button>
      <button onClick={() => dispatch({ type: "RESET" })}>(Reset)</button>
    </div>
  );
}
