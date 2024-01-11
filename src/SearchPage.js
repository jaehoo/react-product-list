import { useState } from "react";
import Formulario from "./Formulario";
import Header from "./Header";

import Lista from "./Lista";
import Loading from "./Loading";
import { Link, Route, Routes } from 'react-router-dom';
import Producto from './Producto.js';
import NotFound from './NotFound.js';


export default function SearchPage(props) {

    // const [products, setProducts]= useState(props.theproducts);
    const products = props.theproducts;
    const [filteredProducts, setFilteredProducts] = useState(products);

    function getCategoryList() {
        //const uniqArray = Array.from(new Set(array));
        const uniqueCategories = [...new Set(products.map(item => item.category))];
        return uniqueCategories;
    }

    const filterByCategory = (value) => {


        // let productsByCategory=products.filter(({ category }) => category.toLowerCase().includes(value.toLowerCase()));
        //     setFilteredProducts(productsByCategory);

        if (value === 'All') {
            setFilteredProducts(products);
        }
        else {
            let productsByCategory = products.filter(({ category }) => category.toLowerCase().includes(value.toLowerCase()));
            setFilteredProducts(productsByCategory);
        }

    };

    const filterByTitle = (query) => {

        setFilteredProducts(products.filter(({ title }) => title.toLowerCase().includes(query.toLowerCase())));
        // console.log(filteredProducts);
    };

    return (
        <div>
            <Header />

            <Formulario filterByTitle={filterByTitle} categories={getCategoryList} filterByCategory={filterByCategory} />
            <Lista products={filteredProducts} />


        </div>
    );
}