import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForumComponent } from './components/forum/forum.component';
import { ChatComponent } from './components/chat/chat.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TravelComponent } from './components/travel/travel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddtravelComponent } from './components/travel/addtravel/addtravel.component';
import { EdittravelComponent } from './components/travel/edittravel/edittravel.component';
import { CommonModule } from '@angular/common';
import { TravelplanningComponent } from './components/travelplanning/travelplanning.component';
import { VeiwPlanningsComponent } from './components/travelplanning/veiw-plannings/veiw-plannings.component';
import { OpportunityComponent } from './components/opportunity/opportunity.component';
import { AddopportunityComponent } from './components/opportunity/addopportunity/addopportunity.component';
import { EditopportunityComponent } from './components/opportunity/editopportunity/editopportunity.component';
import { EditplanningComponent } from './components/travelplanning/editplanning/editplanning.component';
import { StatisticsComponent } from './components/travel/statistics/statistics.component';
import { MapsComponent } from './components/maps/maps.component';
import { AffectemployeeComponent } from './components/travel/affectemployee/affectemployee.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CategoryService, ChartModule, DataLabelService, LegendService, LineSeriesService } from '@syncfusion/ej2-angular-charts';
import { MatchingComponent } from './components/matching/matching.component';
import { OpportunitystatisticComponent } from './components/travel/opportunitystatistic/opportunitystatistic.component';
import { AuthGaurdService } from 'src/services/auth-gaurd.service';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { GoogleChartsModule } from 'angular-google-charts';

import { PasswordModule } from 'primeng/password';
//import { InputTextModule } from 'primeng/inputtext';
import { ComplaintComponent } from './components/complaint/complaint.component';
import { AddcomplaintComponent } from './components/complaint/addcomplaint/addcomplaint.component';
import { ReponseReclamationComponent } from './components/complaint/reponse-reclamation/reponse-reclamation.component';
import { ResponseByUserComponent } from './components/complaint/response-by-user/response-by-user.component';
import { ComplaintstatisticComponent } from './components/complaint/complaintstatistic/complaintstatistic.component';
import { FormReponsereclamationComponent } from './components/complaint/form-reponsereclamation/form-reponsereclamation.component';
import { FormReclamationComponent } from './components/complaint/form-reclamation/form-reclamation.component';
import { environment } from 'src/environments/environment';

//////////////////***************calendar*************************** */

// import { FlatpickrModule } from 'angularx-flatpickr';
// import { CalendarModule, DateAdapter } from 'angular-calendar';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BadgeComponent } from './components/badge/badge.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { LikeComponent } from './components/like/like.component';
import { MyPostCardComponent } from './components/my-post-card/my-post-card.component';
import { ToastrModule } from 'ngx-toastr';
//primeng
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { TripComponent } from './components/trip/trip.component';
import { AddtripComponent } from './components/trip/addtrip/addtrip.component';
import { QuestionComponent } from './components/question/question.component';
import { AddprofilComponent } from './components/profil/addprofil/addprofil.component';
import { ProfilComponent } from './components/profil/profil.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResponseComponent } from './components/response/response.component';
import { AddquizComponent } from './components/quiz/addquiz/addquiz.component';
import { EditprofilComponent } from './components/profil/editprofil/editprofil.component';
import { DividerModule } from "primeng/divider";
import {AccordionModule} from 'primeng/accordion';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InvitationComponent } from './components/invitation/invitation.component';

import { DialogModule } from 'primeng/dialog';
import { UpdateInvitationComponent } from './components/invitation/update-invitation/update-invitation.component';
import { AddinvitationComponent } from './components/invitation/addinvitation/addinvitation.component';
import { StatsinvitationComponent } from './components/statsinvitation/statsinvitation.component';
import { UserRoutingModule } from './components/users/user-routing.module';
import { UserModule } from './components/users/user.module';
import { AddEquipementComponent } from './components/equipement/addequipement/addequipement.component';
import { EquipementComponent } from './components/equipement/equipement.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { EditEquipementComponent } from './components/equipement/editequipement/editequipement.component';


