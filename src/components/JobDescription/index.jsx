import { useParams, useNavigate } from "react-router";
import { jobs } from "../../Data/jobs";
import React from "react";

const infoText = function removerTagsHTML(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

function formatarData(dataString) {
  const data = new Date(dataString);
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

const JobDescription = () => {
  const navigate = useNavigate();
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId) || jobs[0];

  const insertBreakRow = function(texto) {
    const textDivided = texto.split(';');
    return textDivided.map((item, index) => (
      <React.Fragment key={index}>
        {index !== 0 && <br />}
        {item}
      </React.Fragment>
    ));
  };



  const inicioOferta = formatarData(job.inicio_oferta);
  const novoAnuncio = new Date() - new Date(job.inicio_oferta) < 7 * 24 * 60 * 60 * 1000;


  return (
    <div
      key={job.id}
      className="w-full bg-gradient-to-b from-sky-800 to-sky-700 mb-5 
      flex flex-col items-center justify-between gap-5 py-4 px-4 md:px-8 pb-8"
    >
      <div className="w-full flex md:flex-row flex-col md:items-center items-start gap-6 relative">
        <div className="w-full flex flex-col gap-[6px] items-start">
          {novoAnuncio && (
            <span className="absolute top-1 right-1 text-white px-2 py-1 text-[8px] border rounded-none">
              Novo
            </span>
          )}
          <div className="flex flex-col items-start gap-2 mt-6">
            <span className="w-full flex justify-between items-center font-semibold text-white text-[18px]">
              {job.titulo}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-medium text-white">
              {job.local}, {inicioOferta}
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 mt-2">
            <p className="text-[12px] font-light text-white">Descrição</p>
            <span className="text-[11px] font-regular text-white">
            {job.oferta.length <= 1 ? "- Sem informações" : insertBreakRow(infoText(job.oferta))}
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 mt-2">
            <p className="text-[12px] font-light text-white">Requisitos</p>
            <span className="text-[11px] font-regular text-white">
            {job.requisitos.length <= 1 ? "- Sem informações" : insertBreakRow(infoText(job.requisitos))}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2 bg-white">
            {job.entrada_imediata === "0" ? (
              <span
                className="text-[11px] px-2 py-1 font-regular  
              bg-gradient-to-r from-yellow-500  to-yellow-600 
              inline-block text-transparent bg-clip-text"
              >
                Disponibilidade Imediata
              </span>
            ) : (
              <span className="text-[11px] px-2 py-1 font-regular"></span>
            )}
          </div>
          <div className="flex flex-col items-start gap-2 mt-2">
            <p className="text-[12px] font-light text-white">Condições</p>
            <span className="text-[11px] font-regular text-white">
            {job.funcoes.length <= 1 ? "- Sem informações" : insertBreakRow(infoText(job.funcoes))}
            </span>
          </div>
          <div className="flex justify-between gap-4 w-full">
            <button
              onClick={() => navigate(`/`)}
              className="text-white font-medium text-[12px] rounded-md border border-1 
            border-white w-[150px] h-10 p-1 mt-3"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
