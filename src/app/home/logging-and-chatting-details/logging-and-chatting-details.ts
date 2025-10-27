import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';

@Component({
  selector: 'app-logging-and-chatting-details',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent
  ],
  templateUrl: './logging-and-chatting-details.html',
  styleUrl: './logging-and-chatting-details.css',
})
export class LoggingAndChattingDetails { }
