import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter.jsx";
import Stats from "./components/Stats.jsx";
import { decrement, increment } from "./features/counters/countersSlice.js";
import Posts from "./components/Posts.jsx";
import Todos from "./components/Todos.jsx";

function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const totalCount = counters.reduce((sum, current) => sum + current.value,
0);

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId))
  }

  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId))
  }

  return (
    <div className="appDiv">
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          count={counter.value}
          onIncrement={() => handleIncrement(counter.id)}
          onDecrement={() => handleDecrement(counter.id)}
        />
      ))}
      <Stats totalCount={totalCount} />
      <Posts/>
      <Todos/>
    </div>
  );
}

export default App;
