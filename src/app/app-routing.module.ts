import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { SketchesComponent } from './sketches/sketches.component';

//This is my case
const routes: Routes = [
    { path: '', component: AboutComponent},
    { path: 'skills', component: SkillsComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'sketches', component: SketchesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
