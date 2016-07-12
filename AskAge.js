const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Your Age? :  ', (answer) => {
    
  var age = parseInt(answer);
  //var a = age+5;
  //var b = a+20;
 //var c = b+30;
  
  addyears(age,5)
  addyears(age,20)
  addyears(age,30) 
 
  rl.close();
});

function  addyears(age,increment){
    var check = age + increment;
    
    if(check<15) 
  {
      console.log('After '+increment+ ' years: I dont have to think about my life yet.');
  }
else if(check>15&&check<30)
    {
       console.log('After '+increment+ ' years: Need to finish studies and find a job.');  
    }
 else if(check>=30&&check<35)
  {
    console.log('After '+increment+ ' years: I need to marry.');    
      
  }
else if(check>=35&&check<40)
  {
      console.log('After '+increment+ ' years: I will rear children.');    
  }
 else if(check>=40&&check<=59)
  {
      console.log('After '+increment+ ' years: Prepare to Retire.');    
  }
 else if(check=60)
  {
      console.log('After '+increment+ ' years: I will now retire.');    
  }
 
    
}