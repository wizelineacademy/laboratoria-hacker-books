import Layout from './layout';
import Home from '../../containers/home';

export default { 
  component: Layout,
  subcomponents: { Home },
  title: 'Layout', };

export const simple = () => {
  return (
      <Layout>
        <Home />
      </Layout>
  );
};
