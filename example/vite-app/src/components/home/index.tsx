import { Sidebar } from '../layout/sidebar';
import { Layout } from '../ui-parts/layout';
import { PageTitle } from '../ui-parts/layout/pagetitle';

export const Home = () => {
  return (
    <Layout SidebarComponent={Sidebar}>
      <PageTitle
        breadcrumbs={[
          {
            title: 'ダッシュボード',
            href: '/',
          },
          {
            title: 'ダッシュボード',
            href: '/',
          },
        ]}
        subtitle="説明文など"
      />
    </Layout>
  );
};
