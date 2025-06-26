#!/usr/bin/env node

import yargs from "yargs";

// Parse after remove the first 2 arguments (path to node executable and path to js file)
yargs(process.argv.slice(2))
  .commandDir("commands") // Applies command modules for all modules present inside the commands directory. NOTE: commands/ should be relative to the module calling the commandDir function
