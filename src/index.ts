#!/usr/bin/env node

import yargs from "yargs";

// Parse after remove the first 2 arguments (path to node executable and path to js file)
const argv = yargs(process.argv.slice(2))
  .usage("Usage: $0 [options] <cmd>")
  .version() // No arguments passed to refer version from package.json
  .alias("version", "v")
  .option("name", {
    alias: "n",
    description: "Your name",
    type:"string",
    demandOption: false
  })
  .boolean("me")
  .parse()

console.log(argv)
