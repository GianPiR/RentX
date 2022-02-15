import { User } from '@modules/accounts/infra/typeorm/entities/user';
import { Category } from '@modules/cars/infra/typeorm/entities/Category';
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';
import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'localhost';
  createConnection({
    ...options,
    entities: [
      Category,
      Specification,
      User
    ]
  });
});