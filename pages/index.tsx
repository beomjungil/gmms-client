import Link from 'next/link';
import Layout from '../components/common/Layout';
import StartButton from '../components/main/StartButton';
import TextBackground from '../components/main/TextBackground';

export default () => (
  <Layout title="글 매무새">
    <Link href="/play">
      <a>
        <StartButton />
      </a>
    </Link>
    <TextBackground />
  </Layout>
);
