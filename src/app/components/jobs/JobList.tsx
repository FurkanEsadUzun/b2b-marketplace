// JobList.tsx
import React, { FC } from "react";
import JobCard from "./JobCard";

interface Job {
  _id: string;
  title: string;
  description: string;
  budget: number;
  location: string;
  categoryId: { name: string };
  subcategoryId: { name: string };
  companyId: { companyName: string };
  deadline: string;
}

const JobList: FC<{ jobs: Job[] }> = ({ jobs }) => {
  if (jobs.length === 0) {
    return <p>Hiç iş bulunamadı.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
