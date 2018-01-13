import frida
import codecs
import sys

session = frida.attach("hello")

with codecs.open("explore.js", 'r', "utf-8") as f:
  source = f.read()

def on_message(message, data):
  print("on_message", message)

script = session.create_script(source)
script.on("message", on_message)
script.load()

sys.stdin.read()
