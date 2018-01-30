import * as React from 'react';
import { SyntheticEvent } from 'react';

type Props = {
    user: {
        name: string,
        age: number
    },
    handleClick: SyntheticEvent<HTMLButtonElement>
}

function User(props: Props) {
    return (
        <div className="user-component">
            Name: {props.user.name}, Age: {props.user.age}
            <button onClick={(event) => props.handleClick(event, props.user)}>CLICK </button>
        </div>
    );
}

export default User;
