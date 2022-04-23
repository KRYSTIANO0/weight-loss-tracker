//global styles
import '../styles/global/global.css'
//layout
import Layout from '../components/layout/Layout'
//redux
import { Provider } from 'react-redux'
import store from '../store'
function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}

export default MyApp
