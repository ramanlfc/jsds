describe('string functions test cases', () => {

    describe('string function strstr test cases', () => {

        it('should find substring in a string', () => {

            let haystack = 'peter';
            let needle = 'er';

            let idx = strstr(haystack, needle);

            expect(idx).toBe(3);

        });

        it('should return -1 for non-existent substring', () => {

            let haystack = 'peter';
            let needle = 'abc';

            let idx = strstr(haystack, needle);

            expect(idx).toBe(-1);

        });

        it('should throw Error for invalid arguments', () => {

            expect(() => { strstr('q', null) }).toThrowError(Error);

            expect(() => { strstr('q', []) }).toThrowError(Error);

        });

    });// end describe


    describe('string function strcmp test cases', () => {

        it('should show first string is greater than second string', () => {

            let str1 = 'xyz', str2 = 'abc';

            let result = strcmp(str1, str2);
            expect(result).toBe(1);

        });

        it('should show first string is smaller than second string', () => {

            let str1 = 'abc', str2 = 'xyz';

            let result = strcmp(str1, str2);
            expect(result).toBe(-1);

        });

        it('should show both string are same', () => {

            let str1 = 'abc', str2 = 'abc';

            let result = strcmp(str1, str2);
            expect(result).toBe(0);

        });

        it('should throw Error for invalid arguments', () => {

            expect(() => { strcmp('q', null) }).toThrowError(Error);

            expect(() => { strcmp('q', []) }).toThrowError(Error);

        });

    });// end describe

});