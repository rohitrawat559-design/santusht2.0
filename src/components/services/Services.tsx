import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CheckCircle, MessageSquare, UserPlus, Users } from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";

const stats = {
    beneficiaryNo: 12000,
    skilledTeam: 250,
    grievancesResolved: 9800,
    totalFeedback: 5000,
};

const Services: React.FC = () => {
    const statCards = [
        {
            icon: <UserPlus className="w-8 h-8 text-green-400" />,
            number: stats.beneficiaryNo,
            title: "Beneficiaries",
            description:
                "Patients benefited from dedicated care, support, and services.",
        },
        {
            icon: <Users className="w-8 h-8 text-green-400" />,
            number: stats.skilledTeam,
            title: "Skilled Team Members",
            description:
                "Skilled team ensuring optimal care for your well-being always.",
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-green-400" />,
            number: stats.grievancesResolved,
            title: "Grievances Resolved",
            description:
                "Grievances resolved, ensuring satisfaction and trust in our services.",
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-green-400" />,
            number: stats.totalFeedback,
            title: "Total Feedback",
            description:
                "Feedbacks we received till now to improve our patient care services",
        },
    ];

    return (
        <section className="py-12">
            <div className="container mx-auto text-center capitalize">
                <h2 className="text-[min(6vw,1.5rem)] leading-relaxed font-bold text-center mb-8 text-foreground text-green-500">
                    Services
                </h2>
                <Separator className="bg-gray-300 mx-auto -mt-4 mb-4 w-24 h-[2px]" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
                    {statCards.map((stat, index) => (
                        <Card
                            key={index}
                            className=" text-center border-none shadow-none"
                        >
                            <CardHeader className="flex flex-col items-center">
                                {stat.icon}
                                <CardTitle className="text-[min(4vw,1rem)] leading-relaxed font-bold text-foreground ">
                                    {stat.number}
                                </CardTitle>
                                <CardDescription className="text-[min(4vw,1rem)] leading-relaxed font-bold ">
                                    {stat.title}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-[min(4vw,1rem)] leading-relaxed">
                                    {stat.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
