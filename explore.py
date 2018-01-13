import codecs
import frida
from frida.application import Reactor
import sys
import threading

script = None

def wait_for_keypress():
  sys.stdin.read()

reactor = Reactor(wait_for_keypress)

def send_value():
  value = input("Enter a number: ")
  script.post(value)


def on_message(message, data):
  print("on_message", message)
  if message["type"] == "send":
    reactor.schedule(lambda: send_value())

session = frida.attach("hello")

with codecs.open("explore.js", 'r', "utf-8") as f:
  source = f.read()


script = session.create_script(source)
script.on("message", on_message)
script.load()

while True:
  value = input("Enter a value:")
  script.post(value)

reactor.run()
