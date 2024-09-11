
# 🏓 Ping Pong Score Keeper

Welcome to the Ping Pong Score Keeper Web-Project! 🎉 Keep track of scores between two players and declare a winner with style! Whether you're in the middle of a heated ping pong match or just having fun, this app will keep you on your game! 🏓


---

### 📷 **Screenshots**

Here's a sneak peek at what your Ping Pong Score Keeper looks like!

![Screenshot of the Ping Pong Score Keeper](https://github.com/user-attachments/assets/f1e41117-085b-45b2-949d-34548f7c2bb9)

---

### 🎥 **Demo Video**

Watch the demo to see the Ping Pong Score Keeper in action!

[![Watch the Demo](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://github.com/user-attachments/assets/e6d1b3f0-c996-4592-b0f3-1874d92468c0)


---

## 🚀 Features

- Dynamic Score Tracking: Add points for Player One and Player Two with just a click! 🎯
- Winner Announcement: Automatically announces the winner once a player reaches the set score limit! 🏆
- Score Limit Selector: Choose the maximum score (2, 3, 4, 5, or 6) for your matches! 🎮
- Easy Reset: Reset the game anytime and start fresh with the click of a button! 🔄
  
---

## ⚙️ How to Use

1. Start Playing:Choose the score limit from the dropdown menu 🕹️
2. Add Points:Click the buttons to add points to either Player One or Player Two.
3. Victory! The winner is declared automatically when a player reaches the score limit! 🎉
4. Reset: Want to play again? Just hit the reset button and start over! 🔁

---

## 🧩 Code Snippet Highlights

### Score Tracking Logic (JavaScript)

Here's a sneak peek at the core logic for tracking and updating the scores of Player One and Player Two:

```javascript
player1.addEventListener("click", function() {
    score[0] += 1;
    if (score[0] < limitvalue) {
        scorediv.innerHTML = `<b class="b1">${score[0]}</b> to <b class="b2">${score[1]}</b>`;
    } else {
        declareWinner(1);
    }
});

player2.addEventListener("click", function() {
    score[1] += 1;
    if (score[1] < limitvalue) {
        scorediv.innerHTML = `<b class="b1">${score[0]}</b> to <b class="b2">${score[1]}</b>`;
    } else {
        declareWinner(2);
    }
});

reset.addEventListener("click", function() {
    score[0] = score[1] = 0;
    resetGame();
});
```

### Winner Declaration 🏆

```javascript
function declareWinner(player) {
    if (player === 1) {
        winnertextdiv.innerHTML = `<p><b>Player 1 has won</b></p>`;
        setStyles("green", "red");
    } else {
        winnertextdiv.innerHTML = `<p><b>Player 2 has won</b></p>`;
        setStyles("red", "green");
    }
    disableButtons();
}
```

---

## 🎨 Customization

Want to make it your own? Here's what you can change:

- Background Image: Replace `bg1.jpg` with your favorite image of a ping pong table, stadium, or anything you like! 🖼️
- Styling: Edit the `style.css` file to give it a personal touch! Customize the button colors, font styles, or even add animations! 🎨✨

---

## 📂 Project Structure

```
PingPongScoreKeeper/
│
├── index.html   # HTML structure
├── style.css    # Styling for the page
└── script.js    # Game logic and functionality
```

---

## 🛠️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AKdevi99/Score-Keeper.git
   ```
2. Open the project in your favorite code editor! 🖥️

3. Run the `index.html` file in any browser, and you're all set! 🎮

---

## 🏅 Contributing

If you have any cool ideas or features you'd like to add, feel free to fork the repo and submit a pull request! Let's make this scorekeeper even better! 💡👾

---

## 📬 Contact

If you have any questions or just want to say hi, feel free to reach out!

---

Get your paddle ready, and let's start scoring! 🏓🔥

---
