#!/usr/bin/env node
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import chalk from "chalk";

function log(msg: string) {
  console.log(chalk.cyanBright(`→ ${msg}`));
}

function success(msg: string) {
  console.log(chalk.greenBright(`✔ ${msg}`));
}

function error(msg: string) {
  console.error(chalk.redBright(`✖ ${msg}`));
}

async function main() {
  const projectName = process.argv[2];

  if (!projectName) {
    error("Please provide a project name:");
    console.log(chalk.gray("  npx create-vue-starter-with-test my-app\n"));
    process.exit(1);
  }

  const targetDir = path.resolve(process.cwd(), projectName);

  if (fs.existsSync(targetDir)) {
    error(`Folder "${projectName}" already exists. Please choose another name.`);
    process.exit(1);
  }

  log(`Creating Vue starter in ${chalk.yellow(projectName)} ...`);

  try {
    execSync(
      `git clone --depth 1 https://github.com/hdjerry/vue-starter.git ${projectName}`,
      { stdio: "ignore" }
    );
    success("Template cloned successfully.");

    // Remove .git so users start fresh
    fs.rmSync(path.join(targetDir, ".git"), { recursive: true, force: true });
    log("Removed old git history.");

    // Install dependencies
    log("Installing dependencies (this may take a moment)...");
    execSync(`cd ${projectName} && yarn install`, { stdio: "inherit" });
    success("Dependencies installed.");

    console.log(`
${chalk.green.bold("🎉 All done!")}
Now run the following commands:

  ${chalk.cyan(`cd ${projectName}`)}
  ${chalk.cyan("yarn dev")}

Happy coding! 🚀
`);
  } catch (e) {
    error("Something went wrong:");
    console.error(e);
    process.exit(1);
  }
}

main();
