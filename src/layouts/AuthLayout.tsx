import { useIsAuthenticated } from "@refinedev/core";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
    const { data: isAuthenticated, isLoading } = useIsAuthenticated();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default AuthLayout;
