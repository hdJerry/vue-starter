#!/usr/bin/env node
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import chalk from "chalk";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Simple logging helpers
const log = (msg) => console.log(chalk.cyanBright(`→ ${msg}`));
const success = (msg) => console.log(chalk.greenBright(`✔ ${msg}`));
const error = (msg) => console.error(chalk.redBright(`✖ ${msg}`));
/**
 * Recursively copy a folder
 */
function copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    for (const file of fs.readdirSync(src)) {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        const stat = fs.statSync(srcPath);
        if (stat.isDirectory()) {
            copyDir(srcPath, destPath);
        }
        else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
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
    const templateDir = path.resolve(__dirname, "../template");
    log(`Creating Vue starter in ${chalk.yellow(projectName)} ...`);
    try {
        // 1️⃣ Copy template folder
        copyDir(templateDir, targetDir);
        success("Template copied successfully.");
        // 2️⃣ Remove .git folder if any (in case your template has one)
        const gitDir = path.join(targetDir, ".git");
        if (fs.existsSync(gitDir)) {
            fs.rmSync(gitDir, { recursive: true, force: true });
            log("Removed .git folder.");
        }
        // 3️⃣ Install dependencies
        log("Installing dependencies (this may take a moment)...");
        execSync(`cd ${projectName} && yarn install`, { stdio: "inherit" });
        success("Dependencies installed.");
        // 4️⃣ Done message
        console.log(`
${chalk.green.bold("🎉 All done!")}
Now run the following commands:

  ${chalk.cyan(`cd ${projectName}`)}
  ${chalk.cyan("yarn dev")}

Happy coding! 🚀
`);
    }
    catch (e) {
        error("Something went wrong:");
        console.error(e);
        process.exit(1);
    }
}
main();
