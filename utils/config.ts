export const getDBURI = () => {
  const username = process.env.MONGO_USERNAME;
  const password = process.env.MONGO_PASS;
  const dbHost = process.env.MONGO_URI;
  const dbName = process.env.MONGO_DB_NAME;

  return `mongodb://${username}:${password}@${dbHost}/${dbName}`;
}