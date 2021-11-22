import {Calculator} from "./components/Calculator";
import {Wrapper} from "./styles/Wrapper";
import {GlobalStyle} from "./styles/GlobalStyle";
import {useEffect} from "react";
import {NUMBERS, OPERATION_SYMBOLS} from "./data/symbols";
import {addNumber, clearValue, updateValue} from "./redux/slices/inputSlice";
import {useDispatch, useSelector} from "react-redux";
import {addOperator, numberCalcValue, operationSymbols} from "./redux/slices/calculationSlice";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme";

function App() {

    const dispatch = useDispatch();
    const inputValue = useSelector((state => state.inputValue.value));
    const activeOperator = useSelector((state => state.operationSequence.operator));

    function updateInput(currentInput, symbol, operator) {

        let localSymbol = symbol;

        if (symbol === 'Enter') {
            localSymbol = "="
        }

        if (localSymbol === '.') {
            if (currentInput.includes('.') || currentInput.length === 0) {
                return
            }
            dispatch(updateValue(localSymbol));
        } else {

            if (localSymbol === '=') {
                if (operator) {
                    dispatch(operationSymbols(currentInput))
                } else {
                    return
                }

            }

            dispatch(numberCalcValue(currentInput));
            dispatch(addOperator(localSymbol));
            dispatch(clearValue());

        }
    }

    const handleKeyDown = (e) => {
        if (NUMBERS.includes(e.key)) {
            dispatch(addNumber(e.key))
        } else if (OPERATION_SYMBOLS.includes(e.key) || e.key === "Enter") {
            updateInput(inputValue, e.key, activeOperator)
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        // cleanup this component
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });


    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Wrapper>
                    <Calculator/>
                </Wrapper>
            </ThemeProvider>
        </div>
    );
}

export default App;
