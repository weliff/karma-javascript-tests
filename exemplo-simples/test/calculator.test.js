/*
 * Unit tests for lib/calculator.js
 */

describe('Calculadora', function() {
  
  beforeAll(function(){
    fixture.setBase('test/fixtures')
  });
  
  // inject the HTML fixture for the tests
  beforeEach(function() {
    fixture.load('calculator.fixture.html');
  });

  // remove the html fixture from the DOM
  afterEach(function() {
    fixture.cleanup()
  });

  // call the init function of calculator to register DOM elements
  beforeEach(function() {
    window.calculator.init();
  });

  it('deve retorna 3 ao somar 1 + 2', function() {
    document.getElementById('x').value = 1;
    document.getElementById('y').value = 2;
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('3');
  });

  it('deve retornar 0 ao passar valor invalido para x', function() {
    document.getElementById('x').value = 'hello';
    document.getElementById('y').value = 2;
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('0');
  });

  it('deve retornar 0 ao passar valor invalido para y', function() {
    document.getElementById('x').value = 1;
    document.getElementById('y').value = 'goodbye';
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('0');
  });

});