import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ImportanceofprogrammingComponent } from './importanceofprogramming/importanceofprogramming.component';
import { FeaturesComponent } from './features/features.component';
import { ApplicationsComponent } from './applications/applications.component';
import { HistroyofcComponent } from './histroyofc/histroyofc.component';
import { WhyCComponent } from './why-c/why-c.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { FlowchartComponent } from './flowchart/flowchart.component';
import { FeaturesofcComponent } from './featuresofc/featuresofc.component';
import { InstallationComponent } from './installation/installation.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { VariabledeclarationComponent } from './variabledeclaration/variabledeclaration.component';
import { OperatorsComponent } from './operators/operators.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { LoopsComponent } from './loops/loops.component';
import { AlgorithmComponent } from './algorithm/algorithm.component';
import { SwitchComponent } from './switch/switch.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'courses',component:CoursesComponent},
  {path:'importanceofprogramming',component:ImportanceofprogrammingComponent},
  {path:'features',component:FeaturesComponent},
  {path:'applications',component:ApplicationsComponent},
  {path:'histroyofc',component:HistroyofcComponent},
  {path:'whyC',component:WhyCComponent},
  {path:'procedures',component:ProceduresComponent},
  {path:'flowchart',component:FlowchartComponent},
  {path:'featuresofc',component:FeaturesofcComponent},
  {path:'installation',component:InstallationComponent},
  {path:'helloworld',component:HelloworldComponent},
  {path:'datatypes',component:DatatypesComponent},
  {path:'variabledeclaration',component:VariabledeclarationComponent},
  {path:'operators',component:OperatorsComponent},
  {path:'ifelse',component:IfelseComponent},
  {path:'loops',component:LoopsComponent},
  {path:'algorithm',component:AlgorithmComponent},
  {path:'switch',component:SwitchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
