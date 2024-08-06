import { Fragment } from "react";
import ButtonMui from "../../common/base-mui-extend/button/Button.base";

const UiExample = () => {
  return (
    <Fragment>
      <div className="ui-component flex flex-col gap-4 p-4">
        <ButtonMui variant="contained" color="success" fullWidth={true} onClick={() => console.log('click')}>Default</ButtonMui>
      </div>
    </Fragment>
  )
}

export default UiExample