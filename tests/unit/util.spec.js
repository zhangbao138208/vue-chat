import { compare } from '../../src/wfc/util/longUtil'
import { expect } from 'chai'

describe("util", () => {
  let tests = [
    { "name": "期待值等于1", expect: 1, a: 11, b: 1 },
    { "name": "期待值等于-1", expect: -1, a: 11, b: 12 },
    { "name": "期待值等于0", expect: 0, a: 11, b: 11 },
  ]
  for (let test of tests) {
    it(test.name, () => {
      expect(compare(test.a, test.b)).to.equal(test.expect)
    })

  }

})
