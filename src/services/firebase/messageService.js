import { firebaseDB } from "./";
// *** Message Service *** //

const MessageService = {
  // Create new message
  doCreateMessage: (text, senderId, receiverId) =>
    firebaseDB.ref("messages").push({
      text,
      senderId,
      receiverId,
      timestamp: Date.now(),
    }),

  // Fetch Messages
  onMessageAdded: (callback) => {
    return firebaseDB
      .ref("messages")
      .orderByChild("timestamp")
      .on("value", callback);
  },
};

export { MessageService };
