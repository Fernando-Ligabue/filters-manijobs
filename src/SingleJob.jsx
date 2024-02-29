import JobDescription from "./components/JobDescription";

const SingleJob = () => {
	return (
		<div className="w-full mt-11 mb-10">
			<div className="w-full flex lg:flex-row flex-col items-start relative md:px-16 px-5 gap-9">
				<div className="w-full">
					<JobDescription />
				</div>
			</div>
		</div>
	);
};

export default SingleJob;