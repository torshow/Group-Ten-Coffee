import { useState } from "react";
import CoffeeCard from "../Components/CoffeeCard";
import locationFilter from "./LocationFilter";

function Shop({ coffees, isLoading, error }) {
    const [searchText, setSearchText] = useState("");
    const [selectedOrigins, setSelectedOrigins] = useState([]);

    function handleSearchChange(event) {
        setSearchText(event.target.value);
    }

    function handleOriginToggle(origin) {
        if (selectedOrigins.includes(origin)) {
            setSelectedOrigins(selectedOrigins.filter((o) => o !== origin));
        } else {
            setSelectedOrigins([...selectedOrigins, origin]);
        }
    }

    let visibleCoffees = coffees.filter((coffee) =>
        coffee.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (selectedOrigins.length > 0) {
        visibleCoffees = visibleCoffees.filter((coffee) =>
            selectedOrigins.includes(coffee.origin)
        );
    }
     if (isLoading) {
        return <p className="status-message">Loading coffees...</p>;
     }
    if (error) {
        return <p className="status-message">Error: {error}</p>;
    }

    return (
        <div className="shop">
            <LocationFilter
                coffees={coffees}
                searchText={searchText}
                onSearchChange={handleSearchChange}
                selectedOrigins={selectedOrigins}
                onOriginToggle={handleOriginToggle}
            />
            <div className="coffee-grid">
                {visibleCoffees.map((coffee) => (
                    <CoffeeCard key={coffee.id} coffee={coffee} />
 ))}
            </div>
        </div>
    );
}

export default Shop;