import frida
import codecs
import sys

session = frida.attach("hello")

with codecs.open("explore.js", 'r', "utf-8") as f:
  source = f.read()

script = session.create_script(source)
script.load()

sys.stdin.read()
