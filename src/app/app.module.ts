import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CoursesComponent,
    ImportanceofprogrammingComponent,
    FeaturesComponent,
    ApplicationsComponent,
    HistroyofcComponent,
    WhyCComponent,
    ProceduresComponent,
    FlowchartComponent,
    FeaturesofcComponent,
    InstallationComponent,
    HelloworldComponent,
    DatatypesComponent,
    VariabledeclarationComponent,
    OperatorsComponent,
    IfelseComponent,
    LoopsComponent,
    AlgorithmComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
