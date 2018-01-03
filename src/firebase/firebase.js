import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDyKKgyPP--15DCy6H4Bve2OOe9oONTJno',
    authDomain: 'arad-expensify.firebaseapp.com',
    databaseURL: 'https://arad-expensify.firebaseio.com',
    projectId: 'arad-expensify',
    storageBucket: 'arad-expensify.appspot.com',
    messagingSenderId: '848050633444'
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};

// database.ref('expenses').push({
//     description: 'gas bill',
//     amount: 120.54,
//     createdAt: 100000000,
//     note: ''
// });

// // database.ref('expenses').once('value').then((snapshot)=>{
// //     const expenses = [];
// //     snapshot.forEach(element => {
// //         expenses.push({
// //             id : element.key,
// //             ...element.val()
// //         })
// //     });
// //     console.log(expenses);
// // });

// // database.ref('expenses').on('value',snapshot => {
// //     const expenses=[];
// //     snapshot.forEach(element =>{
// //         expenses.push({
// //             id:element.key,
// //             ...element.val()
// //         })
// //     });
// //     console.log(expenses);
// // })

// // database.ref('expenses').on('child_removed',(snapshot)=>{
// //     console.log(snapshot.key, snapshot.val());
// // });

// // database.ref('expenses').on('child_changed',(snapshot)=>{
// //     console.log(snapshot.key, snapshot.val());
// // });

// // database.ref('expenses').on('child_added',(snapshot)=>{
// //     console.log(snapshot.key,snapshot.val());
// // })
// //challenge -->

// // database.ref().on('value' , snapshot =>{
// //     const values=snapshot.val();
// //     console.log(values.name + ' is ' + values.job.title + " at " +values.job.company)
// // })

// // database.ref('job/company').set("amazon")

// // setTimeout(()=>{
// //     database.ref('job/company').set("irankhodro :)) ")
// // },3500)

// //<--

// // const onValueChange = database.ref().on('value', snapshot => {
// //     console.log(snapshot.val());
// // }, (e)=>{
// //     console.log('Error with data fetching',e)
// // });

// // setTimeout(() => {
// //     database.ref('age').set(29);
// // }, 3500);

// // setTimeout(() => {
// //     database.ref().off('value',onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //     database.ref('age').set(30);
// // }, 10500);

// // database.ref().once('value').then((snpshot)=>{
// //     console.log(snpshot.val())
// // }).catch((e)=>{
// //     console.log('Error fetching data' , e)
// // })
// // database.ref().set({
// //     name: 'arad ashrafi',
// //     age: 18,
// //     stressLevel:6,
// //     job : {
// //         title : 'Software developer',
// //         company : 'Google'
// //     },
// //     isSingle: true,
// //     location: {
// //         city: 'rasht - tehran :D ',
// //         country: 'usa'
// //     }
// // }).then(()=>{
// //     console.log('Data is saved ');
// // }).catch((e)=>{
// //     console.log('failed  : ' , e)
// // })

// // database.ref().update({
// //    stressLevel:9,
// //    'job/company':'amazon',
// //    'location/city':"Seattle"
// // });
// // database.ref('attributes').set({
// //     height: 179,
// //     weight: 76
// // }).then(()=>{
// //     console.log('succeeded')
// // }).catch((e)=>{
// //     console.log("failed , error is : ",error)
// // })
