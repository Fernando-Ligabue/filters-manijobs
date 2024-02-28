import { useState } from "react";
import Filters from "./components/Filters";
import { jobs } from "./Data/jobs";
import Searchbar from "./components/Searchbar";
import ListedJobs from "./components/ListedJobs";


const Home = () => {
	const [filteredJobs, setFilteredJobs] = useState(jobs);
	const [savedJobs, setSavedJobs] = useState([]);

	const handleFilterChange = (filters) => {
    let filtered = [...jobs];
  
    if (filters.areas.length > 0) {
      filtered = filtered.filter((job) => filters.areas.includes(job.setor));
    }
  
    if (filters.funcoes.length > 0) {
      filtered = filtered.filter((job) => filters.funcoes.includes(job.titulo));
    }
  
    if (filters.localidades.length > 0) {
      filtered = filtered.filter((job) => filters.localidades.includes(job.local));
    }
  
    setFilteredJobs(filtered);
  };

	const handleSearch = (query) => {
		const filtered = jobs.filter(
			(job) => 
				job.titulo.toLowerCase().includes(query.toLowerCase()) || 
				job.local.toLowerCase().includes(query.toLowerCase()) || 
				job.setor.toLowerCase().includes(query.toLowerCase()) || 
				job.area.toLowerCase().includes(query.toLowerCase()) || 
				job.vinculo.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredJobs(filtered);
	};

	return (
		<div className="w-full">
			<div id="vagas"  className="w-full mt-12 mb-16">
        <Searchbar onSearch={handleSearch} />
				<div className="w-full flex md:flex-row flex-col items-start relative md:px-8 px-5 gap-9">
					<Filters
						savedJobs={savedJobs}
						onFilterChange={handleFilterChange}
            jobs={filteredJobs}
					/>
					<div className="w-full">
						<ListedJobs
							jobs={filteredJobs}
							savedJobs={savedJobs}
							setSavedJobs={setSavedJobs}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;