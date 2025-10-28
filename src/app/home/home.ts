import { Component } from '@angular/core';
import {Header} from '../components/header/header';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';
import {HomeDetails} from './home-details/home-details';
import {LoggingAndChattingDetails} from './logging-and-chatting-details/logging-and-chatting-details';
import {Footer} from '../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatCardHeader,
    HomeDetails,
    LoggingAndChattingDetails,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { }
