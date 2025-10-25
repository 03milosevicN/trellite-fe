import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    MatButton
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header { }
