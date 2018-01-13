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

## Compile C program

```
make hello
```

## Usage

1. Compile and run `hello`
2. Copy the memory address printed by `hello` (e.g. `0x55cac66ea6f0`)
3. Replace the memory address in `explore.js`
4. Run `python3 explore.py`


## Notes
- For python3, install frida with `pip3`
- If you have permission issues when attempting to attach to the `hello` process, run `sudo sysctl kernel.yama.ptrace_scope=0`
- To enable ES2015 syntax, use `session.enable_jit()` in the frida python script

