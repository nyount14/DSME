import { Component, OnInit } from '@angular/core';

import { Assessment } from './assessment-list.model';

@Component({
  selector: 'app-assessment-list',
  templateUrl: './assessment-list.component.html',
  styleUrls: ['./assessment-list.component.css']
})
export class AssessmentListComponent implements OnInit {
Asmnt: Assessment[] = [
 new Assessment('10/12/2021','needs assessment'),
 new Assessment('8/6/2021','needs review'),
 new Assessment('9/21/2021','needs assessment'),
 new Assessment('10/8/2021','needs review')
];

  constructor() { }

  ngOnInit(): void {
  }

}
