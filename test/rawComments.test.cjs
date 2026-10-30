const assert = require("node:assert/strict");
const { test } = require("node:test");
const handler = require("../api/rawComments.js");

test("comments preserve the reader contract and reject invalid requests without contacting Disqus", async t => {
  const previousKey = process.env.DISQUS_API_KEY;
  const previousFetch = global.fetch;
  t.after(() => {
    global.fetch = previousFetch;
    if (previousKey === undefined) delete process.env.DISQUS_API_KEY;
    else process.env.DISQUS_API_KEY = previousKey;
  });
  let calls = 0;
  global.fetch = async url => {
    calls++;
    assert.equal(url.hostname, "disqus.com");
    assert.equal(url.searchParams.get("forum"), "konstytucja");
    assert.equal(url.searchParams.get("api_key"), "local-test-key");
    return { ok: true, json: async () => ({ response: [{ id: "comment-1" }] }) };
  };
  const run = async (method, referer) => {
    const result = { headers: {} };
    const response = {
      setHeader(key, value) { result.headers[key] = value; },
      status(value) { result.status = value; return this; },
      json(value) { result.body = value; return this; },
    };
    await handler({ method, headers: { referer } }, response);
    return result;
  };
  process.env.DISQUS_API_KEY = "local-test-key";
  assert.equal((await run("POST", "https://konstytucja.online/dyskusja")).status, 405);
  assert.equal((await run("GET", undefined)).status, 403);
  assert.equal((await run("GET", "https://konstytucja.online.attacker.invalid/dyskusja")).status, 403);
  assert.equal((await run("GET", "https://konstytucja.online/1")).status, 403);
  delete process.env.DISQUS_API_KEY;
  assert.equal((await run("GET", "https://konstytucja.online/dyskusja")).status, 503);
  assert.equal(calls, 0);
  process.env.DISQUS_API_KEY = "local-test-key";
  const valid = await run("GET", "https://konstytucja.online/dyskusja");
  assert.equal(valid.status, 200);
  assert.deepEqual(valid.body, { msg: { response: [{ id: "comment-1" }] } });
  assert.equal(valid.headers["Cache-Control"], "no-store");
  global.fetch = async () => { throw new Error("private upstream details"); };
  assert.deepEqual((await run("GET", "https://konstytucja.online/dyskusja")).body,
    { msg: "Comments temporarily unavailable" });
});
