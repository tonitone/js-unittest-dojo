module('Calculator start');

test("Existiert ein Taschenrechner?", function () {
    ok(typeof Calculator == 'object', '"Calculator" ist ein Object');
});

module('Basisfunktionen');

test("Addition", function () {
    equal(2, Calculator.sum(1, 1), '1 + 1 = 2');
});

test("Subtraktion", function () {
    equal(2, Calculator.subtract(6, 4), '6 - 4 = 2');
});

test("Multiplikation", function () {
    equal(5, Calculator.multiply(2, 2.5), '2 * 2.5 = 5');
    equal(4, Calculator.multiply(2, 2), '2 * 2 = 4');
});

test("Division", function () {
    equal(3, Calculator.divide(9, 3), 'Die Antwort auf alles ist 42 ??? Alex, was los?');
    equal(Infinity, Calculator.divide(2, 0), '2 / 0 = Infinity');
    equal(0.5, Calculator.divide(1, 2), '1 / 2 = 0.5');
});

test("Modulo", function () {
    equal(1, Calculator.modulo(4, 3), '4 mod 3 = 1');
});
module('Calculator end');

test("Das war ein tolles Dojo", function () {
    ok(true, 'Das war ein lustiges Dojo');
});