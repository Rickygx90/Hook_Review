import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CustomHook } from './Components/CustomHook.jsx'
import { FormControl } from './Components/FormControl.jsx'
import { FormReactHook } from './Components/FormReactHook.jsx'
import { UseReducer } from './Components/UseReducer.jsx'
import { UseEffectWithReturn } from './Components/UseEffectWithReturn.jsx'
import { UseContextMain } from './Components/UseContextMain'
import { Home } from './Components/Home'
import { UseMemo } from './Components/UseMemo'
import { UseCallback } from './Components/UseCallback'
import { UseRef } from './Components/UseRef'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <div>ERROR</div>,
	},
	{
		path: '/usecontext',
		element: <UseContextMain />,
	},
	{
		path: '/customhook',
		element: <CustomHook />,
	},
	{
		path: '/formcontrol',
		element: <FormControl />,
	},
	{
		path: '/formreacthook',
		element: <FormReactHook />,
	},
	{
		path: '/useeffectwithreturn',
		element: <UseEffectWithReturn />,
	},
	{
		path: '/usememo',
		element: <UseMemo />,
	},
	{
		path: '/usereducer',
		element: <UseReducer />,
	},
	{
		path: '/usecallback',
		element: <UseCallback />,
	},
	{
		path: '/useref',
		element: <UseRef />,
	},
])
function App() {
	return <RouterProvider router={router} />
}

export default App
