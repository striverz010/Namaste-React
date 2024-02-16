# `Exploring the world!`
# 1) What is `Shimmer UI`?
<img src="https://miro.medium.com/v2/resize:fit:588/format:webp/1*DP6RYDgDlUrTeYDjPuIhvg.jpeg"></img>
### `Shimmer UI`: A Better Way to Show Loading States
If you have ever used a web or mobile app that takes some time to load data from a server, you might have seen a loading spinner or a progress bar that indicates that something is happening. While these are common ways to show loading states, they are not very engaging or informative for the user. They don’t tell the user what kind of content is being loaded, how long it will take, or what to expect next.

A better way to show loading states is to use a shimmer UI. A shimmer UI is a version of the UI that doesn’t contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. It uses a gradient animation that creates a shimmering effect over the placeholders, giving the user a sense of motion and progress.
  <h2>Shimmer Effect:</h2>
<img src="https://miro.medium.com/v2/resize:fit:544/format:webp/1*3BNp4Y-Jf2KBhipecEfahg.jpeg"> </img>

# 2)What is Optional Chaining?
# `?.`
The optional chaining ‘?.’ is an error-proof way to access nested object properties, even if an intermediate property doesn’t exist.
```
const user = {
dog: {
	name: "Alex"
}
};

console.log(user.cat?.name); //undefined
console.log(user.dog?.name); //Alex
console.log(user.cat.name);  //it throws an error

```
<img src="https://media.geeksforgeeks.org/wp-content/uploads/20200615205015/Capture5.PNG"></img>
