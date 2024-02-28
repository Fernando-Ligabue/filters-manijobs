import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Searchbar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        onSearch(searchQuery);
    }, [searchQuery]);

    return (
        <div className="w-full px-10 mb-5">
            <div className="w-full flex items-center gap-5">
                <div className="w-full flex items-center gap-3 bg-white rounded-lg px-4 shadow-sm border border-gray-200">
                    <input
                        type="text"
                        placeholder="Função e localidade"
                        className="w-full h-14 bg-white rounded-lg outline-none text-gray-700"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

Searchbar.propTypes = {
    onSearch: PropTypes.func,
};

export default Searchbar;
