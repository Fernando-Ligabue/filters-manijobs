import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      key={job.id}
      className="md:w-[49%] w-full bg-white mb-5 rounded-lg flex flex-col items-center justify-between 
            gap-5 py-4 px-4 border border-gray-200"
    >
      <div className="w-full flex md:flex-row flex-col md:items-center items-start gap-6">
        <div className="w-full flex flex-col gap-[6px] items-start">
          <span className="w-full flex justify-between items-center font-semibold text-sky-700 text-[18px]">
            {job.titulo}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-medium text-gray-600">
              {job.local}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-medium text-gray-600">
              {job.vinculo}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-medium text-gray-600">
              {job.oferta}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-medium text-gray-600">
              {job.area}
            </span>
          </div>
          <div className="flex items-center gap-2">
              <span className="text-[10px] font-light text-gray-600">
                {job.distrito}
              </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-4 w-full">
        <button
          onClick={() => navigate(`/jobs/${job.id}`)}
          className="text-white font-medium text-[12px] rounded-md bg-sky-700 hover:bg-sky-600 transition-bg duration:200 w-full h-10 p-1"
        >
          Candidatar
        </button>
      </div>
    </div>
  );
};

// Adicionando PropTypes para cada propriedade do componente
JobCard.propTypes = {
  job: PropTypes.shape({
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
  }).isRequired,
  setSavedJobs: PropTypes.func.isRequired,
  savedJobs: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default JobCard;
