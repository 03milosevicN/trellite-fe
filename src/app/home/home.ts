import { Component } from '@angular/core';
import {Header} from './header/header';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';
import {NgOptimizedImage} from '@angular/common';
import {HomeDetails} from './home-details/home-details';
import {LoggingAndChattingDetails} from './logging-and-chatting-details/logging-and-chatting-details';
import {Footer} from './footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatCardHeader,
    NgOptimizedImage,
    HomeDetails,
    LoggingAndChattingDetails,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { }
