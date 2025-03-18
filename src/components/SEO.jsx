
import { Helmet } from 'react-helmet';
import { Bio } from '../data/constants';

const SEO = () => {
  return (
    <Helmet>
      <title>{Bio.name} - Portfolio</title>
      <meta property="og:title" content={`${Bio.name} - Portfolio`} />
      <meta property="og:description" content={Bio.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${Bio.name} - Portfolio`} />
      <meta name="twitter:description" content={Bio.description} />
    </Helmet>
  );
};

export default SEO;
