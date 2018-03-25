import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgModule } from '@angular/core';
import { AuthService } from "./auth.service";
import { AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
    imports: [
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule
    ],
    providers: [AuthService]
})
export class CoreModule { }
