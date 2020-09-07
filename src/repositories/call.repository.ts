import {DefaultCrudRepository} from '@loopback/repository';
import {Call, CallRelations} from '../models';
import {InvestDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CallRepository extends DefaultCrudRepository<
  Call,
  typeof Call.prototype.id,
  CallRelations
> {
  constructor(
    @inject('datasources.invest') dataSource: InvestDataSource,
  ) {
    super(Call, dataSource);
  }
}
