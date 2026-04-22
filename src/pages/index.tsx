import Layout from '@theme/Layout';

import {Homepage} from '@site/src/components/landing/Homepage';
import {courseSite} from '@site/src/data/site/courseSite';

export default function Home() {
  return (
    <Layout title={courseSite.title} description={courseSite.description}>
      <Homepage />
    </Layout>
  );
}
