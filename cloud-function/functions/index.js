const functions = require('firebase-functions');
const firebaseAdmin = require('firebase-admin');

firebaseAdmin.initializeApp(functions.config().firebase);
const db = firebaseAdmin.firestore();
exports.blockedUsersHandler = functions
  .region('europe-west6')
  .firestore.document('users/{id}')
  .onUpdate(async (event, context) => {
    const user = event.after.data();
    // check if user active
    if (user.status) return;

    // find all appointments where the updated user id and appointments status are reserved
    // change userId to be empty and  status to be pending,
    const slotsQuerySnapShot = await db.collection('appointments')
      .where('userId', '==', user.id)
      .where('status', '==', 'reserved')
      .get();

    return slotsQuerySnapShot.docs.map(doc => {
      return doc.ref.update({ userId: '', status: 'pending' });
    });
  });
