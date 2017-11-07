describe('paranthesis check test cases', () => {

    it('should return true for vaild expression', () => {

        let expr = ' [a+ (b + v)/(d *{e})] ';

        expect(check(expr)).toBe(true);
    });

    it('should return false for invaild expression', () => {

        let expr = ' [a+ (b + v)/(d *e})] ';

        expect(check(expr)).toBe(false);
    });

});