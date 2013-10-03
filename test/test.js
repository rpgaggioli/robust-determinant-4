
var tape = require("tape")
var det4 = require("../det4.js")

tape.test("det4" , function(t) {
	t.same(det4([[1 ,0, 0, 0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]) , [1])
	t.end()
})