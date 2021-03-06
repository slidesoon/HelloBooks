/**
  * Route: POST: /auth/users/signin
  *
  * @description Middleware that signs user in with google Authentication
  *
  * @param {object} req request object
  *
  * @param {object} res response object
  *
  * @param {object} next

  * @returns {next} undefined
  */
export default (req, res, next) => {
  if (req.body.googleId) {
    const googleId = req.body.googleId;
    const {
      email,
      givenName: firstname,
      familyName: lastname,
      imageUrl: userImage
    } = req.body;
    const username = email.slice(0, email.indexOf('@')) + googleId.slice(0, 3);
    const password = googleId;
    const passwordConfirmation = googleId;
    req.body = {
      email,
      username,
      password,
      passwordConfirmation,
      lastname,
      firstname,
      googleId,
      userImage
    };
    return next();
  }
  next();
};
