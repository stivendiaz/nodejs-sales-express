import { Id, RelationMappings } from 'objection';
import Base from './Base';

export class Product extends Base {
  id!: Id;
  description!: string;
  name!: string;
  price!: number;

  static tableName = 'products';

  static get relationMappings(): RelationMappings {
    return {
      sale: {
        relation: Base.BelongsToOneRelation,
        modelClass: 'Sale',
        join: {
          from: 'products.id',
          to: 'sales.productId',
        },
      },
    };
  }
}

export default Product;
