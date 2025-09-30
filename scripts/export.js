const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const sanitizePort = (value) => {
  if (value === undefined) return 3000;

  const parsed = Number(value);
  if (!Number.isInteger(parsed)) return 3000;
  if (parsed < 0 || parsed >= 65536) return 3000;
  return parsed;
};

const env = { ...process.env };
env.PORT = String(sanitizePort(env.PORT));
if (!env.SAPPER_EXPORT) {
  env.SAPPER_EXPORT = "true";
}

console.log(`Export starting on port ${env.PORT}`);

const resolveBin = (name) => {
  const ext = process.platform === "win32" ? ".cmd" : "";
  const binPath = path.resolve(__dirname, `../node_modules/.bin/${name}${ext}`);
  if (!fs.existsSync(binPath)) {
    throw new Error(
      `Cannot find executable for ${name}. Did you install the dependency?`
    );
  }
  return binPath;
};

const run = (command, args) => {
  const bin = resolveBin(command);
  const result = spawnSync(bin, args, {
    stdio: "inherit",
    env,
  });

  if (result.status !== 0) {
    process.exit(result.status === null ? 1 : result.status);
  }
};

run("postcss", ["static/css/tailwind.css", "-o", "static/css/global.css"]);
run("sapper", ["export", "--legacy"]);
