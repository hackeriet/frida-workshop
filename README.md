# Frida Workshop code

## Pre-requisites
- gcc
- make
- python
- frida

This project is using Python 3 syntax.

## Install frida

```
$ pip install frida
```

## Build C file

```
make hello
```

## Notes
- For python3, install frida with `pip3`
- If you have permission issues when attempting to attach to the `hello` process, run `sudo sysctl kernel.yama.ptrace_scope=0`
- To enable ES2015 syntax, use `session.enable_jit()` in the frida python script

