import {Calculator} from "./components/Calculator";
import {Wrapper} from "./styles/Wrapper";
import {GlobalStyle} from "./styles/GlobalStyle";

//addedd key press to catch particular buttons
import {useEffect} from "react";

//test function
const keyPressedHandler = () =>{
    console.log('key pressed!')
}



function App() {

    //side effect trigger
    useEffect(() => {
        const keyPressHandler = (e) => {
          console.log(e.key);
        };

        document.addEventListener('keydown', keyPressHandler);
        return () => {
            document.removeEventListener('keydown', keyPressHandler);
        };
    }, []);

    // //side effect trigger end
    // @todo set the event to separate file (redux??), triger update function regarding chosen button

    return (
        <div className="App" >
            <GlobalStyle/>
            <Wrapper>
                <Calculator/>
            </Wrapper>
        </div>
    );
}

export default App;
