import { useAnimation } from '@angular/core/src/animation/dsl';
import { User } from './../models/user.interface';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
    user$: Observable<User>;

    constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
        // get auth data, then get firestore user document // null
        this.user$ = this.afAuth.authState
            .switchMap(user => {
                if (user) {
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
                } else {
                    return Observable.of(null)
                }
            })
    }

    googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.oAuthLogin(provider);
    }

    oAuthLogin(provider: any): any {
        return this.afAuth.auth.signInWithPopup(provider)
            .then((credential) => {
                this.updateUserData(credential.user)
            })
    }

    updateUserData(user) {
        // Sets user data to firestore on login
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
        
                const data: User = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,                  
                }
                userRef.ref.get().then(user => {
                    if (!user.exists) {
                        data.experience = 0;
                        data.level = 0;
                        data.roles = {
                            user: true
                        };
                        return userRef.set(data);
                    }
                    return userRef.update(data);
                });
    }

    logout() {
        this.afAuth.auth.signOut();
    }


    //// Abilities and Roles Auth /////
    //// Assign roles to ability method//
    canRead(user: User): boolean {
        const allowed = ['admin', 'user']
        return this.checkAuthorization(user, allowed);
    }
    canEdit(user: User): boolean {
        const allowed = ['admin', 'user']
        return this.checkAuthorization(user, allowed);
    }

    //determine if user has matching role //

    private checkAuthorization(user: User, allowedRoles: string[]): boolean{
        if(!user) return false;
        
        for (const role of allowedRoles) {
            if (user.roles[role]) {
                return true;
            }
        }
        return false;

    }

}