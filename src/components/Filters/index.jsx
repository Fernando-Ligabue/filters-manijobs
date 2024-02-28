import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Filters = ({ onFilterChange, jobs }) => {
  const [areas, setAreas] = useState(null);
  const [funcoes, setFuncoes] = useState(null);
  const [localidades, setLocalidades] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    areas: [],
    funcoes: [],
    localidades: [],
  });

  const [dropdownArea, setDropdownArea] = useState(true);
  const [dropdownFuncao, setDropdownFuncao] = useState(false);
  const [dropdownLocalidade, setDropdownLocalidade] = useState(false);

  useEffect(() => {
    if (jobs) {
      const uniqueAreas = [...new Set(jobs.map(job => job.setor))];
      setAreas(uniqueAreas);

      const uniqueFuncoes = [...new Set(jobs.map(job => job.titulo))];
      setFuncoes(uniqueFuncoes);

      const uniqueLocalidades = [...new Set(jobs.map(job => job.local))];
      setLocalidades(uniqueLocalidades);
    }
  }, []);

  const memoFilterChange = useCallback(onFilterChange, []);

  useEffect(() => {
    if (areas !== null && funcoes !== null && localidades !== null) {
      memoFilterChange(selectedFilters);
    }
  }, [selectedFilters, memoFilterChange]);

  const handleCloseFilters = () => {
    setSelectedFilters({
      areas: [],
      funcoes: [],
      localidades: [],
    });
  };

  const handleFilterChange = (filterType, filterValue, isChecked) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: isChecked
        ? [...prevFilters[filterType], filterValue]
        : prevFilters[filterType].filter(item => item !== filterValue),
    }));
  };

  if (areas === null || funcoes === null || localidades === null) {
    return null; // ou renderizar algum indicador de carregamento
  }

  const toggleDropdownArea = () => {
    setDropdownArea(!dropdownArea);
  };

  const toggleDropdownFuncao = () => {
    setDropdownFuncao(!dropdownFuncao);
  };

  const toggleDropdownLocalidade = () => {
    setDropdownLocalidade(!dropdownLocalidade);
  };
  

  return (
    <div className="md:sticky relative md:top-10 md:w-[500px] w-full p-1">
      <span className="text-gray-800 font-semibold text-[18px] mx-2">
        Filtros
      </span>
      <div className="w-full bg-white mt-5 rounded-lg p-5 border border-gray-200">
        <div className="w-full flex items-center justify-end">
          <span
            className="cursor-pointer text-red-500 font-light text-[10px]"
            onClick={handleCloseFilters}
          >
            Limpar Filtros
          </span>
        </div>
        <div className="w-full flex md:flex-col flex-row justify-between gap-4 mt-5">
          <div className="flex flex-col gap-4">
            <span className="text-gray-800 font-semibold text-[14px] cursor-pointer w-full flex justify-between items-center "
            onClick={toggleDropdownArea}>
              Área
              {dropdownArea ? <FaChevronUp /> : <FaChevronDown /> }
            </span>
            {dropdownArea && (
            <div className="w-full flex flex-col gap-2">
              {areas.map((area) => (
                <div key={Math.random()} className="w-full flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={area}
                    checked={selectedFilters.areas.includes(area)}
                    onChange={(e) =>
                      handleFilterChange("areas", area, e.target.checked)}
                    className="w-[12px] h-[12px]"
                  />
                  <span className="text-gray-800 font-medium text-[12px]">
                    {area}
                  </span>
                </div>
              ))}
            </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
          <span className="text-gray-800 font-semibold text-[14px] cursor-pointer w-full flex justify-between items-center "
            onClick={toggleDropdownFuncao}>
              Função
              {dropdownFuncao ? <FaChevronUp /> : <FaChevronDown /> }
            </span>
            {dropdownFuncao && (
            <div className="w-full flex flex-col gap-2">
              {funcoes.map((funcao) => (
                <div key={Math.random()} className="w-full flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={funcao}
                    checked={selectedFilters.funcoes.includes(funcao)}
                    onChange={(e) =>
                      handleFilterChange("funcoes", funcao, e.target.checked)}
                    className="w-[12px] h-[12px]"
                  />
                  <span className="text-gray-800 font-medium text-[12px]">
                    {funcao}
                  </span>
                </div>
              ))}
            </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
          <span className="text-gray-800 font-semibold text-[14px] cursor-pointer w-full flex justify-between items-center "
            onClick={toggleDropdownLocalidade}>
              Localidade
              {dropdownLocalidade ? <FaChevronUp /> : <FaChevronDown /> }
            </span>
            {dropdownLocalidade && (
            <div className="w-full flex flex-col gap-2">
              {localidades.map((localidade) => (
                <div key={Math.random()} className="w-full flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={localidade}
                    checked={selectedFilters.localidades.includes(localidade)}
                    onChange={(e) =>
                      handleFilterChange("localidades", localidade, e.target.checked)}
                    className="w-[12px] h-[12px]"
                  />
                  <span className="text-gray-800 font-medium text-[12px]">
                    {localidade}
                  </span>
                </div>
              ))}
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Filters.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      setor: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      local: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Filters;
