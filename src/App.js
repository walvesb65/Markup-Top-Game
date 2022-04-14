import React from 'react';
import '../src/htdocs/style/globalstyle.css'
import MarkupPage from "./htdocs/script/pages/MarkupPage/index";
import { AuthContext } from './provider/context';

function App() {

  const { user, setUser } = React.useContext(AuthContext)
  console.log(user);
  
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setUser({name: e.target.value})}
      ></input>
      <MarkupPage />
    </div>
  );
}

export default App;
