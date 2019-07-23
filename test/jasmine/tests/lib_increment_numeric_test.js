var incrementNumeric = require('@src/lib').incrementNumeric;

describe('incrementNumeric', function() {
    'use strict';

    function straight(opts) {
        var len = opts.expected.length;

        var tick = opts.start;
        for(var i = 0; i < len; i++) {
            var newTick = incrementNumeric(tick, opts.step);
            expect(newTick).toBe(opts.expected[i]);
            tick = newTick;
        }
    }

    function negative(opts) {
        var len = opts.expected.length;

        var tick = -opts.start;
        for(var i = 0; i < len; i++) {
            var newTick = incrementNumeric(tick, -opts.step);
            expect(newTick).toBe(-opts.expected[i]);
            tick = newTick;
        }
    }

    function reverse(opts) {
        var len = opts.expected.length;

        var tick = opts.expected[len - 1];
        for(var i = 0; i < len; i++) {
            var k = len - i - 2;
            var newTick = incrementNumeric(tick, -opts.step);
            expect(newTick).toBe(k === -1 ? opts.start : opts.expected[k]);
            tick = newTick;
        }
    }

    function reverseAndNegative(opts) {
        var len = opts.expected.length;

        var tick = -opts.expected[len - 1];
        for(var i = 0; i < len; i++) {
            var k = len - i - 2;
            var newTick = incrementNumeric(tick, opts.step);
            expect(newTick).toBe(k === -1 ? -opts.start : -opts.expected[k]);
            tick = newTick;
        }
    }

    function examine(opts) {
        straight(opts);

        negative(opts);

        reverse(opts);

        reverseAndNegative(opts);
    }

    it('should increment numbers from 0 to 7 by 0.7', function() {
        examine({
            start: 0,
            step: 0.7,
            expected: [
                0.7,
                1.4,
                2.1,
                2.8,
                3.5,
                4.2,
                4.9,
                5.6,
                6.3,
                7
            ]
        });
    });

    it('should increment numbers from 0 to 6 by 0.6', function() {
        examine({
            start: 0,
            step: 0.6,
            expected: [
                0.6,
                1.2,
                1.8,
                2.4,
                3.0,
                3.6,
                4.2,
                4.8,
                5.4,
                6
            ]
        });
    });

    it('should increment numbers from 0 to 5 by 0.5', function() {
        examine({
            start: 0,
            step: 0.5,
            expected: [
                0.5,
                1.0,
                1.5,
                2.0,
                2.5,
                3.0,
                3.5,
                4.0,
                4.5,
                5
            ]
        });
    });

    it('should increment numbers from 0 to 4 by 0.4', function() {
        examine({
            start: 0,
            step: 0.4,
            expected: [
                0.4,
                0.8,
                1.2,
                1.6,
                2.0,
                2.4,
                2.8,
                3.2,
                3.6,
                4
            ]
        });
    });

    it('should increment numbers from 0 to 3 by 0.3', function() {
        examine({
            start: 0,
            step: 0.3,
            expected: [
                0.3,
                0.6,
                0.9,
                1.2,
                1.5,
                1.8,
                2.1,
                2.4,
                2.7,
                3
            ]
        });
    });

    it('should increment numbers from 0 to 2 by 0.2', function() {
        examine({
            start: 0,
            step: 0.2,
            expected: [
                0.2,
                0.4,
                0.6,
                0.8,
                1.0,
                1.2,
                1.4,
                1.6,
                1.8,
                2
            ]
        });
    });

    it('should increment numbers from 0 to 1 by 0.1', function() {
        examine({
            start: 0,
            step: 0.1,
            expected: [
                0.1,
                0.2,
                0.3,
                0.4,
                0.5,
                0.6,
                0.7,
                0.8,
                0.9,
                1
            ]
        });
    });

    it('should increment numbers from 0 to 1 by 0.01', function() {
        examine({
            start: 0,
            step: 0.01,
            expected: [
                0.01,
                0.02,
                0.03,
                0.04,
                0.05,
                0.06,
                0.07,
                0.08,
                0.09,
                0.10,
                0.11,
                0.12,
                0.13,
                0.14,
                0.15,
                0.16,
                0.17,
                0.18,
                0.19,
                0.20,
                0.21,
                0.22,
                0.23,
                0.24,
                0.25,
                0.26,
                0.27,
                0.28,
                0.29,
                0.30,
                0.31,
                0.32,
                0.33,
                0.34,
                0.35,
                0.36,
                0.37,
                0.38,
                0.39,
                0.40,
                0.41,
                0.42,
                0.43,
                0.44,
                0.45,
                0.46,
                0.47,
                0.48,
                0.49,
                0.50,
                0.51,
                0.52,
                0.53,
                0.54,
                0.55,
                0.56,
                0.57,
                0.58,
                0.59,
                0.60,
                0.61,
                0.62,
                0.63,
                0.64,
                0.65,
                0.66,
                0.67,
                0.68,
                0.69,
                0.70,
                0.71,
                0.72,
                0.73,
                0.74,
                0.75,
                0.76,
                0.77,
                0.78,
                0.79,
                0.80,
                0.81,
                0.82,
                0.83,
                0.84,
                0.85,
                0.86,
                0.87,
                0.88,
                0.89,
                0.90,
                0.91,
                0.92,
                0.93,
                0.94,
                0.95,
                0.96,
                0.97,
                0.98,
                0.99,
                1
            ]
        });
    });

    it('should increment numbers from 0.001 to 1.001 by 0.1', function() {
        examine({
            start: 0.001,
            step: 0.1,
            expected: [
                0.101,
                0.201,
                0.301,
                0.401,
                0.501,
                0.601,
                0.701,
                0.801,
                0.901,
                1.001
            ]
        });
    });

    it('should increment numbers from 0.00001 to 1.00001 by 0.1', function() {
        examine({
            start: 0.00001,
            step: 0.1,
            expected: [
                0.10001,
                0.20001,
                0.30001,
                0.40001,
                0.50001,
                0.60001,
                0.70001,
                0.80001,
                0.90001,
                1.00001
            ]
        });
    });

    it('should increment numbers from 0.999 to 1.999 by 0.1', function() {
        examine({
            start: 0.999,
            step: 0.1,
            expected: [
                1.099,
                1.199,
                1.299,
                1.399,
                1.499,
                1.599,
                1.699,
                1.799,
                1.899,
                1.999
            ]
        });
    });

    it('should increment numbers from 0.99999 to 1.99999 by 0.1', function() {
        examine({
            start: 0.99999,
            step: 0.1,
            expected: [
                1.09999,
                1.19999,
                1.29999,
                1.39999,
                1.49999,
                1.59999,
                1.69999,
                1.79999,
                1.89999,
                1.99999
            ]
        });
    });

    it('should increment numbers from 654320.99999 to 654321.99999 by 0.1', function() {
        examine({
            start: 654320.99999,
            step: 0.1,
            expected: [
                654321.09999,
                654321.19999,
                654321.29999,
                654321.39999,
                654321.49999,
                654321.59999,
                654321.69999,
                654321.79999,
                654321.89999,
                654321.99999
            ]
        });
    });

    it('should increment numbers from 654320.001 to 654321.001 by 0.1', function() {
        examine({
            start: 654320.00001,
            step: 0.1,
            expected: [
                654320.10001,
                654320.20001,
                654320.30001,
                654320.40001,
                654320.50001,
                654320.60001,
                654320.70001,
                654320.80001,
                654320.90001,
                654321.00001
            ]
        });
    });

    it('should increment numbers from 54321 to 54321.001 by 0.0001', function() {
        examine({
            start: 54321,
            step: 0.0001,
            expected: [
                54321.0001,
                54321.0002,
                54321.0003,
                54321.0004,
                54321.0005,
                54321.0006,
                54321.0007,
                54321.0008,
                54321.0009,
                54321.001
            ]
        });
    });

    it('should increment numbers from 0.12345 to 10000.12345 by 1000', function() {
        examine({
            start: 0.12345,
            step: 1000,
            expected: [
                1000.12345,
                2000.12345,
                3000.12345,
                4000.12345,
                5000.12345,
                6000.12345,
                7000.12345,
                8000.12345,
                9000.12345,
                10000.12345
            ]
        });
    });

    it('should increment numbers from 0.9999 to 100000.9999 by 1000', function() {
        examine({
            start: 0.99999,
            step: 1000,
            expected: [
                1000.99999,
                2000.99999,
                3000.99999,
                4000.99999,
                5000.99999,
                6000.99999,
                7000.99999,
                8000.99999,
                9000.99999,
                10000.99999
            ]
        });
    });

    it('should increment big and small numbers', function() {
        examine({ start: 0, step: 0.00000000000001, expected: [0.00000000000001] });
        examine({ start: 0, step: 0.0000000000001, expected: [0.0000000000001] });
        examine({ start: 0, step: 0.000000000001, expected: [0.000000000001] });
        examine({ start: 0, step: 0.00000000001, expected: [0.00000000001] });
        examine({ start: 0, step: 0.0000000001, expected: [0.0000000001] });
        examine({ start: 0, step: 0.000000001, expected: [0.000000001] });
        examine({ start: 0, step: 0.00000001, expected: [0.00000001] });
        examine({ start: 0, step: 0.0000001, expected: [0.0000001] });
        examine({ start: 0, step: 0.000001, expected: [0.000001] });
        examine({ start: 0, step: 0.00001, expected: [0.00001] });
        examine({ start: 0, step: 0.0001, expected: [0.0001] });
        examine({ start: 0, step: 0.001, expected: [0.001] });
        examine({ start: 0, step: 0.01, expected: [0.01] });
        examine({ start: 0, step: 0.1, expected: [0.1] });
        examine({ start: 0, step: 10, expected: [10] });
        examine({ start: 0, step: 100, expected: [100] });
        examine({ start: 0, step: 1000, expected: [1000] });
        examine({ start: 0, step: 10000, expected: [10000] });
        examine({ start: 0, step: 100000, expected: [100000] });
        examine({ start: 0, step: 1000000, expected: [1000000] });
        examine({ start: 0, step: 10000000, expected: [10000000] });
        examine({ start: 0, step: 100000000, expected: [100000000] });
        examine({ start: 0, step: 1000000000, expected: [1000000000] });
        examine({ start: 0, step: 10000000000, expected: [10000000000] });
        examine({ start: 0, step: 100000000000, expected: [100000000000] });
        examine({ start: 0, step: 1000000000000, expected: [1000000000000] });
        examine({ start: 0, step: 10000000000000, expected: [10000000000000] });
        examine({ start: 0, step: 100000000000000, expected: [100000000000000] });
    });

    it('should increment big and small numbers two steps', function() {
        examine({ start: 0, step: 0.00005, expected: [0.00005, 0.0001] });
        examine({ start: 0, step: 0.0005, expected: [0.0005, 0.001] });
        examine({ start: 0, step: 0.005, expected: [0.005, 0.01] });
        examine({ start: 0, step: 0.05, expected: [0.05, 0.1] });
        examine({ start: 0, step: 0.5, expected: [0.5, 1] });
        examine({ start: 0, step: 5, expected: [5, 10] });
        examine({ start: 0, step: 50, expected: [50, 100] });
        examine({ start: 0, step: 500, expected: [500, 1000] });
        examine({ start: 0, step: 5000, expected: [5000, 10000] });
        examine({ start: 0, step: 50000, expected: [50000, 100000] });
    });

    it('should increment big and small numbers three steps', function() {
        examine({ start: 0, step: 0.000000000001, expected: [0.000000000001, 0.000000000002, 0.000000000003] });
        examine({ start: 0, step: 0.00000000001, expected: [0.00000000001, 0.00000000002, 0.00000000003] });
        examine({ start: 0, step: 0.0000000001, expected: [0.0000000001, 0.0000000002, 0.0000000003] });
        examine({ start: 0, step: 0.000000001, expected: [0.000000001, 0.000000002, 0.000000003] });
        examine({ start: 0, step: 0.00000001, expected: [0.00000001, 0.00000002, 0.00000003] });
        examine({ start: 0, step: 0.0000001, expected: [0.0000001, 0.0000002, 0.0000003] });
        examine({ start: 0, step: 0.000001, expected: [0.000001, 0.000002, 0.000003] });
        examine({ start: 0, step: 0.00001, expected: [0.00001, 0.00002, 0.00003] });
        examine({ start: 0, step: 0.0001, expected: [0.0001, 0.0002, 0.0003] });
        examine({ start: 0, step: 0.001, expected: [0.001, 0.002, 0.003] });
        examine({ start: 0, step: 0.01, expected: [0.01, 0.02, 0.03] });
        examine({ start: 0, step: 0.1, expected: [0.1, 0.2, 0.3] });
    });

    it('should increment big and small numbers three steps - with different start', function() {
        examine({ start: 12345, step: 0.0000001, expected: [12345.0000001, 12345.0000002, 12345.0000003] });
        examine({ start: 12345, step: 0.000001, expected: [12345.000001, 12345.000002, 12345.000003] });
        examine({ start: 12345, step: 0.00001, expected: [12345.00001, 12345.00002, 12345.00003] });
        examine({ start: 12345, step: 0.0001, expected: [12345.0001, 12345.0002, 12345.0003] });
        examine({ start: 12345, step: 0.001, expected: [12345.001, 12345.002, 12345.003] });
        examine({ start: 12345, step: 0.01, expected: [12345.01, 12345.02, 12345.03] });
        examine({ start: 12345, step: 0.1, expected: [12345.1, 12345.2, 12345.3] });
    });
});
