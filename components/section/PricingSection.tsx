import { SectionData } from "@/constants/constant";
import Link from "next/link";

interface PricingSectionProps {
    section: SectionData;
}

const PricingSection: React.FC<PricingSectionProps> = ({ section }) => {
    return (
        <div className="min-h-[100vh] flex flex-auto justify-center items-center mx-auto ">
            <div className="pricing-section my-8 p-4 bg-green-100">
                <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
                <p>{section.description}</p>
                <Link href={section.link}>
                    <a className="btn btn-primary mt-4">Read More &gt;</a>
                </Link>
            </div>
        </div>
    );
};

export default PricingSection;
