import { useCallback, useMemo } from "react";
import {
  initializeApp,
  auth as firebaseAuth,
  database as firebaseDatabase
} from "firebase";
import "firebase/auth";
import "firebase/database";
import { authState } from "rxfire/auth";
import { list } from "rxfire/database";
import { of } from "rxjs";
import { map, withLatestFrom, mergeMap } from "rxjs/operators";
import { useObservable } from "rxjs-hooks";

import { TrainingHistory } from "./lib";

const app = initializeApp({
  apiKey: "AIzaSyBkXkX7PIAhCXvnTau7lzrb1AOWbJXoa8I",
  authDomain: "katachi-25f71.firebaseapp.com",
  databaseURL: "https://katachi-25f71.firebaseio.com",
  projectId: "katachi-25f71",
  storageBucket: "katachi-25f71.appspot.com",
  messagingSenderId: "1057352886357",
  appId: "1:1057352886357:web:5e0e73ee245b501c"
});
const provider = new firebaseAuth.TwitterAuthProvider();
const auth = firebaseAuth(app);
const db = firebaseDatabase(app);

export const useAuth = () => {
  const user = useObservable(
    () => authState(auth).pipe(map(user => (user ? user.uid : undefined))),
    undefined
  );
  const signIn = () => auth.signInWithRedirect(provider);
  const signOut = () => auth.signOut();
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
    [firebaseDatabase.Reference | undefined]
  >(
    (input$, history$) =>
      input$.pipe(
        mergeMap(([ref]) =>
          ref
            ? list(ref).pipe(
                withLatestFrom(history$),
                map(([changes, histories]) => [
                  ...histories,
                  ...changes
                    .map(c => [c.snapshot.key, c.snapshot.val()] as const)
                    .map<TrainingHistory>(([, h]) => ({
                      datetime: new Date(h.datetime),
                      type: h.type,
                      params: h.params,
                      scores: h.scores
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
              scores: h.scores
            })
            .then(() => {})
        : Promise.reject(),
    [ref]
  );

  return [histories, addHistory] as const;
};
