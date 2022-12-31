describe('calculator.js', ()=>{
    it('should add two numbers', ()=>{
        const calculator = new Calculator();
        expect(calculator.add(1 , 2)).toBe(3);
    });
    
});