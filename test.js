
function testSuite (Suite) {
    Suite.forEach(function (test) {
        test();
    });
}

testSuite(require("./SymbolTest"));
testSuite(require("./SequenceTest"));
