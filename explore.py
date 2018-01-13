import codecs
import frida

def on_message(message, data):
  print("on_message", message)

session = frida.attach("hello")

with codecs.open("explore.js", 'r', "utf-8") as f:
  source = f.read()


script = session.create_script(source)
script.on("message", on_message)
script.load()

while True:
  value = input("Enter a value:")
  script.post(value)
  script.exports.invoke_f(int(value))

