import { useState } from "react";
import { AddCategory, GitGrid } from "./components";


export const GidExpertApp = () => {

    const [categories, setCategories] = useState(['images']);

    const onAddCategory = (newCategory) => {
        // setCategories(category => [...category, 'Vegueta']);
        newCategory = newCategory.toLowerCase();
        if (categories.includes(newCategory)) return;
        // if (categories.map(category => category.toLowerCase()).includes(newCategory.toLowerCase())) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp - React + Vite</h1>

            <AddCategory onNewCategory={onAddCategory} />

            <ol>
                {categories.map(category => <GitGrid key={category} category={category} />)}
            </ol>
        </>
    )
}