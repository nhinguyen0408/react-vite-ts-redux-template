import LoginPage from "../features/auth/views/Login.page"
import UiExample from "../features/ui-example/UiExample.page"

export const NotAuthRouter = {
  login: {
    path: '/login',
    element: LoginPage
  },
  'ui-example': {
    path: '/ui-example',
    element: UiExample
  },
}