import { Id, RelationMappings } from 'objection';
import Base from './Base';

export class User extends Base {
  id!: Id;
  document!: string;
  lastName!: string;
  name!: string;
  rolesId!: string;

  static tableName = 'users';

  static get relationMappings(): RelationMappings {
    return {
      sale: {
        relation: Base.BelongsToOneRelation,
        modelClass: 'Sale',
        join: {
          from: 'users.id',
          to: 'sales.usersId',
        },
      },
      role: {
        relation: Base.HasManyRelation,
        modelClass: 'Role',
        join: {
          from: 'users.rolesId',
          to: 'role.id',
        },
      },
    };
  }
}

export default User;
