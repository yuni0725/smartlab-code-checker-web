import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser;
  if (!user) {
    //if user === null
    return <Navigate to="/create-account" />;
  }
  return children;
}
