const { expect } = require('chai');
const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).to.be.undefined;
});

test ('pushing null to stack should not be possible', () => {
   stack.push(1);
   stack.push(null);
   expect(stack.peek()).to.equal(1);
});


test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).to.not.be.undefined;
    expect(stack.peek()).to.equal(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).to.not.be.undefined;
    expect(stack.peek()).to.equal(42);
});