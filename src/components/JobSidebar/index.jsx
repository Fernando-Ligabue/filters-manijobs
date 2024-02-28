import { useParams } from "react-router"
import { jobs } from "../../Data/jobs";

const JobSidebar = () => {
    const params = useParams();
    const jobId = params.id;
    const job = jobs.find(job => job.id === jobId) || jobs[0];

    return (
        <div className="w-full relative lg:sticky lg:top-20 md:top-10 lg:w-[450px] ">
            <div className="w-full md:min-w-[320px] flex flex-col gap-4 mb-5
            bg-white rounded-lg p-5 border border-gray-200 ">
                <span className="text-sky-700 font-medium text-lg">{job.titulo}</span>
                <span className="text-gray-600 font-medium text-md">{job.location}</span>
                <div className="flex items-center gap-2">
                    <span className="text-gray-600 text-md font-medium">{job.company}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-gray-600 text-md font-medium">{job.workStatus}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-gray-600 text-md font-medium">{job.contractStatus}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-gray-600 text-md font-medium">{job.salary}</span>
                </div>
                <button className="bg-sky-700 text-white w-full p-2 rounded">
                    <a className="text-decoration-none" href={`mailto:${job.contact}`}>
                        <span className="text-[12px] font-light">
                            Candidatar-se agora!
                        </span>
                    </a>
                </button>
            </div>
        </div>
    )
}

export default JobSidebar