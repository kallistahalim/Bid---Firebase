var firebaseConfig = {
    apiKey: "AIzaSyByC8SqTzY98BmZZEAVNz8mdAYXORcBKXU",
    authDomain: "bidder-a43e9.firebaseapp.com",
    databaseURL: "https://bidder-a43e9.firebaseio.com",
    projectId: "bidder-a43e9",
    storageBucket: "bidder-a43e9.appspot.com",
    messagingSenderId: "646975285182",
    appId: "1:646975285182:web:2c62fcbe4a460d14dc3bef",
    measurementId: "G-ZDMTTWF9KP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var bidderName = "";
var bidderPrice = 0;
var highestBidder = "";
var highestBid = 0;

$("#submit-bid").on("click", function () {
    bidderName = $("#bidder-name").val().trim();
    bidderPrice = parseInt($("#bidder-price").val().trim());
    
    if (bidderPrice > highestBid) {
        highestBid = bidderPrice;

        firebase.database().ref().set({
            highestBidder: bidderName,
            highestBid: bidderPrice
        })

    } else {
        alert("You have to bid higher!")

    }
    return false;
});

firebase.database().ref().on("value", function (snapshot) {
    console.log(snapshot.val())
    $("#highest-bidder").html(snapshot.val().highestBidder);
    $("#highest-price").html(snapshot.val().highestBid);
});
