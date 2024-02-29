import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Searchbar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        onSearch(searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);

    return (
        <div className="w-full px-10 mb-5">
            <div className="w-full flex items-center gap-5">
                <div className="w-full max-w-96  flex items-center gap-3 rounded-full px-4 shadow-sm border-2 border-sky-900">
                    <input
                        type="text"
                        placeholder="Função e localidade"
                        className="w-full h-12 rounded-full outline-none text-sky-700"
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
