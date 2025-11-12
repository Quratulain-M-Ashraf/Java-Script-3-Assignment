                                            //  Part- 2 Conditional Statements Assignment



// 1. Age-Based Grade Check
// Check a student's marks and display:
// ● "Distinction" if marks ≥ 80
// ● "Pass" if marks ≥ 50 and < 80
// ● "Fail" if marks < 50
// ● "Invalid Marks" if marks are not between 0 and 100 

let studentScore = 85;
if(studentScore >= 80){
console.log("You have a high score!");
}
else if(studentScore >=50 && studentScore <80){
conso;le/log("You are pass!");
}
else if(studentScore <50 && studentScore >=0){
console.log("You are fail!");
}
else{
console.log("Invalid Marks");
}

// 2. Discount Eligibility Based on Age and Membership
// Given a person's age and membership status, show:
// ● "Senior Premium Discount" if age ≥ 60 and is a premium member
// ● "Senior Discount" if age ≥ 60
// ● "Premium Discount" if a premium member
// ● "No Discount" otherwise

let age = -20;
if(age>= 60){
console.log("You are a premium member !");
}
else if(age <=60 && age>=0){
console.log("senior discount 50%!");
}
else{
console.log("no discount!");
}

// 3. Login and Email Verification
// ● If user is logged in and email is verified → "Access granted"
// ● If user is logged in but not verified → "Please verify your email"
// ● If not logged in → "Please log in"

let loggedin = false;
let emailverified= true;
if( loggedin && emailverified){
    console.log("Access granted");
} 
else if( loggedin && !emailverified){
    console.log("Please verify your email");
}
else{
    console.log("Please log in");
}

// 4. Contest Eligibility
// Check if a person is eligible to enter a contest:
// ● Must be between ages 18–35
// ● Must be from Pakistan or India
// ● Must not be banned

let ages = 10;
let country =" pakistan";
let banned = false;
if( ages >=18 && ages<=35 &&( country == "pakistan" || country == "korea") && !banned){
    console.log("You are eligible to enter the contest!");
}
else{
    console.log("You are not eligible to enter the contest!");
}

// 5. Subscription Access Check
// Given the subscription plan and login status:
// ● "Welcome Premium User" if plan is "premium" and logged in
// ● "Welcome Free User" if plan is "free" and logged in
// ● "Please log in to continue" if not logged in
// ● "Invalid subscription" otherwise

let subscription = false;
let logedin = false;
if( subscription  && logedin ){
    console.log("Welcome Premium User");
} 
else if( !subscription && logedin ){
    console.log("Welcome free User");
}
else if( subscription&& !logedin ){
    console.log("Please log in to continue");
}
else{
    console.log("invalid subscription");
}

// 6. Product Purchase Validation
// Check product conditions:
// ● "Buy now with discount" if price > 1000, in stock, and user is a member
// ● "Buy now" if in stock
// ● "Out of stock" if stock === 0
// ● "Invalid product" otherwise

let price = 1200;
let stock = false;
let member = true;
if( price > 1000 && stock && member){
    console.log("Buy now with discount")
}
else if(price <1000 && price == 50 && stock && !member){
    console.log("Buy now");
}
else if (price>1000 && !stock && member){
    console.log("out of stock");
}
else{
    console.log("Invalid product");
}

// 7. Work Hours Check
// Check based on hoursWorked and isWeekend:
// ● "Overtime" if hours > 40 and not a weekend
// ● "Weekend work" if hours > 0 and is weekend
// ● "Regular hours" if ≤ 40
// ● "No work" if hours === 0

let jobwork = 20;
let weekend = false;
if( jobwork >40 && !weekend ){
    console.log("Your work policy is overtime");
}
else if( jobwork >0 && weekend){
    console.log("You done your work on weekend policy");
}
else if( jobwork <= 40  && jobwork == 0   && !weekend){
    console.log("You done your work on regular hours");
}
else{
    console.log("No Work");
}

// 8. Age and Gender Classification
// Given a user's age and gender:
// ● "Teen Male" if age 13–19 and gender is "male"
// ● "Teen Female" if age 13–19 and gender is "female"
// ● "Adult" if age ≥ 20
// ● "Child" if age < 13

