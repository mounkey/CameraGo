import  Navegator from "./navegator/index";
import { Provider } from "react-redux";
import { init } from "./base";
import store from "./store";

export default function App() {
  init();
  return (
    <Provider store={store}>
      <Navegator />
    </Provider>
  );
}