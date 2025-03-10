import { columns, Employee } from "@/components/admin/table/columns";
import DynamicTabs from "@/components/dynamic-tabs/DynamicTabs";
import DialogForm from "@/components/forms/dialog-form/DialogForm";
import RaiseGrievanceForm from "@/components/forms/raise-grievance-form/RaiseGrievanceForm";
import Logo from "@/components/header/logo/Logo";

async function fetchEmployeeData(type: string): Promise<Employee[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = Array(Math.floor(Math.random() * 20) + 1)
                .fill({
                    refNo: "EMP003",
                    location: "New York",
                    description: `${type} Task`,
                    lastUpdate: "2024-11-15",
                })
                .map((item, index) => ({
                    ...item,
                    serialNumber: index + 1,
                }));
            resolve(data);
        }, 1500);
    });
}

const Index = () => {
    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="mt-4 flex flex-col items-center sm:items-start">
                <DialogForm
                    title="SANTUSHT"
                    description="Your well-being is our priority."
                    formComponent={<RaiseGrievanceForm />}
                    buttonLabel="Raise Grievance"
                    logo={<Logo />}
                    location="All India Institute Of Medical Sciences, Ansari Nagar New Delhi"
                />
            </div>
            <div className="mt-6">
                <DynamicTabs
                    tabOptions={["new", "active", "closed", "verified"]}
                    fetchData={fetchEmployeeData}
                    columns={columns}
                />
            </div>
        </div>
    );
};

export default Index;
