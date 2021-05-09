import articles from "./_articles.js";
// import createHyphenator from "hyphen";
// import patterns from "hyphen/patterns/pl";

// const hyphenateHTML = createHyphenator(patterns, { async: false, html: true });

const lookup = new Map();

articles.forEach((article) => {
  article.html = article.html;
  lookup.set(article.slug, JSON.stringify(article));
});

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  if (lookup.has(slug)) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
