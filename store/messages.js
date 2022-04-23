const messages = [
  {
    fromUserId: 2,
    toUserId: 1,
    listingId: 1,
    content: "SECRET TRAILS? Im telling the government, forest services, biden, evergreen and your mother",
    id: 1,
    dateTime: 1586044521956
  },
  {
    fromUserId: 2,
    toUserId: 1,
    listingId: 1,
    content: "Bro, where is locals only at im trying to blow that place up on strava",
    id: 2,
    dateTime: 1586044521956
  },
  {
    fromUserId: 2,
    toUserId: 1,
    listingId: 1,
    content: "Hero dirt?",
    id: 3,
    dateTime: 1586044521956
  }
];

const getMessagesForUser = toUserId =>
  messages.filter(message => message.toUserId === toUserId);

const add = message => {
  message.id = messages.length + 1;
  message.dateTime = Date.now();
  messages.push(message);
};

module.exports = { add, getMessagesForUser };
