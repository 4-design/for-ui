import { Button } from '@4design/four-ui';
import Link from 'next/link';
import { Layout } from '../components/Layout';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>

    <Button loading={false}>ログイン</Button>
  </Layout>
);

export default IndexPage;
