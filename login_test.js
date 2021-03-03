Feature('Sign In');

Scenario('Sign in with correct credentials', ({ I }) => {
    I.amOnPage('/sign-in');
    I.fillField({name: "email"}, "test@test.com")
    I.fillField({name: "password"}, "P@ssw0rd")
    I.click('Continue')
    I.see("My Tickets")
});

Scenario('Sign in with incorrect password', ({ I }) => {
    I.amOnPage('/sign-in');
    I.fillField({name: "email"}, "test@test.com")
    I.fillField({name: "password"}, "IncorrectPW")
    I.click('Continue')
    I.see("Incorrect email / password")
});

Scenario('Sign in with non-existing account', ({ I }) => {
    I.amOnPage('/sign-in');
    I.fillField({name: "email"}, "nonexistent@test.com")
    I.fillField({name: "password"}, "1234")
    I.click('Continue')
    I.see("Account does not exist.")
});
