const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

    test('Convert a valid input such as 10L: GET request to /api/convert.', function(done) {
        chai.request(server)
            .get('/api/convert')
            .query({ input: '10 liters' })
            .end((err, res) => {
                if (err) return done(err)
                console.log(res.request.query)
                assert.deepEqual(res.query.string, '10 liters converts to 2.64172 gallons')
                done()
            })
    })
});
