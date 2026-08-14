import { useState, useEffect } from "react";
import CoffeeCard from "../Components/CoffeeCard";

function Shop({ coffees }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/coffees")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);

    const [searchTerm, setSearchTerm] = useState("");
    const filteredProducts = products.filter(() =>
        coffee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search for coffee..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="coffee-list">
                {filteredProducts.map((coffee) => (
                    <CoffeeCard key={coffee.id} coffee={coffee} />
                ))}
            </div>
        </div>
    );
}

export default Shop;