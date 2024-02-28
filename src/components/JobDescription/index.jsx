import { useParams } from "react-router";
import { jobs } from "../../Data/jobs";

const JobDescription = () => {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find(job => job.id === jobId) || jobs[0];

  return (
    <div className="w-full xl:w-[95%] flex flex-col gap-8">
      <div className="w-full flex items-start gap-5 bg-white rounded-lg p-9 shadow-sm border border-gray-200 flex-col">
        <span className="text-sky-700 font-semibold text-xl">{job.titulo}</span>
        <p
          className="text-gray-600 leading-7"></p>
        <p className="text-sky-700 text-[15px] font-medium">
          O que precisas para desempenhar suas funções:
        </p>
        <p
          className="text-gray-600 leading-7"
          dangerouslySetInnerHTML={{ __html: job.requirements || "" }}
        ></p>
        <p className="text-sky-700 text-[15px] font-medium">Sobre Nós</p>
        <p
          className="text-gray-600 leading-7"
          dangerouslySetInnerHTML={{ __html: job.about || "" }}
        ></p>
      </div>
    </div>
  );
};

export default JobDescription;
