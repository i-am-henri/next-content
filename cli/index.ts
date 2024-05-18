#!/usr/bin/env node

/*
    Welcome to the source code. Please describe your code well and if your done please create a pull request. Thanks!
*/
import {program} from "commander"
import chalk from "chalk";
import inquirer from "inquirer";
import terminalLink from "terminal-link";
import fs, { writeFileSync } from "fs";
import { exec, execSync } from "child_process";
import { generateScriptTemplate } from "./templates/script.js";
import { generatePageTemplate } from "./templates/page.js";
import init from "./actions/init/index.js";

program
  .name('contentio')
  .description('CLI to add content to any nextjs application')
  .version('0.8.0');

program.command('init')
  .description('Init a first route, add the folder for your content and create a "(content)" tabgroup.')
  .action(async (str, options) => {
    await init()
    console.log("init")
  });

program.parse();