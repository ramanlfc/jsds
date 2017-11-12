describe('string reverse revursive test', () => {

    it('should reverse a string recursively', () => {

        let original = "hello";

        let result = reverse(original);

        expect(result[0]).toBe('o');
        expect(result[result.length - 1]).toBe('h');
    });

});