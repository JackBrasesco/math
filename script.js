function test() {
  addListItem("listKey1", word)
  var word = {
    
  }
  
}


var yo = {
  nestedKey1: "hi!",
  nestedKey2: "bye!",
}

var that = {
  reallyNestedKey: "I'm deeply nested",
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

test()
