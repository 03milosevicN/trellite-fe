import {UserModel} from './user.model';
import {WorkListModel} from './utilities/workList.model';

export interface ProjectsModel {

  _id: number;
  org_id: number;
  created_by_id: number;

  createdAt: Date;
  members?: UserModel[];
  workLists?: WorkListModel[];

}
