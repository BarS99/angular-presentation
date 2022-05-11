import { animate, keyframes, sequence, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    trigger('transform', [
      state('default', style({
        transform: "scale(1)",
        backgroundColor: "red",
      })),
      state('small', style({
        transform: "scale(0.9)",
      })),
      state('big', style({
        transform: "scale(1.1)",
      })),
      transition('default => small', animate('1000ms')),
      transition('default <=> big', animate('300ms')),
      transition('void => *', [
        style({backgroundColor: "green"}),
        animate('1000ms', style({backgroundColor: "red"}))
      ]),
      transition('* => *', animate('3000ms 0ms ease-in-out')),
    ]),
    trigger('enterAndLeave', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms', style({opacity: 1})),
      ]),
      state('enter', style({
        opacity: "1",
      })),
      transition('* => void', sequence([
        animate('1000ms', keyframes([
          style({ transform: "translateX(0px)", offset: 0}),
          style({ transform: "translateX(-100px)", offset: 1 }),
        ])),
        animate('3000ms', keyframes([
          style({ backgroundColor: "red", offset: 0.4}),
          style({ backgroundColor: "transparent", offset: 0.8 }),
          style({ opacity: 0, offset: 1 }),
        ])),
      ])),
    ])
  ],
})
export class AnimationsComponent implements OnInit {
  state: string = 'default';


  list: { id: number }[] = [
    { id: new Date().getTime() },
    { id: new Date().getTime() + 1 },
    { id: new Date().getTime() + 2 },
  ];

  constructor() { }

  ngOnInit(): void { }

  setState(state: string) {
    this.state = state;
  }

  removeItem(id: number) {
    this.list = this.list.filter((params) => {
      return params.id !== id;
    })
  }

  addItem() {
    this.list = [...this.list, { id: new Date().getTime() }]
  }
}
