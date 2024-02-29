import PropTypes from "prop-types";
import JobCard from "../JobCard";
import { useState } from "react";

const ListedJobs = ({ jobs, setSavedJobs, savedJobs }) => {
  const [displayLimit, setDisplayLimit] = useState(6);

  const handleLoadMore = () => {
    setDisplayLimit((prevLimit) => prevLimit + 6);
  };
  return (
    <div className="w-full grid items-stretch justify-between grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 grid-gap-4 gap-8 mt-12 p-1">
      {!jobs.length && (
        <span className="w-full text-center">
          Nenhuma vaga encontrada com os filtros selecionados.
        </span>
      )}
      {jobs.slice(0, displayLimit).map((job) => {
        return (
          <JobCard
            key={job.id}
            job={job}
            setSavedJobs={setSavedJobs}
            savedJobs={savedJobs}
          />
        );
      })}
      <div className="w-full flex justify-start items-start">
      {jobs.length > displayLimit && (
        <button
          onClick={handleLoadMore}
          className="mt-4 bg-sky-700 hover:bg-sky-600 text-white font-medium text-[12px] py-2 px-4 rounded"
        >
          Carregar mais oportunidades
        </button>
      )}
      </div>
    </div>
  );
};

ListedJobs.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      referencia: PropTypes.string.isRequired,
      local: PropTypes.string.isRequired,
      inicio_oferta: PropTypes.string.isRequired,
      fim_oferta: PropTypes.string.isRequired,
      comeco: PropTypes.string.isRequired,
      anuncio: PropTypes.string.isRequired,
      vagas: PropTypes.string.isRequired,
      vinculo: PropTypes.string.isRequired,
      setor: PropTypes.string.isRequired,
      cliente: PropTypes.string.isRequired,
      funcoes: PropTypes.string.isRequired,
      requisitos: PropTypes.string.isRequired,
      oferta: PropTypes.string.isRequired,
      destaque: PropTypes.string.isRequired,
      entrada_imediata: PropTypes.string.isRequired,
      valor: PropTypes.string.isRequired,
      distrito: PropTypes.string.isRequired,
      area: PropTypes.string.isRequired,
      categoria: PropTypes.string.isRequired,
    })
  ).isRequired,
  setSavedJobs: PropTypes.func.isRequired,
  savedJobs: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default ListedJobs;
