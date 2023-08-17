import { useState } from 'react'
import Loading from './pages/Loading'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import CursorCircle from './components/CursorCircle'
function App() {
	const [loading, setLoading] = useState(false)
	// not used 
	setLoading
	return (
		<div className='w-screen h-screen'>
			{loading ? <Loading /> : (
				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</Router>
			)}
			<CursorCircle />
		</div>
	)
}

export default App
