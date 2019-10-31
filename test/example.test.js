// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let a = 1;
    let b = 2;

    const expected = 3;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = a + b;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
