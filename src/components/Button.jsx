

function greetFunction(number){
    console.log(`hello number ${number}`);
}


export const Button = (props)=>{
    return(
        <button onClick={greetFunction(props.number)}>{props.number}</button>
    )
}