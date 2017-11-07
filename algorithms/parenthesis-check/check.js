function check(expr) {

    let stack = new Stack(expr.length);

    for (let ch of expr) {

        switch (ch) {
            case '{':
            case '(':
            case '[':
                stack.push(ch);
                break;

            case '}':
            case ')':
            case ']':
                if (stack.isEmpty())
                    return false;

                let chx = stack.pop();

                if ((ch !== ']' && chx === '[') || (ch !== '}' && chx === '{') || (ch !== ')' && chx === '('))
                    return false;
        }// end switch

    }// end for

    return stack.count === 0;
}