import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [layout('./components/layouts/main-layout.tsx', [
    index("./pages/home.tsx"),
    route("templates", "./pages/templates.tsx"),
    route("templates/:temp_name", './pages/templates-form.tsx')
]),
] satisfies RouteConfig;
