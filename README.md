## Starting your work on this test:

1. Install the latest version of [Cocos Creator](https://cocos2d-x.org/creator).
2. [Download](https://bitbucket.org/inogames/tests/downloads/) a copy of this repository.
3. [Read up](https://docs.cocos2d-x.org/creator/manual/en/getting-started/coding-setup.html) on the official guidelines.

You can use whatever IDE you are used to, however we do recommend using [VSCode](https://code.visualstudio.com) for the official integration and the correct node modules, installed with npm init, or via the following commands in the project folder.

```
npm install
```

---

## What is expected of you?

1. **Working on the code from this repository**, improve a simple slots game.
2. Deliver two features in the game: **pattern reproduction** and **tile animation**.
3. The capacity to understand written code and new tech. You should improve what is already written, **not** rewrite the game completely.
4. **Clean and commented code**. Feel free to comment the existing code - it will be useful in understanding how it works.
5. Basic git skills. Your delivery should be done via a **public github repository**.

---

## What should you deliver?

### Simple Patterns:

Currently, the game is capable of animating a 3x5 slot machine, displaying a set of random icons every time the spin ends. Your delivery should have the following behavior:

1. **50%** of the time it should return this random configuration of tiles.
2. **33%** of the time it should display a single line of equal tiles.
3. **10%** of the time it should display two lines of equal tiles.
4. **7%** of the time all lines should show equal tiles.

### Tile Animation:

As it stands, nothing happens once the spin ends, whether or not it shows a pattern. Your game delivery should have the following behavior:

1. If one of the patterns hardcoded previously is triggered, **every tile on that set** should display an animation.
2. The glow animation for this is included within the project files as a **Spine** file *(Deactivate `Pre-multiplied Alpha` on the node for better results)*.
3. This animation should only be stopped should the player spin the tiles again.

*PS: Do not overthink this. It is not required that your code contemplates lines being formed in the 50% window, therefore it is not needed that you write a pattern recognizer.*

---

## What approach do we suggest?

1. Install VSCode and npm dependencies.
2. Get familiarized with Cocos Creator, and integrate VSCode with it.
3. Open up the project in the engine. Play it.
4. Try to figure out the relationships between the entities.
5. Ready a cup of the beverage of your choice - preferably hot and non-alcoholic.
6. Start breaking things down.

---

## That's it!

Feel free to contact us should you face any blocking issues or difficulties that stop your progress. 