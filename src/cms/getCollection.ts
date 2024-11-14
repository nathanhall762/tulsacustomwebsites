import fs from 'fs';
import path from 'path';

const getCollection = (directory: string) => {
  const dir = `./public/content/${directory}`;
  const pageFiles = fs
    .readdirSync(path.resolve(dir))
    // .map((file) => `${dir}/${file}`)
    // .filter((file) => file.includes('.json'));
  return pageFiles;
  // .filter(
  //   (file) =>
  //     file !== './public/content/pages/404.json' &&
  //     file !== './public/content/pages/index.json'
  // )
  // .map((file) => {
  //   const raw = fs.readFileSync(path.resolve(file));
  //   const json = JSON.parse(raw.toString());
  //   return {
  //     params: {
  //       slug: file.replace(`${dir}/`, '').replace('.json', ''),
  //       publish: json.enable_page,
  //     },
  //   };
  // });
};

export default getCollection;
