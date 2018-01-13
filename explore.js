'use strict';

send({color: 'red'})

recv(onMessage)

function onMessage(msg) {
  console.log('onMessage', JSON.stringify(msg, null, 2))
  recv(onMessage)
}

