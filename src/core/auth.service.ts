import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface User{
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    favoriteColor?: string;
}

@Injectable()
export class AuthService {
    
    
    user: Observable<User>;

    constructor( private afAuth: AngularFireAuth,
                private afs: AngularFirestore) {
    // get auth data, tehn get firestore user document // null
    this.user = this.afAuth.authState
                    .switchMap(user => {
                        if(user){
                            return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
                        } else{
                            return Observable.of(null)
                        }
                    })
    }
    
    googleLogin(){
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.oAuthLogin(provider);
    }

    oAuthLogin(provider: any): any {
        return this.afAuth.auth.signInWithPopup(provider)
            .then((credential)=>{
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
            photoURL: user.photoURL
        }

        return userRef.set(data);
    }

    logout(){
        this.afAuth.auth.signOut();
    }

}