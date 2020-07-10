import { Component, OnInit } from '@angular/core';

import { Skill } from '../modals/skill.modal';
import { Technology } from '../modals/technology.modal';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  technos: Skill[] = [
    new Skill('Structured Query Language','https://image.shutterstock.com/image-photo/image-260nw-684826648.jpg'),
    new Skill('Java Server Pages','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ90b-dkFRTmVbDcS6zL7MGTx9p3q1W8e7s8A&usqp=CAU'),
    new Skill('Git','https://seeklogo.com/images/G/git-logo-F4A93DAA20-seeklogo.com.png'),
    new Skill('Github','https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'),
    new Skill('Atom editor','https://seeklogo.com/images/A/atom-logo-19BD90FF87-seeklogo.com.png')
  ];

  tools: Skill[] = [
    new Skill('Eclipse IDE','https://seeklogo.com/images/E/eclipse-logo-85FE4BEA34-seeklogo.com.png'),
    new Skill('Oracle sqlplus','https://seeklogo.com/images/O/oracle-database-logo-780BE0C820-seeklogo.com.png'),
    new Skill('Atom editor','https://seeklogo.com/images/A/atom-logo-19BD90FF87-seeklogo.com.png'),
    new Skill('Github','https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'),
    new Skill('Git','https://seeklogo.com/images/G/git-logo-A1D01DDA30-seeklogo.com.png'),
    ];


  constructor() { }

  ngOnInit(): void {
  }

}
