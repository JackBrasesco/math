function test() {
  storeValue("key1", yo)
  
}


var yo = {
  nestedKey1: "hi!",
  nestedKey2: "bye!",
}
test()

var that = {
  reallyNestedKey: "
}
var hi = {
  notAsNestedKey: "I'm not as nested!",
}
var hello = {
  nestedkey4: that,
}
var nestedkey2 = {
  nestedKey5: hi,
  nestedKey3: hello,
}

var lol = {
  nestedkey1: nestedkey2,
}

