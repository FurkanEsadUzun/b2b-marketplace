// JobCard.tsx
import React, { FC } from "react";

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

const JobCard: FC<{ job: Job }> = ({ job }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h3 className="text-xl font-bold">{job.title}</h3>
      <p className="text-gray-500">{job.companyId.companyName}</p>
      <p>{job.description}</p>
      <p>
        <span className="font-semibold">Kategori:</span> {job.categoryId.name} - {job.subcategoryId.name}
      </p>
      <p>
        <span className="font-semibold">Bütçe:</span> {job.budget} TL
      </p>
      <p>
        <span className="font-semibold">Konum:</span> {job.location}
      </p>
      <p>
        <span className="font-semibold">Son Tarih:</span>{" "}
        {new Date(job.deadline).toLocaleDateString("tr-TR")}
      </p>
    </div>
  );
};

export default JobCard;




// NoJobsFound.tsx
