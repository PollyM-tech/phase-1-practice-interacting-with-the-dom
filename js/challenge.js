let count = 0;
let timer;
let likes = {}; 

//See the timer increment every second once the page has loaded.
function startTimer() {
    timer = setInterval(() => {
        count++; //increment
        document.getElementById("counter").innerHTML = count; // Added this line to update the counter display
    }, 1000); //every second its being updated
}
startTimer(); //See the timer once page loads

//Manually increment and decrement the
//counter using the plus and minus buttons.
document.getElementById("minus").onclick = function () {
    count -= 1; //Decrements (fixed variable name from "counter" to "count")
    document.getElementById("counter").innerHTML = count;
};
document.getElementById("plus").onclick = function () {
    count += 1; //increment (fixed variable name from "counter" to "count")
    document.getElementById("counter").innerHTML = count;
};

//"Like" an individual number of the counter.
document.getElementById("heart").onclick = function () {
    if (likes[count]) {
        likes[count]++; //increments like
    } else {
        likes[count] = 1; //initializes the like count
    }

    const likesList = document.querySelector(".likes");
    likesList.innerHTML = ""; // it clears the list/ to start a fresh
    //adding new items to the list
    for (let num in likes) {
        const li = document.createElement("li");
        li.textContent = `${num} it's liked ${likes[num]} times`;
        likesList.appendChild(li);
    }
};

//pausing the counter, disable all buttons except pause btn
//switch label on the button from the pause to resume
document.getElementById("pause").onclick = function () {
    if (timer) {
        clearInterval(timer);
        timer = null; //reseting
        //btn change
        document.getElementById("pause").textContent = "resume"; // Fixed: Added quotes around "resume"
        // to pause the counter and prevent confusion except click resume
        //It makes it clear when the game is paused and when it’s running.
        document.getElementById("minus").disabled = true;
        document.getElementById("plus").disabled = true;
        document.getElementById("heart").disabled = true;
    } else {
        startTimer();
        document.getElementById("pause").textContent = "pause"; // Fixed: Added quotes around "pause"
        document.getElementById("minus").disabled = false;
        document.getElementById("plus").disabled = false;
        document.getElementById("heart").disabled = false;
    }
};

//Leave comments on my gameplay, such as: "Wow, what a fun game this is."
//this is the form part i need to focus on
document.getElementById("comment-form").addEventListener("submit", function (e) {
    e.preventDefault();
    //getting comment from input
    //.value gets the text that someone typed into an input box.
    let comment = document.getElementById("comment-input").value;
    //this is for the new element
    const newComment = document.createElement("div");
    newComment.textContent = comment;
    document.getElementById("list").appendChild(newComment);
    //helps with clearing the input list
    document.getElementById("comment-input").value = "";
});