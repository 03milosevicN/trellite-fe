import {Component, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {UserModel} from '../models/user.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-users',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatCell,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow,
  ],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {

  //! FIX FROM EXAMPLE: https://material.angular.dev/components/table/examples

  dataSource: MatTableDataSource<UserModel> = new MatTableDataSource();
  displayedColumns: string[] = [
    'users_id',
    'firstName',
    'lastName',
    'username',
    'email',
    'passwordHash'
  ];

  constructor(private userService: UserService) { }
  ngOnInit(): void { }

}
