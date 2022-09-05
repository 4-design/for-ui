import { Button } from '@3-shake/3design-ui'
import { Sidebar } from './components/layout/sidebar'
import { Layout } from './components/ui-parts/layout'
import './styles/tailwindcss.css'
import { PageTitle } from './components/ui-parts/layout/pagetitle/index'

function App() {
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
      <Button>Button</Button>
    </Layout>
  )
}

export default App
