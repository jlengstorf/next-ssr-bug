import fs from 'fs';
import path from 'path';

const loadContent = async () => {
  const filePath = path.resolve(process.cwd(), 'src/data/content.txt');
  return fs.readFileSync(filePath, 'utf-8');
};

const transformContent = (text) => {
  return text.replace(/content/, 'boops');
};

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
