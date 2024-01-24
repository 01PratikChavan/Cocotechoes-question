//people in various parties
const people =[ 
    [
      'person1',
      'person2',
     'person3'
    ] ,
    [
      'person2',
      'person4',
      'person6'
    ],
    [
      'person1',
      'person9',
    ],
    [
      'person2',
       'person4',
      'person6',
      'person9',
      'person10'
    ],
    [
       'person3',
       'person9',
       'person2',
       'person1'
        ]
  ]
  
  //Expenses 
  const expenses = [1000,500,999,654,784,7952,7462,784,955,4512,666];
  
    //to get random party as payer
  function generateRandomNum(){
      return ((Math.random()*100)%(people.length-1)).toFixed(0);
  }
    //generate the equal split among the people 
  function generateEqualSplit( num ,expense){
        return (expense/num.length).toFixed(2);
  }
  
  function generateExpense(){
         for(let i=0 ;i<expenses.length ;i++){
             let payer=generateRandomNum();
             //Payers list
             let expense = generateEqualSplit(people[payer],expenses[i]);
             //expene for each in payer 
             console.log(`Expense ${i} -> payer party ${payer} -> expense among each ${expense}`);
         }  
  }

  // console.log(generateRandomNum());
  

  // console.log(generateEqualSplit(people[2],100));
  
  
  //generating the expenses 
   generateExpense();
  
  
  
  