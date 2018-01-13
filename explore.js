'use strict';

Interceptor.attach(ptr('0x55cac66ea6f0'), {
  onEnter: function (args){
    console.log('woot = ' + args[0].toInt32())
    args[0] = ptr(42)
  }
})

