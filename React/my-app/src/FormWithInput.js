import React, { useRef } from 'react';

const FormWithInput = () => {
    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputRef.current.value);  // Выводим значение в консоль
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="inputField">Введите значение:</label>
                <input
                    id="inputField"
                    type="text"
                    ref={inputRef}
                />
            </div>
            <button type="submit">Отправить</button>
        </form>
    );
};

export default FormWithInput;