const routes: Routes = [

  //{path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: '', component: DashboardComponent },

  { path: 'forum', component: ForumComponent , canActivate: [AuthGaurdService] },
  { path: 'chat', component: ChatComponent },
  { path: "travel", component: TravelComponent },
  { path: "edit", component: EdittravelComponent },
  { path: "travel/:id", component: TravelplanningComponent },
  { path: "view", component: VeiwPlanningsComponent },
  { path: "opportunity", component: OpportunityComponent },
  { path: "statistics", component: StatisticsComponent },
  { path: "effectemployee", component: AffectemployeeComponent },
  { path: "matching", component: MatchingComponent },
  { path: '', component: EmployeeComponent, canActivate: [AuthGaurdService] },
  { path: 'addemployee', component: AddEmployeeComponent, canActivate: [AuthGaurdService] },
  //{ path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService] },
  { path: 'users', loadChildren: () => import('./components/users/user.module').then(m => m.UserModule) },
  { path: "complaint", component: ComplaintComponent },
  { path: "complaint/add/", component: AddcomplaintComponent },
  { path: "complaint/del:idComplaint", component: ComplaintComponent },
  { path: "statistics", component: StatisticsComponent },
  { path: "C", component: ComplaintstatisticComponent },
  { path: 'espaceReclamation', component: ReponseReclamationComponent },
  { path: 'listResponse', component: ResponseByUserComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'myPosts', component: MyPostsComponent },
  { path: "trip", component: AppComponent },
  { path: "Question", component: QuestionComponent },
  { path: "add", component: AddprofilComponent, canActivate: [AuthGaurdService] },
  { path: "Quiz", component: QuizComponent },
  { path: "Profil", component: ProfilComponent,canActivate: [AuthGaurdService] },
  {path:"update-invitation/:id",component:UpdateInvitationComponent},
  {path:"effectemployee",component:AffectemployeeComponent},
  {path:"invitation",component:InvitationComponent ,canActivate: [AuthGaurdService]},
  {path:'statsinvitation', component:StatsinvitationComponent, canActivate: [AuthGaurdService]},
  {path:"effectemployee",component:AffectemployeeComponent ,canActivate: [AuthGaurdService]},
  {path:"Equipement",component:EquipementComponent},
  {path:"update-Equipement/:id",component:EditEquipementComponent},
];


@NgModule({
  declarations: [
    EquipementComponent,
    EditEquipementComponent,
   AddEquipementComponent,
   
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    ForumComponent,
    ChatComponent,
    TravelComponent,
    AddtravelComponent,
    EdittravelComponent,
    TravelplanningComponent,
    VeiwPlanningsComponent,
    OpportunityComponent,
    AddopportunityComponent,
    EditopportunityComponent,
    EditplanningComponent,
    StatisticsComponent,
    MapsComponent,
    AffectemployeeComponent,
    MatchingComponent,
    OpportunitystatisticComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    LoginComponent,
    LogoutComponent,
    ComplaintComponent,
    AddcomplaintComponent,
    ComplaintstatisticComponent,
    StatisticsComponent,
    ReponseReclamationComponent,
    FormReponsereclamationComponent,
    FormReclamationComponent,
    ResponseByUserComponent,
    BadgeComponent,
    LikeComponent,
    CardPostComponent,
    MyPostsComponent,
    MyPostCardComponent,
    AppComponent,
    AddtravelComponent,
    TripComponent,
    AddtripComponent,
    QuestionComponent,
    ResponseComponent,
    QuizComponent,
    ProfilComponent,
    AddprofilComponent,
    EditprofilComponent,
    AddquizComponent,
    InvitationComponent,
    AddinvitationComponent,
    StatsinvitationComponent,
    InvitationComponent,
    UpdateInvitationComponent,
 
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgxChartsModule,
    ChartModule,
    PasswordModule,
    InputTextModule,
    NgxChartsModule,
    ChartModule,
    ToastrModule.forRoot(),
    ProgressSpinnerModule,
    TableModule, ButtonModule,
    AccordionModule,
    DialogModule, 
    DividerModule,
    UserRoutingModule,
    UserModule,
    NgxPaginationModule

  

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
