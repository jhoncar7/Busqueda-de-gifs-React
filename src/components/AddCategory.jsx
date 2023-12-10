import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        // console.log(event.target.value);
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        // para que no se refresque el navegador
        event.preventDefault();
        // console.log(event);
        // console.log(inputValue);

        const valor = inputValue.trim();

        if (valor.length <= 1) return;

        onNewCategory(valor);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
