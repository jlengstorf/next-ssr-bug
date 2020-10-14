import { loadContent, transformContent } from '../util/content';

export default function Index({ content }) {
  const replaced = transformContent(content);
  return <p>{replaced}</p>;
}

export async function getStaticProps() {
  const content = await loadContent();

  return {
    props: { content },
  };
}
