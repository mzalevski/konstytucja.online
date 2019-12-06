import articles from './_articles.js';

const contents = JSON.stringify(articles.map(article => {
	return {
		title: article.title,
		slug: article.slug,
		chapter: article.chapter,
		html: article.html.replace(`href='/`, `href='#`)
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}