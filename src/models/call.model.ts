import {Entity, model, property} from '@loopback/repository';

@model()
export class Call extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  stockName: string;

  @property({
    type: 'number',
    required: true,
  })
  recommendedBuyPrice: number;

  @property({
    type: 'number',
    required: true,
  })
  firstTarget: number;

  @property({
    type: 'number',
  })
  secondTarget?: number;

  @property({
    type: 'number',
  })
  stopLoss?: number;

  @property({
    type: 'string',
  })
  category?: string;

  @property({
    type: 'string',
  })
  disclosure?: string;

  @property({
    type: 'string',
    required: true,
  })
  sourceOfRecommendation: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  constructor(data?: Partial<Call>) {
    super(data);
  }
}

export interface CallRelations {
  // describe navigational properties here
}

export type CallWithRelations = Call & CallRelations;
