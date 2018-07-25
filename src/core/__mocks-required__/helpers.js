/*
 * The mocks folder had to be renamed in order for `jest` to not pick it up as duplicate haste mock file.
 * See:
 * https://github.com/facebook/jest/issues/2070
 */

export const derivationPathSerializer = jest.fn(() => 'mocked-derivation-path');

export default derivationPathSerializer;
