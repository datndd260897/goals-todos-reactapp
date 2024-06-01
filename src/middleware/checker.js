import { ADD_TODO } from "../actions/todos";
import { ADD_GOAL } from "../actions/goals";

const checker = (store) => (next) => (action) => {
  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Nope. That's a bad idea for todos");
  }

  if (
    action.type === ADD_GOAL &&
    action.goal.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Nope. That's a bad idea for goals");
  }
  next(action);
  if (action.type === ADD_TODO) {
    if (store.getState().todos.length > 1) {
      for (var key in store.getState().todos) {
        var todo = store.getState().todos[key];
        if (!todo.complete && todo.name !== action.todo.name) {
          alert(`Don't forget to ${todo.name} !`);
          break;
        }
      }
    }
  }
  if (action.type === ADD_GOAL) {
    alert("That's a great goal!");
  }
  return;
};

export default checker;
