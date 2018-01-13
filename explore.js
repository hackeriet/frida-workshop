'use strict';

Interceptor.attach(ptr('0x55a1190896f0'), {
  onEnter: function (args){
    console.log('n = ' + args[0].toInt32())
  }
});

