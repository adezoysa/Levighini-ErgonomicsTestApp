Levighini: Ergonomics Application
================================
This is a User Testing Application of the Myo Gestures that is intended to be integrate in to the final design.

SYDE 461/462 Design Project University of Waterloo. 

Server: https://github.com/suchintan/MyoServer

Team Members
------------

* Achini De Zoysa ([@adezoysa](https://github.com/adezoysa))
* Suchintan Singh ([@suchintan](https://github.com/suchintan))
* Menaka Kiriwattuduwa ([@mkiri](https://github.com/mkiri))
* Ann Han

Important
----------
* Things TO DO:
  1. Make the HTTP Request call and get the JSON object and edit "js/Controller.js" as required
  2. At change Configuration (ex: 1, 2, 3), you need to send the signal to the MYO

* Thing TO ENSURE:
  1. JSON object 
    -  Required to be = {"action":"Start","gesture":"Unlock Gesture"}
    -  Make sure always action start with a CAPITAL
    -  At Lock JSON = {"action":"Lock","gesture":""}
