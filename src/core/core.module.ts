import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgModule } from '@angular/core';
import { AuthService } from "./auth.service";

@NgModule({
    imports: [
        AngularFireAuthModule,
        AngularFirestoreModule
    ],
    providers: [AuthService]
})
export class CoreModule { }
