const NUMBERS = [{num: '0', gridArea: 'zero'}, {num: '1', gridArea: 'one'}, {num: '2', gridArea: 'two'}, {
    num: '3',
    gridArea: 'three'
}, {num: '4', gridArea: 'four'}, {num: '5', gridArea: 'five'}, {num: '6', gridArea: 'six'}, {
    num: '7',
    gridArea: 'seven'
}, {num: '8', gridArea: 'eight'}, {num: '9', gridArea: 'nine'},]


const OPERATION_SYMBOLS = [{
    mathAction: '*', gridArea: 'multiply',
}, {
    mathAction: '/', gridArea: 'divide',
}, {
    mathAction: '+', gridArea: 'plus'
}, {
    mathAction: '-', gridArea: 'minus'
}, {
    mathAction: '=', gridArea: 'equal'
}, {
    mathAction: '.', gridArea: 'dot'
}];

const OTHER_SYMBOLS = [{
    symbol: 'DEL', gridArea: 'DEL'
}, {
    symbol: 'Reset', gridArea: 'Reset'
},

]

const ALL_SYMBOLS = NUMBERS.concat(OPERATION_SYMBOLS,OTHER_SYMBOLS);



module.exports = {
    NUMBERS, OPERATION_SYMBOLS, OTHER_SYMBOLS,ALL_SYMBOLS
}