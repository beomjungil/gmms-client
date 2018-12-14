import Link from 'next/link';
import Layout from '../components/common/Layout';

export default () => (
  <Layout title="글 매무새">
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);
