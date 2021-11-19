import {Calculator} from "./components/Calculator";
import {Wrapper} from "./styles/Wrapper";
import {GlobalStyle} from "./styles/GlobalStyle";
import {useEffect} from "react";
import {NUMBERS} from "./data/symbols";
import {addNumber} from "./redux/slices/inputSlice";
import {useDispatch} from "react-redux";


function App() {

    const dispatch = useDispatch();

    //@todo update function to handle operation symbols
    const handleKeyDown = (e) => {
        if (NUMBERS.includes(e.key)) {
            dispatch(addNumber(e.key))
        } else {

            console.log(e.key);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        // cleanup this component
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


    //side effect trigger


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
