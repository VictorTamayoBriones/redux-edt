import { EquipoSeleccionado } from "./components/EquipoSeleccionado"
import Jugadores from "./components/Jugadores"
import { Provider } from 'react-redux';
import store from "./store";

function App() {

  return (
    <Provider store={store}>
      <main>
        <h1>ED Manager</h1>
        <Jugadores/>
        <EquipoSeleccionado/>
      </main>
    </Provider>
  )

}

export default App
