var Youtube = function () {
  let subscriberList = [];

  return {
    subscribeChannel: function (person) {
      subscriberList.push(person);
    },
    unsubscribeChannel: function (person) {
      var index = subscriberList.indexOf(person);
      if (index > -1) {
        subscriberList.splice(index, 1);
      }
    },
    notifySubscriber: function (person) {
      var index = subscriberList.indexOf(person);
      if (index > -1) {
        subscriberList[index].notify(index);
      }
    },
    notifyAllSubscriber: function () {
      for (var i = 0; i < subscriberList.length; i++) {
        subscriberList[i].notify(i);
      }
    },
  };
};

var Subscriber = function (number) {
  return {
    notify: function () {
      console.log("Subscriber " + number + " is notified!");
    },
  };
};

var youtubeChannel = new Youtube();

var person1 = new Subscriber(1);
var person2 = new Subscriber(2);
var person3 = new Subscriber(3);
var person4 = new Subscriber(4);

youtubeChannel.subscribeChannel(person1);
youtubeChannel.subscribeChannel(person2);
youtubeChannel.subscribeChannel(person3);
youtubeChannel.subscribeChannel(person4);

youtubeChannel.notifySubscriber(person2);
youtubeChannel.unsubscribeChannel(person2);

youtubeChannel.notifyAllSubscriber();
