/*import UserTest from './UserTest';
import NLSubscribe from './NLSubscribe';*/

import Dropdown from '../../components/dropdown';

export default function Home() {
	const data = [{ title: 'About us', href: '/about' }];
	return (
		<div>
			<p>Home</p>
			<Dropdown children={data} content='About' />
		</div>
	);
}
