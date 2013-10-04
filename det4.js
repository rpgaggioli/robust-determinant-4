

var robustSum = require("robust-sum")
var robustScale = require("robust-scale")
var det3 = require("robust-determinant-3")


module.exports = robustDeterminant4

function robustDeterminant4(m) {
  var A = robustScale(det3([[m[1][1], m[1][2], m[1][3]], 
							[m[2][1], m[2][2], m[2][3]], 
							[m[3][1], m[3][2], m[3][3]]]),  m[0][0])
  var B = robustScale(det3([[m[1][0], m[1][2], m[1][3]], 
							[m[2][0], m[2][2], m[2][3]], 
							[m[3][0], m[3][2], m[3][3]]]), -1*m[0][1])
  var C = robustScale(det3([[m[1][0], m[1][1], m[1][3]], 
							[m[2][0], m[2][1], m[2][3]], 
							[m[3][0], m[3][1], m[3][3]]]),  m[0][2])
  var D = robustScale(det3([[m[1][0], m[1][1], m[1][2]], 
							[m[2][0], m[2][1], m[2][2]], 
							[m[3][0], m[3][1], m[3][2]]]), -1*m[0][3])
							
  return robustSum(robustSum(A, B), robustSum(C, D))
}