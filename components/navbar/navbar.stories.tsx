import Navbar from './navbar';

export default { title: 'Navbar' };

export const simple = () => <Navbar color='white' value='value' setValue={(e: 'setValue')=> e} />;