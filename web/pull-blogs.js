import fetch from 'node-fetch';
import {readFileSync, writeFileSync} from 'fs';
import * as util from 'util';

util.inspect.defaultOptions.depth = null;

async function collection(collectionId, path, sort = 'publishedOn')  {
  const res = await fetch(
    `https://firestore.googleapis.com/v1/projects/jp-bioinspekt/databases/(default)/documents:runQuery`,
    {
      method: 'POST',
      body: JSON.stringify({
        structuredQuery: {
          from: [{
            collectionId
          }],
          where: {
            fieldFilter: {
              field: {
                fieldPath: 'active'
              },
              op: 'EQUAL',
              value: {
                booleanValue: true,
              }
            }
          },
          orderBy: [{
            field: {
              fieldPath: sort
            },
            direction: 'DESCENDING'
          }]
        }
      })
    }
  );

  const items = await res.json();

  return items.map(item => ({
    item,
    path
  }))
}

async function exec() {
	const res = await Promise.all([
    collection('certificates', 'certifikacije', 'createdOn'),
    collection('regulatives', 'zakonske-regulative', 'createdOn'),
    collection('forms', 'obrasci', 'createdOn'),
    collection('posts', 'blog'),
  ]);

	const items = [].concat(...res);

  console.log(items)

	writeFileSync(
		'svelte.config.js',
		readFileSync('svelte.config.js')
			.toString()
			.replace(
				`const BLOGS = [];`,
				`const BLOGS = ${JSON.stringify(items.filter(doc => doc.item.document?.name).map(doc => `/${doc.path}/${doc.item.document.name.split('/').pop()}`))};`
			)
	)

}

exec()
	.then(() => process.exit(0))
	.catch(e => {
		console.error(e);
		process.exit(1);
	})