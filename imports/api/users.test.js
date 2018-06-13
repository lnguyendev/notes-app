import expect from 'expect';
import { Meteor } from 'meteor/meteor';

import { validateNewUser } from './users';

if (Meteor.isServer) {
    describe('users', function() {
        it('should allow valid email address', function() {
            const testUser = {
                emails: [
                    {
                        address: 'Test@example.com'
                    }
                ]
            };
    
            const res = validateNewUser(testUser);
    
            expect(res).toBe(true);
        });

        it('should reject invalid email', function() {
            const testUser = {
                emails: [
                    {
                        address: 'Testexamplecom'
                    }
                ]
            };

            expect(() => {
                validateNewUser(testUser);
            }).toThrow();
        });
    });
}

// const add = (a, b) => {
//     if (typeof b !== 'number') {
//         return a + a;
//     }

//     return a + b;
// };

// const square = (x) => x * x;

// describe('Add function', function() {
//     it('should add two numbers', function() {
//         const result = add(2, 3);
//         expect(result).toEqual(5);
//     });
    
//     it('should double a single number', function() {
//         const result = add(5);
//         expect(result).toBe(10);
//     });
// });

// describe('Square function', function() {
//     it('should square a number', function() {
//         const result = square(4);
//         expect(result).toBe(16);
//     });
// });