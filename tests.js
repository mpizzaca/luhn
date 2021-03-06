const chai = require('chai');
const expect = chai.expect;

const check = require('./index');

describe('check', function() {
  it('returns false for invalid number 79927398710', () => {
    expect(check(79927398710)).to.equal(false);
  });
  it('returns false for invalid number 79927398711', () => {
    expect(check(79927398711)).to.equal(false);
  });
  it('returns false for invalid number 875023945', () => {
    expect(check(875023945)).to.equal(false);
  });
  it('returns true for valid number 8750239454', () => {
    expect(check(8750239454)).to.equal(true);
  });
  it('returns true for valid number 79927398713', () => {
    expect(check(79927398713)).to.equal(true);
  });
  it('returns true for valid number 45987230597283', () => {
    expect(check(45987230597283)).to.equal(true);
  });
});