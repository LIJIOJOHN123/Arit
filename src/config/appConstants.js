class EnvVariable {
  static DATABASE_ACCESS =
    "mongodb+srv://lijojohnrbs:100100100@shopping-ngsdx.mongodb.net/test?retryWrites=true&w=majority";
  //user
  static JWT_VARIABLE = "thisismyvideo";
  static USER_ROLE = {
    GUEST: 1,
    USER: 2,
    SUPERADMIN: 3,
    ADMIN: 4,
    MARKETING: 5,
    WORKER: 6
  };
  static USER_STATUS = {
    PENDING_VERIFICATION: 1,
    ACTIVE: 2,
    BLOCKED: 3
  };
  //channel
  static CHANNEL_STATUS = {
    ACTIVE: 1,
    BLOCKED: 2
  };
}
module.exports = EnvVariable;
