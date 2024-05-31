import { useState } from 'react';

//Hooks used to filter the youtube video
const useFilter = () => {
    const [selectedFilters, setSelectedFilter] = useState([]); // state to store the filter selected, set to none to start

    //Function that will add or remove the filter when clicked
    const handleFilterChange = (filter) => {
        setSelectedFilter((prevFilters) =>
            //if filter is in the state then it removed else it store the filter clicked
            prevFilters.includes(filter)
                ? prevFilters.filter((f) => f !== filter)
                : [...prevFilters, filter]
        );
    };

    return { selectedFilters, handleFilterChange };
};

export { useFilter };