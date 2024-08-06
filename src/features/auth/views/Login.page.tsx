import { FC, useState } from "react"
import { Provider } from "react-redux"
import { Fragment } from "react/jsx-runtime"
import authStore from "../store"
import { useAppDispatch } from "../../../store/redux-hooks"
import { login, PayloadLoginModel } from "../../../apis/auth"

interface LoginPageProps {}
const LoginPage: FC<LoginPageProps> = () => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch()

  const handleLogin = async () => {
    const payload: PayloadLoginModel = {
      phone, 
      password,
      system_code: 'ADMIN',
    }
    try {
      await dispatch(login(payload)).unwrap();
    } catch (error) {
      console.error('Error login', error)
    }    
  }

  return (
    <Provider store={authStore}>
      <Fragment>
        <div className="w-[30vw] p-4 text-sm">
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Số điện thoại</label>
            <input id="phone" type="text" className="border" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <label htmlFor="pass">Mật khẩu</label>
            <input id="pass" type="text" className="border" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>ok</button>
          </div>
        </div>
      </Fragment>
    </Provider>
  )
}

export default LoginPage