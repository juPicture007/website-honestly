import { validateAndSendEmail } from '.';

describe('contact-us-service/email.validateAndSendEmail', () => {
  const defaultEmail = {
    emailTo: ['hello@red-badger.com'],
    emailFrom: 'hello@red-badger.com',
    message: 'Hello, I want to work with you',
    contact: 'test@test.com',
  };

  it('rejects if email missing', () => {
    return expect(validateAndSendEmail()).to.be.rejectedWith(Error, 'Missing email');
  });

  it('rejects if emailTo missing', () => {
    const email = Object.assign({}, defaultEmail);
    delete email.emailTo;
    return expect(validateAndSendEmail(email)).to.be.rejectedWith(Error, 'Missing emailTo');
  });

  it('rejects if emailFrom missing', () => {
    const email = Object.assign({}, defaultEmail);
    delete email.emailFrom;
    return expect(validateAndSendEmail(email)).to.be.rejectedWith(Error, 'Missing emailFrom');
  });

  it('rejects if message missing', () => {
    const email = Object.assign({}, defaultEmail);
    delete email.message;
    return expect(validateAndSendEmail(email)).to.be.rejectedWith(Error, 'Missing message');
  });

  it('rejects if contact missing', () => {
    const email = Object.assign({}, defaultEmail);
    delete email.contact;
    return expect(validateAndSendEmail(email)).to.be.rejectedWith(Error, 'Missing contact');
  });

  it('rejects if email sending fails', () => {
    const failingSendingFn = (email, cb) => {
      cb(new Error('Sending failed'));
    };
    const promise = validateAndSendEmail(defaultEmail, failingSendingFn);
    return expect(promise).to.be.rejectedWith(Error, 'Sending failed');
  });

  it('constructs the correct email structure', done => {
    const emailConstruct = {
      Destination: {
        ToAddresses: defaultEmail.emailTo,
      },
      Message: {
        Body: {
          Html: {
            Data: `<p><strong>This email was sent through the contact us form on red-badger.com:</strong></p><p>${defaultEmail.message}</p><p><strong>Contact details:</strong></p><p>${defaultEmail.contact}</p>`,
            Charset: 'UTF-8',
          },
          Text: {
            Data: 'This email was sent through the contact us form on red-badger.com:\n\n Hello, I want to work with you\n\n Contact details:\n\n test@test.com',
            Charset: 'UTF-8',
          },
        },
        Subject: {
          Data: 'Message submitted through the contact us form on red-badger.com',
          Charset: 'UTF-8',
        },
      },
      Source: defaultEmail.emailFrom,
    };

    const sendFunction = (emailData, cb) => {
      expect(emailData).to.deep.equal(emailConstruct);
      cb(null, emailConstruct);
      done();
    };
    validateAndSendEmail(defaultEmail, sendFunction)
      .catch(done);
  });

  it('resolves if email sending succeeds', () => {
    const sendFunction = (emailData, cb) => cb(null, emailData);

    const promise = validateAndSendEmail(defaultEmail, sendFunction);
    return expect(promise).to.eventually.equal(true);
  });
});
