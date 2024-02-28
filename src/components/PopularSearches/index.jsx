import PropTypes from "prop-types";

const PopularSearches = ({ onSearch }) => {
    const handleSearch = (term) => {
        onSearch(term);
    };

    const searchTerms = [
        { title: "React" },
        { title: "Vue" },
        { title: "Angular" },
        { title: "Laravel" },
        { title: ".Net" },
        { title: "Senior" },
        { title: "Junior" },
    ];

    return (
        <div className="w-full flex flex-col items-center gap-2 my-6 p-1 md:flex-col overflow-x-auto">
            <span className="ml-1 text-gray-600 text-md font-medium">
                Buscas frequentes:
            </span>
            <div className="flex items-center gap-3 lg:max-w-full max-w-[450px] md:pb-4">
                {searchTerms.map((s) => {
                    return (
                        <span
                            key={s.title}
                            onClick={() => handleSearch(s.title)}
                            className="cursor-pointer text-sky-700 
                            text-md font-light whitespace-nowrap border
                            border-sky-700 rounded-full  md:mb-0 mb-3
                            bg-gray-100 hover:bg-sky-100 transition-all
                            duration-200 px-3"
                        >
                            {s.title}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

PopularSearches.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default PopularSearches;
