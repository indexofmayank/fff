import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Subscribe from 'sections/subscribe';
import Services from 'sections/services';
import VideoIntro from 'sections/video-intro';
import WorldMap from 'sections/world-map';
import Milestone from 'sections/milestone';
import Blog from 'sections/blog';
import Certificate from 'sections/certificates';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Future care foundation"
          description="Future Care Foundation is a registered NGO under Societies Registration Act 21, 1860, Government of India. It is also registered with 12A and 80G. It is working in the field of Education and Women Empowerment."
        />
        <Banner />
        <Services />
        <VideoIntro />
        <WorldMap />
        <Milestone />
        <Blog />
        <Certificate />

        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
