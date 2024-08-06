import { Fragment, ReactNode } from "react";
import { useCookies } from "react-cookie";
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRouter } from "../routers/authRouter.router";
import { NotAuthRouter } from "../routers/notAuthRouter.router";

interface ProtectedRouteType {
  children: ReactNode,
}
export const ProtectedRoute = ({ children }: ProtectedRouteType) => {
  const [token] = useCookies(['token']);
  return (
    token
      ? <Navigate to="/login" replace />
      : children
  )
}

const AppDefaultLayout = () => {
  return (
    <Fragment>
      <Routes>
        {
          Object.values(AuthRouter).map(({ path, element: Component }) => (
            <Route 
              key={path} 
              path={path} 
              element={
                <ProtectedRoute children={<Component />} />
              } 
            />
          ))
        }
        {
          Object.values(NotAuthRouter).map(({ path, element: Component }) => <Route key={path} path={path} element={<Component />} />)
        }
      </Routes>
    </Fragment>
  )
}

export default AppDefaultLayout