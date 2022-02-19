import { describe, expect, test } from '@jest/globals';

import { answer } from '../answer';

describe('Should return the correct answer to...', () => {
    test('...the Ultimate Question of Life, the Universe, and Everything.', () => {
        expect(answer()).toBe(42);
    });
});
