var chai = require('chai')
  , passport = require('@passport-next/chai-passport-strategy');

chai.use(passport);


global.expect = chai.expect;
