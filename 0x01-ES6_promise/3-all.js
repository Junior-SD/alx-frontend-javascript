import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((succ) => {
      console.log(`${succ[0].body} ${succ[1].firstName} ${succ[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
