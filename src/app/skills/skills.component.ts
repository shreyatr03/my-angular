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
    new Skill('Angular','https://seeklogo.com/images/A/angular-logo-B76B1CDE98-seeklogo.com.png'),
    new Skill('TypeScript','https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png'),
    new Skill('JavaScript','https://seeklogo.com/images/J/java-script-js-logo-ACF4AE5082-seeklogo.com.png'),
    new Skill('Java','https://seeklogo.com/images/J/java-logo-A5A6D66CD2-seeklogo.com.png'),
    new Skill('Python','https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png'),
    new Skill('C++','https://seeklogo.com/images/C/c-logo-1B1817C041-seeklogo.com.png'),
    new Skill('Bootstrap','https://seeklogo.com/images/B/bootstrap-framework-logo-D45BDEC73C-seeklogo.com.png'),
    new Skill('Cascading Style Sheets','https://seeklogo.com/images/C/css-3-logo-AF06D75231-seeklogo.com.png'),
    new Skill('HTML','https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png'),



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
