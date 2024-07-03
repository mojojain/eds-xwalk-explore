import React, { useState, useEffect } from 'react';

const Component = ({ formURL }) => {
    const [formData, setFormData] = useState();

    const getData = async () => {
        try {
            const response = await fetch(formURL, {
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
    }, [formURL]);

    return (
        <div className="react-form">
            <h3>Calculate Your Fee</h3>
            <div className="react-form__sections">
                {formData?.map((data, index) => (
                    <div key={index} className="react-form__section">
                        <label>{data.Label}</label>
                        <div className="react-form__section--options">
                            {data.Type === "select" && (
                                <select name={data.Name}>
                                    {data.Options.split(",").map((option, optIndex) => (
                                        <option key={optIndex} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Component;