import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken, useCurrentUser } from "../../redux/features/authSlice";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  adminOnly?: boolean;
}

const ProtectedRoute = ({ children, adminOnly = false }: ProtectedRouteProps) => {
  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(useCurrentUser);

  if (!token) {
    // If the user is not logged in, redirect to the login page
    return <Navigate to="/login" replace={true} />;
  }

  if (adminOnly && user?.role !== "ADMIN") {
    // If the route is admin-only and the user is not an admin, redirect to the home page or some other page
    return <Navigate to="/" replace={true} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
