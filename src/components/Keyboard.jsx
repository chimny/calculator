
import {Button} from "./Button";

const numbers = [0,1,2,3,4,5,6,7,8,9]

export const Keyboard = () => {
    return (
        <>
            {
numbers.map(number => <Button number={number}/>)
            }

        </>
    )

}