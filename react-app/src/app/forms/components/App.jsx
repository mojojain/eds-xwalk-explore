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
            const updatedData = await Promise.all(
                myJson?.data.map(async (item) => {
                    if (item.option && typeof item.option === 'string' && item.option.endsWith('.json')) {
                        try {
                            const optionResponse = await fetch(item.option);
                            if (optionResponse.ok) {
                                const optionData = await optionResponse.json();
                                const locations = optionData?.data?.map(loc => loc.location).join(",") || "";
                                return { ...item, option: locations };
                            }
                        } catch (error) {
                            console.error('Fetch error for option:', error);
                        }
                    }
                    return item;
                })
            );
            setFormData(updatedData);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };


    useEffect(() => {
        getData();
    }, [formURL]);


    return (
        <div className="react-form">
            <h3>Calculate Your Fee</h3>
            <div className="react-form__sections">
                {formData?.data?.map((data, index) => (
                    <div key={index} className="react-form__section">
                        {data.Type != "submit" && (
                            <label>{data.Label}</label>
                        )}
                        <div className="react-form__section--options">
                            {data.Type === "select" && (
                                <select name={data.Name}>
                                    {data.Options}
                                    {data.Options.split(",").map((option, optIndex) => (
                                        <option key={optIndex} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            )}
                            {data.Type === "text" && (
                                <input type="text" placeholder={data.Placeholder} required={data.Mandatory == "True" ? true : false}/>
                            )}
                        </div>
                        {data.Type === "submit" && (
                            <button>{data.Label}</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Component;