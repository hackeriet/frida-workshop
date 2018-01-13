'use strict';

var addr = ptr('0x56091048f6f0')
var f = new NativeFunction(addr, 'void', ['int'])

rpc.exports = {
  invokeF: function (n) {
    f(n)
  }
}

