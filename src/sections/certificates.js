/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import BlogPost from 'components/cards/blog-post';
import thumb1 from 'assets/images/certificates/1644051260659_12a-future care (1)_page-0001.jpg';
import thumb2 from 'assets/images/certificates/1644051260659_12a-future care (1)_page-0002.jpg';
import thumb3 from 'assets/images/certificates/1644051260659_12a-future care (1)_page-0003.jpg';
import thumb4 from 'assets/images/certificates/FUTURE CARE-CSR (2)_page-0001.jpg';

const data = [
  {
    id: 1,
    slug: '#how-to',
    thumbnail: thumb1,
    showDescription: true,
    title: ` FORM NO. 10 AC`,
    description: `See rule 17A/11A/2C`,
  },
  {
    id: 2,
    slug: '#how-to',
    thumbnail: thumb2,
    showDescription: false,
    title: `Page 2`,
    description: ``,
  },
  {
    id: 3,
    slug: '#how-to',
    thumbnail: thumb3,
    showDescription: false,
    title: `Page 3`,
    description: ``,
  },
  {
    id: 4,
    slug: '#how-to',
    thumbnail: thumb4,
    showDescription: true,
    title: `GOVERNMENT OF INDIA`,
    description: 'MINISTRY OF CORPORATE AFFAIRS OFFICE OF THE REGISTRAR OF COMPANIES.',
  },
 
];

const masonryOptions = { originTop: true };

const Certificate = () => {
  return (
    <Box as="section" id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Our Certificates"
          title="Populars certificates we updated"
        />
        <Masonry options={masonryOptions} sx={styles.postContainer}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Certificate;

const styles = {
  section: {
    pt: [6, null, null, 9, null, 13],
    pb: [8, null, null, 9, null, 17],
    position: 'relative',
  },
  heading: {
    mb: [6, null, null, 9],
  },
};
