#include <stdio.h>
#include <unistd.h>

static void f (int n) {
  printf("Number: %d\n", n);
}

int
main (int argc, char * argv[]) {
  int n = 1;

  printf("f is at %p\n", f);

  while (1) {
    f (n++);
    sleep(1);
  }

  return 0;
}
