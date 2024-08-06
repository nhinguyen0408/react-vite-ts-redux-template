import DashBoardPage from "../features/dashboard/view/Dashboard.page";

export const AuthRouter = {
  index: {
    path: '/',
    element: DashBoardPage
  },
  dashboard: {
    path: '/dashboard',
    element: DashBoardPage
  },
}