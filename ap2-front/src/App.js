import Signin from './components/13MUI/01Signin/Signin';
import MainPage from './components/13MUI/02Crud/MainPage';

function App() {
  const auth = localStorage.getItem("res") === "true";
  // É verificado se o usuário está autenticado, caso esteja, é renderizado a página principal, caso não esteja, é renderizado a página de login
  return (
    <div>
      {auth ? <MainPage /> : <Signin />}
    </div>
  );
}

export default App;
