var assert = require('assert');
async function main() {
    var leven = await import ('/usr/share/nodejs/leven/index.js');
    console.log(leven);
    return leven.default;
}
main().then(leven => {
    console.log(leven);
    assert.equal(leven('test','test2'), 1);
});
