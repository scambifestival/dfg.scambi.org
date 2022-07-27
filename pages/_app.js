import Layout from '../components/layout';
import { Context } from '../context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Context>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Context>
	);
}

export default MyApp;
