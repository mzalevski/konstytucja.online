module.exports = async function rawComments(request, response) {
  response.setHeader("Cache-Control", "no-store");
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ msg: "Method not allowed" });
  }

  let referer;
  try { referer = new URL(request.headers.referer); } catch {}
  if (!referer || referer.pathname !== "/dyskusja" ||
      !["https://konstytucja.online", "https://staging.konstytucja.online"].includes(referer.origin))
    return response.status(403).json({ msg: "Forbidden" });
  if (!process.env.DISQUS_API_KEY)
    return response.status(503).json({ msg: "Comments temporarily unavailable" });

  const url = new URL("https://disqus.com/api/3.0/forums/listPosts.json");
  url.searchParams.set("forum", "konstytucja");
  url.searchParams.set("api_key", process.env.DISQUS_API_KEY);
  try {
    const upstream = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(5000),
    });
    if (!upstream.ok) return response.status(502).json({ msg: "Comments temporarily unavailable" });
    return response.status(200).json({ msg: await upstream.json() });
  } catch {
    return response.status(502).json({ msg: "Comments temporarily unavailable" });
  }
};
