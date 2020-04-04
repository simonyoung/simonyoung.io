import { getContent, getNoteBySlug } from '../../helpers/contentful';
import Note from '../../components/Note';

const NotePage = ({ siteTitle, data }) => {
  return <Note title={siteTitle} data={data} />;
};

export async function getStaticPaths() {
  const posts = await getContent(process.env.CONTENTFUL_NOTE_CONTENT_TYPE);

  const paths = posts.map(post => ({
    params: { slug: post.fields.note_url }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const siteConfig = await import(`../../data/config.json`);
  const data = await getNoteBySlug(params.slug);

  return {
    props: {
      siteTitle: siteConfig.title,
      data: data
    }
  };
}

export default NotePage;
