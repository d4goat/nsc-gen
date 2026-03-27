import Templates1Form from "../components/temp-form/templates-1-form";
import type { Route } from "./+types/templates-form";

export function meta({ params }: Route.MetaArgs) {
    return [
        { title: `${params.temp_name} Form` }
    ]
}

export default function TemplatesFormPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Resume Generator</h1>
            <Templates1Form />
        </div>
    );
}
