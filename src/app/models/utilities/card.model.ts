import {CheckListModel} from './checkList.model';
import {CommentsModel} from './comments.model';
import {ActivityModel} from './activity.model';

export interface CardModel {

  card_id: string;
  title: string;
  created_at?: Date;
  description?: string;
  /**
   * A checklist reperesents a quick to-do in Trello.
   * Model:
   * {
   *   "title": 'Foo checklist',
   *   "items": [
   *     'foo',
   *     'bar',
   *   ]
   *   "is_completed": false,
   * }
   */
  checklists?: CheckListModel[];
  /**
   * Model:
   * {
   *   "comment_id": 125,
   *   "posted_by": 2,
   *   "text": "Lorem ipsum...",
   *   "timestamp": ISODate(...)
   * }
   */
  comments?: CommentsModel[];
  dueDate: Date;
  /**
   * Model:
   * {
   *   "action_by_user_id": 2,
   *   "action": "Posted comment",
   *   "timestamp": ISODate(...)
   * }
   */
  activityLog: ActivityModel[];

}

