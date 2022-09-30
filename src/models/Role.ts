import { Id, RelationMappings } from 'objection';
import Base from './Base';

export class Role extends Base {
  id!: Id;
  name!: string;

  static tableName = 'roles';

  static get relationMappings(): RelationMappings {
    return {
      user: {
        relation: Base.BelongsToOneRelation,
        modelClass: 'User',
        join: {
          from: 'roles.id',
          to: 'users.rolesId',
        },
      },
    };
  }
}

export default Role;
