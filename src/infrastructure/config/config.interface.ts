interface IConfig {
  enviroment: string;
  server: {
    port: number | string;
    lang: string;
  };
  db: {
    name: string;
    username: string;
    pass: string;
    dialect: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | undefined;
  };
}

export default IConfig;
