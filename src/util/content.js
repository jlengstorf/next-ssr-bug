import fs from 'fs';
import path from 'path';

export const loadContent = async () => {
  const filePath = path.resolve(process.cwd(), 'src/data/content.txt');
  return fs.readFileSync(filePath, 'utf-8');
};

export const transformContent = (text) => {
  return text.replace(/content/, 'boops');
};
