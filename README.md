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

### Normal test run

1. Compile and run `hello`
2. Copy the memory address printed by `hello` (e.g. `0x55cac66ea6f0`)
3. Replace the memory address in `explore.js`
4. Run `python3 explore.py`

At this point, the git tag is `1`. (`git checkout 1`)

### Run with frida and 'live-reload'

1. Compile and run `hello`
2. Run frida to attach to the process: `frida hello -l explore.js`



## Notes
- For python3, install frida with `pip3`
- If you have permission issues when attempting to attach to the `hello` process, run `sudo sysctl kernel.yama.ptrace_scope=0`
- To enable ES2015 syntax, use `session.enable_jit()` in the frida python script

## References
- https://www.frida.re/docs/home/

