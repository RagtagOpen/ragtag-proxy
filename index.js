#!/usr/bin/env node

var path = require('path')
var spawn = require('child_process').spawn
var cmd    = spawn(
      path.join(__dirname, 'node_modules', '.bin', 'local-ssl-proxy'),
      [
        '-c', path.join(__dirname, 'ssl.crt'),
        '-k', path.join(__dirname, 'ssl.key'),
        '--hostname', 'local.ragtag.cloud',
      ].concat(process.argv.slice(2))
    )

cmd.stdout.on('data', function (data) {
  console.log(data.toString());
})

cmd.stderr.on('data', function (data) {
  console.error(data.toString());
})
