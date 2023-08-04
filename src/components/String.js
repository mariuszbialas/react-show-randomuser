import React, {useState} from 'react';

const String = (props) => {
    const [number, setNumber] = useState([])

    props.list.map(num => setNumber(num));


    return (
        <>
            <p>{number}</p>
        </>
    );
}

export default String;