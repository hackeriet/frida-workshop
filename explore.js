'use strict';

var addr = ptr('0x55a7ca8b66f0')

Interceptor.attach(addr, {
  onEnter: function (args) {
    send({ type: 'need-input' })

    var operation = recv(function (res) {
      args[0] = ptr(res)
    })
    operation.wait()
  }
})

