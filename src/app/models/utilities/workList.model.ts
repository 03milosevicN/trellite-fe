import {CardModel} from './card.model';

export interface WorkListModel {

  card_id?: string;
  title?: string;
  cards?: CardModel[];

}
