import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({component: Component, ...props}) {
	return props.isLoggedIn ? <Component {...props} /> : <Navigate to="/react-itmo-coins/sign-in" replace />
}

export default ProtectedRoute;