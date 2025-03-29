// Page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import JobList from "@/app/components/jobs/JobList";
import NoJobsFound from "@/app/components/jobs/NoJobsFound";
import Filter from "@/app/components/jobs/Filter";

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

export default function JobsBySubcategory() {
  const { slug } = useParams();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchJobs = async (filters: any = {}) => {
    const queryParams = new URLSearchParams({ ...filters, subcategoryId: slug } as any).toString();
    console.log('query params:', queryParams)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs?${slug}`);
      if (!response.ok) throw new Error("İş ilanları alınamadı");
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) fetchJobs();
  }, [slug]);

  const handleFilterChange = (filters: any) => {
    fetchJobs(filters);
  };

  if (loading) return <p>Yükleniyor...</p>;

  return (
    <div className="flex p-6 mt-16">
      <Filter onFilterChange={handleFilterChange} />
      <div className="w-3/4 p-4">
        <h1 className="text-3xl font-bold mb-6">İlanlar</h1>
        {jobs.length > 0 ? <JobList jobs={jobs} /> : <NoJobsFound />}
      </div>
    </div>
  );
}
