import { Component } from '@angular/core';
import {Header} from './header/header';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {NgOptimizedImage} from '@angular/common';
import {HomeDetails} from './home-details/home-details';
import {LoggingAndChattingDetails} from './logging-and-chatting-details/logging-and-chatting-details';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardHeader,
    NgOptimizedImage,
    HomeDetails,
    LoggingAndChattingDetails
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
