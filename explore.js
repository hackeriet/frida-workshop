'use strict';

var puts = new NativeFunction(
  Module.findExportByName(null, 'puts'),
  'int',
  ['pointer'])

function log (msg) {
  puts(Memory.allocUtf8String(msg));
}

send({color: 'red'})

recv(onMessage)

function onMessage(msg) {
  log('onMessage', JSON.stringify(msg, null, 2))
  recv(onMessage)
}

