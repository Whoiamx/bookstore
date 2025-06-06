const {
  PORTCONFIG = 3232,
  SALT_ROUNDS = 10,
  SECRET_JWT_KEY = "irala-6153-2469",
} = process.env;

module.exports = {
  PORTCONFIG,
  SALT_ROUNDS,
  SECRET_JWT_KEY,
};
