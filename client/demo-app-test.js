describe('meta', function () {
    'use strict';
    beforeEach(function () {
    });
    afterEach(function () {
    });
    it.skip('should fail', function () {
        expect(true).to.be.false;
    });
    it('should succeed', function () {
        expect(true).to.be.true;
    });
});

describe('demo-app', function () {
    'use strict';
    it('should have require', function () {
        expect(typeof require).to.equal('function');
    });
    it('should NOT have angular', function () {
        expect(typeof angular).to.equal('undefined');
    });
});