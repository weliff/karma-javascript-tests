describe('Calculadora', function() {
  
  beforeAll(function(){
    fixture.setBase('test/fixtures')
  });
  
  beforeEach(function() {
    fixture.load('calculator.fixture.html');
    window.calculator.init();
  });

  afterEach(function() {
    fixture.cleanup()
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