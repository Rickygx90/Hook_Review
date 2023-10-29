import { Link } from 'react-router-dom'
import { Context } from '../context/ComponentProvider'
import { useContext } from 'react'

export const Menu = () => {
	const [name] = useContext(Context)
	return (
		<nav
			style={{
				backgroundColor: 'black',
			}}
		>
			<ul
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginTop: '0',
					height: '80px',
				}}
			>
				<Link style={{ marginInline: '10px' }} to={'/'}>
					Bienvenido, {name}
				</Link>
				<div
					style={{
						justifyContent: 'flex-end',
					}}
				>
					<Link style={{ marginInline: '10px' }} to={'/usecontext'}>
						UseContextMain
					</Link>
					<Link style={{ marginInline: '10px' }} to={'/customhook'}>
						CustomHook
					</Link>
					<Link style={{ marginInline: '10px' }} to={'/formcontrol'}>
						FormControl
					</Link>
					<Link style={{ marginInline: '10px' }} to={'/formreacthook'}>
						FormReactHook
					</Link>
					<Link style={{ marginInline: '10px' }} to={'/useeffectwithreturn'}>
						UseEffectWithReturn
					</Link>
					<Link style={{ marginInline: '10px' }} to={'/usememo'}>
						UseMemo
					</Link>
					<Link style={{ marginInline: '10px' }} to={'/usecallback'}>
						UseCallback
					</Link>
					<Link style={{ marginInline: '10px' }} to={'/usereducer'}>
						UseReducer
					</Link>
					<Link style={{ marginInline: '10px' }} to={'/useref'}>
						UseRef
					</Link>
				</div>
			</ul>
		</nav>
	)
}
