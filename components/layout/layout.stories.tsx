import Layout from './layout';
import Home from '../../containers/home';

export default { title: 'Layout' };

export const simple = () => {
  return (
      <Layout>
        <Home />
      </Layout>
  );
};
