import reducer, {setTheme} from '../../redux/slices/themeSlice';
import {firstTheme, secondTheme, thirdTheme} from '../../data/theme';


test('theme should be set to second theme', () => {

    const previousState = {...firstTheme};
    expect(reducer(previousState, setTheme('secondTheme'))).toEqual(
        secondTheme
    )
});


test('theme should shouldn\'t be changed', () => {

    const previousState = {...firstTheme};
    expect(reducer(previousState, setTheme('lala'))).toEqual(
        previousState
    )
});

test('theme should be set to third theme', () => {

    const localData = {...JSON.parse(localStorage.getItem('theme'))};
    const previousState = localData ?? {...firstTheme};

    expect(reducer(previousState, setTheme('thirdTheme'))).toEqual(thirdTheme
    )
});

test('should show state from local storage', () => {

    const localData = {...JSON.parse(localStorage.getItem('theme'))};
    const previousState = localData ?? {...firstTheme};

    expect(reducer(previousState, {})).toEqual(localData
    )
});

test('it should display firstTheme if the localStorage keeps the wrong data', () => {

    const localData = {...JSON.parse(localStorage.getItem('theme'))};
    const defaultState = {...firstTheme};

    expect(reducer(defaultState, setTheme(localData.themeName))).toEqual(defaultState
    )
});