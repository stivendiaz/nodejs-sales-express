import { Id, RelationMappings } from 'objection';
import Base from './Base';

export class Sale extends Base {
  id!: Id;
  productId!: Id;
  qty!: number;
  saleAt!: Date;
  usersId!: Id;

  static tableName = 'sales';

  static get relationMappings(): RelationMappings {
    return {
      user: {
        relation: Base.HasManyRelation,
        modelClass: 'User',
        join: {
          from: 'sales.usersId',
          to: 'users.id',
        },
      },
      product: {
        relation: Base.HasManyRelation,
        modelClass: 'Product',
        join: {
          from: 'sales.productId',
          to: 'product.id',
        },
      },
    };
  }
}

export default Sale;
