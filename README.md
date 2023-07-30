# Tic Tac Toe Game - Next.js Project

This is a simple Tic Tac Toe game built using Next.js, a React framework for building server-side rendered and statically generated web applications. The game allows two players to take turns and compete to win by aligning three of their symbols in a row, column, or diagonal on the game board.

## Project Setup

To set up the Tic Tac Toe game project, follow the steps below:

1. **Clone the Repository**: Start by cloning this repository to your local machine using Git.

```bash
git clone https://github.com/genie360s/tic-tac-toe.git
```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using npm or yarn.

```bash
cd tic-tac-toe-
npm install
```

3. **Run the Development Server**: Once the dependencies are installed, you can start the development server.

```bash
npm run dev
```

4. **Access the Application**: The development server will be running at `http://localhost:3000` by default. Open your web browser and navigate to this address to access the Tic Tac Toe game.

## Game Components

The project is organized into three components:

1. **Square Component**: This component represents each square on the game board. It receives the `value` prop, which determines if it's an "X", "O", or empty. It also receives the `onSquareClick` prop, which is a callback function triggered when the square is clicked.

2. **Board Component**: The Board component renders the Tic Tac Toe game board, containing a 3x3 grid of Square components. It also handles the game logic and state management using React hooks.

3. **Game Component**: The Game component is the top-level component that manages the game history and the current state of the board. It renders the Board component and displays the game status, including the winner or the next player to move.

## Gameplay

- The game starts with an empty 3x3 grid, and "X" is the first player to move.
- Players take turns clicking on an empty square to place their symbol (either "X" or "O").
- The game checks for a winner after each move and displays the winning player.
- If all squares are filled, and there is no winner, the game ends in a draw.
- To start a new game, simply click the "New Game" button.

Feel free to explore the codebase and make any enhancements or modifications you desire to customize the Tic Tac Toe game further.

Enjoy playing Tic Tac Toe with your friends or family using this simple Next.js project!

## Author 
- Alex Mkwizu 
- <alexgmkwizu@gmail.com>
- +255753648150

## Credits
- [React Documentation](https://react.dev/)


