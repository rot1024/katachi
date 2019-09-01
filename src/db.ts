import { useCallback, useMemo } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { authState } from "rxfire/auth";
import { list } from "rxfire/database";
import { of } from "rxjs";
import { map, withLatestFrom, mergeMap } from "rxjs/operators";
import { useObservable } from "rxjs-hooks";

import { TrainingHistory } from "./lib";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBkXkX7PIAhCXvnTau7lzrb1AOWbJXoa8I",
  authDomain: "katachi-25f71.firebaseapp.com",
  databaseURL: "https://katachi-25f71.firebaseio.com",
  projectId: "katachi-25f71",
  storageBucket: "katachi-25f71.appspot.com",
  messagingSenderId: "1057352886357",
  appId: "1:1057352886357:web:5e0e73ee245b501c"
});
const provider = new firebase.auth.TwitterAuthProvider();
const auth = firebase.auth(app);
const db = firebase.database(app);

export enum AuthState {
  Loading,
  SignedOut
}

export const useAuth = () => {
  const user = useObservable<string | AuthState>(
    () =>
      authState(auth).pipe(
        map(user => (user ? user.uid : AuthState.SignedOut))
      ),
    AuthState.Loading
  );
  const signIn = useCallback(() => auth.signInWithRedirect(provider), []);
  const signOut = useCallback(() => auth.signOut(), []);
  return [user, signIn, signOut] as const;
};

export const useHistories = (user?: string) => {
  const ref = useMemo(
    () =>
      user ? db.ref(`users/${user.replace("/", "")}/histories`) : undefined,
    [user]
  );

  const histories = useObservable<
    TrainingHistory[],
    [firebase.database.Reference | undefined]
  >(
    input$ =>
      input$.pipe(
        mergeMap(([ref]) =>
          ref
            ? list(ref).pipe(
                map(changes => [
                  ...changes
                    .map(c => [c.snapshot.key, c.snapshot.val()] as const)
                    .map<TrainingHistory>(([, h]) => ({
                      datetime: new Date(h.datetime),
                      type: h.type,
                      params: h.params,
                      scores: h.scores,
                      state: h.state
                    }))
                ])
              )
            : of([])
        )
      ),
    [],
    [ref]
  );

  const addHistory = useCallback(
    (h: TrainingHistory) =>
      ref
        ? ref
            .push({
              datetime: h.datetime.getTime(),
              type: h.type,
              params: h.params,
              scores: h.scores,
              state: h.state
            })
            .then(() => {})
        : Promise.reject(),
    [ref]
  );

  return [histories, addHistory] as const;
};
