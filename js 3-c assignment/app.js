
                             // Conditional assignement work  - 3


// 1. Speed Limit Warning
// Given a speed, print:
// "Too slow" if below 30
// "Safe speed" if between 30 and 60
// "Speeding" if between 61 and 100
// "Dangerously fast" if over 100

let speed = 60;
if( speed < 30){
    console.log("Too slow");
}
else if( speed >=30 && speed <=60){
    console.log("Safe speed");
}
else if( speed >=61 && speed <=100){
    console.log("Speeding");
}
else{
  console.log("Dangerously fast");
}

// 2. Library Book Return Fine
// Given number of late days, calculate the fine:
// 0 days: $0
// 1–5 days: $1 per day
// 6–10 days: $2 per day
// 11+ days: $5 per day

let latedays = 6;
if( latedays == 0){
    console.log("you pay 0$ fine");
}
else if( latedays >=1 && latedays <=5){
    console.log("you pay 1$ fine");
}
else if( latedays >=6 && latedays <=10){
    console.log("you pay 2$ fine");
}
else{
  console.log("you pay 5$ fine");
}

// 3. Event Entry Eligibility
// Check if a person (with age and ticket) can enter:
// Must be 18 or older
// Must have a valid ticket

let age = 20;
let ticket = true;
if( age >=18 && ticket){
    console.log("You can enter and enjoy the event");
}
else{
    console.log("You are not eligibile to enter the event");
}

// 4. Smartphone Battery Status
// Given battery percentage, print:
// 80–100: "Fully charged"
// 50–79: "Good battery"
// 20–49: "Low battery"
// Below 20: "Charge now!"

let batterypercentage = 50;
if( batterypercentage >=80 && batterypercentage <=100){
    console.log("Fully charged");
}
else if( batterypercentage >=50 && batterypercentage <=79){
    console.log("Good battery");
}
else if( batterypercentage >=20 && batterypercentage <=49){
    console.log("Low battery");
}
else{
    console.log("Charge now");
}

// 5. Discount Eligibility
// Given customer type and age, apply discount:
// Student: 20%
// Senior (60+): 30%
// Others: 0%

let type = "senior";
let agee = 20;
if( type == "student" && agee >=15){
    console.log("you get 20% disscount");
}
else if( type == "senior" && agee >=60){
    console.log("you get 30% disscount");
}
else{
  console.log("you have no disscount");
}

// 6. Clothing Recommendation
// Based on temperature (°C), suggest clothing:
// Below 10: "Heavy jacket"
// 10–20: "Sweater"
// 21–30: "T-shirt"
// Above 30: "Light clothes"

let temperature = 13;
if( temperature <10){
    console.log("Heavy jackets");
}
else if( temperature >=10 && temperature <=20){
    console.log("Sweaters");
}
else if( temperature >=21 && temperature <=30){
    console.log("Shirts");
}
else{
  console.log("Long clothes");
}

// 7. Water Intake Reminder
// Based on activity level, suggest water intake:
// Sedentary: 2L
// Moderate: 2.5L
// Active: 3L+

let activitylevel = "active";
if( activitylevel == "sedentary"){
    console.log("you need to drink 2L water");
}
if( activitylevel == "moderate"){
    console.log("you need to drink 2.5L water");
}
else{
  console.log("you need to drink 3L or more than 3L water");
}

// 8. Exam Result Evaluation
// Given three subject marks, print:
// "Pass" if all marks are 40 or above
// "Fail" if any mark is below 40

let chemistry = 97;
let physics = 80;
let biology = 96;
if( chemistry >=40 && physics >=40 && biology >=40){
    console.log("Pass");
}
else{
    console.log("Fail");
}

// 9. App Theme Selection
// Based on time of day (0–23), select theme:
// 6–17: Light Mode
// Otherwise: Dark Mode

let days = 15;
if( days >=6 && days <=17){
    console.log("Light Mode");
}
else{
    console.log("Dark Mode");
}

// 10. Meal Type Identifier
// Based on time of day (0–23), identify meal:
// 6–10: Breakfast
// 12–14: Lunch
// 18–21: Dinner
// Any other time: Snack

let time = 18;
if( time >=6 && time <=10){
    console.log("Breakfast Time");
}
else if( time >=12 && time <=14){
    console.log("Lunch Time");
}
else if( time >=18 && time <=21){
    console.log("Dinner Time");
}
else{
    console.log("Snack Time");
}
