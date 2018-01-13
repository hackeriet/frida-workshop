'use strict';

var address = '0x559aefb086f0'
var f = new NativeFunction(ptr(address), 'void', ['int'])

// When frida is ran, print these statements through the `hello` process
f(1337)
f(1337)
f(1337)
f(1337)
f(1337)

