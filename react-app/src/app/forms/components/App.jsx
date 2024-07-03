import React, { useState, useEffect } from 'react';

const Component = (props) => {
    const [formData, setFormData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(props.formURL, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const myJson = await response.json();
            console.log("myJson",myJson);
            setFormData(myJson);
        } catch (error) {
            console.error('Fetch error: ', error);
        }
    };

    useEffect(() => {
        getData();
    }, [props.formURL]);

    return (
        <div className="react-form">
            <h1>React Form</h1>
            <p>{props.formURL}</p>
            <p>{formData.data[0].Label}</p>
        </div>
    );
};

export default Component;