let Age = 18;
let gender = "female";
if ( Age >=13 && Age <=19 && gender == "male"){
     console.log("Teen Male");     
}
else if( Age >=13 && Age <= 19 && gender == "female"){
    console.log("Teen Female");
}
else if( Age >=20 ){
    console.log("Adult");
}
else{
    console.log("Child");
}

// 9. Weather Warning System
// Based on temperature and humidity:
// ● "Heatwave Alert" if temp ≥ 40 and humidity ≥ 60
// ● "Hot and Dry" if temp ≥ 40 and humidity < 60
// ● "Cool Weather" if temp ≤ 20
// ● "Moderate" otherwise

let temperature = 40;
let humidity = 60;
if( temperature>=40 && humidity >=60 ){
    console.log("Heatwave  Alert");
}
else if( temperature >=40 && humidity <60){
    console.log("Hot  and Dry");
}
else if ( temperature<=20){
    console.log("Cool Weather");
}
else{
    console.log("Moderate");
}

// 10. Score Grading System
// Given a score between 0–100:
// ● "Excellent" for 90–100
// ● "Good" for 70–89
// ● "Average" for 50–69
// ● "Poor" for 30–49
// ● "Fail" below 30
// ● "Invalid Score" if out of range

let score = 80;
if( score >=90 && score <=100){
   console.log("Excellent");
}
else if( score >=70 && score <=89){
    console.log("Good");
}
else if( score >=50 &&  score <=69){
    console.log("Average");
}
else if( score >=30 && score <=49){
    console.log("Poor");
}
else if( score <30 && score >=0){
    console.log("Fail");
}
else{
    console.log(" Invalid score");
}

// 11. Course Access Control
// To access a course:
// ● Must be logged in
// ● Must be enrolled
// ● Must not be banned
// Show: "Access granted", "Enroll in course first", "User is banned", or "Please log in"

let logein = true;
let enrolled = true;
let baned = false;
if( logein && enrolled && banned){
  console.log(" Access granted");
}
else if( logein && !enrolled && banned){
  console.log("Enroll in course first");
}
else if( logein && enrolled && !banned){
  console.log("User is banned");
}
else{
  console.log("Please log in");
}

// 12. Driving Conditions
// Given a user's speed and license status:
// ● "License suspended" if speed > 120
// ● "Warning" if speed between 100–120
// ● "Normal driving" if speed ≤ 100 and has license
// ● "Driving without license" otherwise

let speed= 90;
let license = true;
if( speed >120){
    console.log("License suspended");
}
else if( speed >=100 && speed <=120){
    console.log("Warning");
}
else if( speed <=100 && license){
    console.log("Normal driving"); 
}
else{
    console.log("Driving without license");
}

// 13. Order Processing Status
// For an online order:
// ● "Order on the way" if payment is complete and shipped
// ● "Preparing your order" if payment is complete and not shipped
// ● "Awaiting payment" if payment is pending
// ● "Payment failed" if transaction failed

let payment  = true;
let shipped = false;
if( payment && shipped){
    console.log("Order on the way");
}
else if( payment && !shipped){
    console.log("Preparing your order");
}
else if( !payment && shipped){
    console.log("Awaiting payment");
}
else{
    console.log("Payment failed");
}

// 14. Battery Status Checker
// Given battery level and charging state:
// ● "Fully Charged" if level === 100
// ● "Charging..." if level < 100 and charging
// ● "Low Battery" if level < 20 and not charging
// ● "Battery OK" otherwise

let  batterylevel =  70;
let charging  = true;
if( batterylevel === 100){
    console.log("Fully Charged");
}
else if( batterylevel < 100 && charging ){
    console.log("Charging");
}
else if( batterylevel < 20 && !charging ){
    console.log("Low Battery");
}
else{
    console.log("Battery OK");
}

// 15. Browser and Device Compatibility Check
// Based on user's browser and device:
// ● "Full features enabled" if browser is Chrome and device is Desktop
// ● "Limited mobile features" if browser is Chrome and device is Mobile
// ● "Please switch to Chrome" for all other browsers

let browser = "chrome";
let devise =  "mobile";
if( browser == "chrome" && devise == "desktop"){
  console.log("Full features enabled");
}
else if( browser == "chrome" && devise == "mobile"){
  console.log("Limited mobile features");
}
else{
    console.log("Please switch to Chrome");
}