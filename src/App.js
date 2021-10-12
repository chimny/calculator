import {Calculator} from "./components/Calculator";
import {Wrapper} from "./styles/Wrapper";
import {GlobalStyle} from "./styles/GlobalStyle";

function App() {

    return (
        <div className="App">
            <GlobalStyle/>
            <Wrapper>
                <Calculator/>
            </Wrapper>
        </div>
    );
}

export default App;
