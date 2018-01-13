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

> Used for version 1 (`git checkout 1`)

1. Compile and run `hello`
2. Copy the memory address printed by `hello` (e.g. `0x55cac66ea6f0`)
3. Replace the memory address in `explore.js`
4. Run `python3 explore.py`

At this point, the git tag is `1`. (`git checkout 1`)

### Run with frida and 'live-reload'

> Used for version 2 (`git checkout 2`)

1. Compile and run `hello`
2. Run frida to attach to the process: `frida hello -l explore.js`

### Running from tag 3

- Replace the memory address specified in `explore.js` and run with `frida hello -l explore.js`

### Running from tag 4

No need to record the f memory location. Run the python script now, instead of frida directly.

```
$ python explore.py
```

## Notes
- For python3, install frida with `pip3`
- If you have permission issues when attempting to attach to the `hello` process, run `sudo sysctl kernel.yama.ptrace_scope=0`
- To enable ES2015 syntax, use `session.enable_jit()` in the frida python script

## References
- https://www.frida.re/docs/home/
- https://codeshare.frida.re/

