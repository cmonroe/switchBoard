/*jslint white: true */
/*global module, String, require, console */

/**
 * Copyright (c) 2014 brian@bevey.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/**
 * @author brian@bevey.org
 * @fileoverview Unit test for client-side common.js
 */

document = {};
window   = {};

exports.commonTest = {
  hasAttribute : function (test) {
    'use strict';

    var common = require(__dirname + '/../../../js/common'),
        mock   = { className : 'foo', bar : 'baz' };

    test.strictEqual(SB.hasAttribute(mock, 'bar', 'baz'),  true,  'Attribute exists');
    test.strictEqual(SB.hasAttribute(mock, 'bar', 'bang'), false, 'Attribute does not exists');

    test.done();
  },

  hasClass : function (test) {
    'use strict';

    var common = require(__dirname + '/../../../js/common'),
        mock   = { className : 'foo' };

    test.strictEqual(SB.hasClass(mock, 'foo'), true,  'Class name exists');
    test.strictEqual(SB.hasClass(mock, 'bar'), false, 'Class name does not exist');

    test.done();
  },

  addClass : function (test) {
    'use strict';

    var common = require(__dirname + '/../../../js/common'),
        mock   = {className : 'foo'};

    SB.addClass(mock, 'bar');

    test.strictEqual(mock.className, 'foo bar', 'New class name should have been added');

    test.done();
  },

  removeClass : function (test) {
    'use strict';

    var common = require(__dirname + '/../../../js/common'),
        mock   = {className : 'foo bar'};

    SB.removeClass(mock, 'foo');

    test.strictEqual(mock.className, 'bar', 'Class name should have been removed');

    test.done();
  },

  toggleClass : function (test) {
    'use strict';

    var common = require(__dirname + '/../../../js/common'),
        mock   = {className : 'foo bar'};

    SB.toggleClass(mock, 'bar');

    test.strictEqual(mock.className, 'foo', 'Class name should have been removed');

    SB.toggleClass(mock, 'bar');

    test.strictEqual(mock.className, 'foo bar', 'Class name should have been added');

    test.done();
  },

  trim : function (test) {
    'use strict';

    var common = require(__dirname + '/../../../js/common');

    test.strictEqual(SB.trim('   Testing   '), 'Testing', 'Trim should remove extra whitespace');
    test.done();
  },

  decode : function (test) {
    'use strict';

    var common  = require(__dirname + '/../../../js/common'),
        mock    = '{"foo":{"bar":"test","baz":"bang"}}',
        decoded = SB.decode(mock);

    test.strictEqual(decoded.foo.baz, 'bang', 'Decode should turn string JSON into an object');

    test.done();
  }
};
