interface CompanyDepartmentProps {
    departmentName: string;
  }
  
  export default function CompanyDepartment({ departmentName }: CompanyDepartmentProps) {
    return (
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-bold">Departman</h2>
        <p>{departmentName}</p>
      </div>
    );
  }
  