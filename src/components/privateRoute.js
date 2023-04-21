import { Navigate, Route } from 'react-router-dom';

// function PrivateRoute({ path, ...props }) {
//   const isAuthenticated = localStorage.getItem('token');

//   return isAuthenticated ? (
//     <Route {...props} path={path} />
//   ) : (
//     <Navigate to="/login" replace />
//   );
// }

export const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token');
    if (!isAuthenticated) {
      // user is not authenticated
      return <Navigate to="/" />;
    }
    return children;
  };

export default PrivateRoute;

