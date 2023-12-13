const emailService = require('../services/emailService');
/*I added this test file cases to  be confident that the email derivation logic works correctly for the tested cases.
 In future plans to add more features or handle more scenarios, could
consider writing additional tests to maintain this level of assurance.*/

describe('Email Service Tests', () => {
  test('should derive correct email for first_name_last_name format', () => {
    const email = emailService.deriveEmail('John Doe', 'example.com');
    expect(email).toBe('johndoe@example.com');
  });

  test('should derive correct email for first_initial_last_name format', () => {
    const email = emailService.deriveEmail('Jane Doe', 'babbel.com');
    expect(email).toBe('jdoe@babbel.com');
  });

  test('should return "Format not found" for unknown domain', () => {
    const email = emailService.deriveEmail('John Doe', 'unknown.com');
    expect(email).toBe('Format not found');
  });
});
