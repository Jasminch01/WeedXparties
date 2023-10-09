<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Because greetign is not a variable that's why the ans is greeting is not defind</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>In this sum function, the variable of the "a" value is a number and the variable of "b" value is a string. In javasctipt when sum between a number and a string the number converted to a sting thats why the sum function output is a string which is '12'</i>
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The correct answer is "A" because code number of line 55 declare a constant variable food which contains an array of four deferent food and the 56 number line declare a variable info which is an object and contain a property favourite food that property is array of food variable index number 0 and 58 number line reassign the proparty of the favoriteFood value and finaly console a the food variable which is a array of four types of food and the food array is not change or any update of the code thats why the ans is "A"</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The function sayHi receives a argument which is name and the function returns 'Hi there' and the received argument. When the console log and calls the function "sayHi" when call the function does not provide the parameter that's why console only the string "Hi there" and the name is declared but not defined so console name value is 'undefined'</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>In this code variable of count whose initial value is 0 and the constant variable nums value is an array which contains four elements, and the nums foreach function which is iterates the elements of the array of nums and takes a single elements of the nums array which name is num and the num.forEach function inside a condition if num is true count increases by 1. when for the nums element is true to increase count number by 1. the elements of the nums array 1,2,3 is the truthy value that's why increase count increase 3 and the answer is 3</i>

</p>
</details>
