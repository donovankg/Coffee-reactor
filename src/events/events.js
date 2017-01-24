import React, {Component} from 'react';

// let myEventsList = [];
// ----------mock data---------------
var myEventsList = [
  {
    'title': 'Lunch',
    'start':new Date(2017, 0, 12, 0, 0, 0, 0),
    'end': new Date(2017, 0, 12, 0, 0, 0, 0),
    desc: 'Power lunch'
  },
  {
    'title': 'Meeting',
    'start':new Date(2017, 0, 14, 0, 0, 0, 0),
    'end': new Date(2017, 0, 15, 0, 0, 0, 0)
  },
  {
    'title': 'Happy Hour',
    'start':new Date(2017, 0, 16, 0, 0, 0, 0),
    'end': new Date(2017, 0, 16, 0, 30, 0, 0),
    desc: 'Most important meal of the day'
  }
];
let keyId= 0;
  for(var key in myEventsList){
    myEventsList[key].id = keyId;
    keyId++;
}


localStorage.setItem('myEventsList', JSON.stringify(myEventsList));


//load data from local storage on start

if(!localStorage.myEventsList){
  localStorage.setItem('myEventsList',JSON.stringify(myEventsList));
}
var loadData = localStorage.getItem('myEventsList');
myEventsList = JSON.parse(loadData);


export default myEventsList;
