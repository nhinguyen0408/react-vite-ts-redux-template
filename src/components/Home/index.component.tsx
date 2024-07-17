import { FC, Fragment, useState } from "react";

type Username = {
	name: string,
	age: number,
}

interface HomePropsType {
	data: Username;
}

const Home: FC<HomePropsType> = ({data}) => {
	const [ userData ] = useState(data)

	return (
		<Fragment>
			<p>This is Home Page</p>
			<p className="font-bold">Hello { userData.name }</p>
		</Fragment>
	)
}

export default Home