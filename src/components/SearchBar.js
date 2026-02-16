import React, { useState } from "react";
import {SearchIcon} from "lucide-react";

function SearchBar() {
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const [search, setSearch] = useState("");

    const handleClick = () => {
        setIsSearchVisible(!isSearchVisible);
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("search query : ",search);
    }
    return(
        <div className="flex rounded-full bg-white p-3">
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isSearchVisible ? "w-48 opacity-100" : "w-0 opacity-0"
            }`}>
                <form className="flex items-center h-4" onSubmit={handleSubmit}>
                    <input onChange={handleInputChange} value={search} className="w-full h-4 p-2 border-0 focus:border-0 focus:outline-none text-sm" type="text" placeholder="Examples, Suggetions.."/>
                </form>
            </div>
            <SearchIcon size={20} onClick={handleClick} />
        </div>

    )
}
export default SearchBar;