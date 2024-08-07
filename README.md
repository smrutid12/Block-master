# Block Puzzle Game

Welcome to the **Block Puzzle Game**, a modern twist on the classic Tetris game built with a Flask backend and a React frontend. This project demonstrates a full-stack web application combining Python, Flask, and ReactJS.

## Features

- **Interactive Gameplay**: Experience a smooth and interactive block puzzle game.
- **Real-time Score Tracking**: Keep track of your score and high score.
- **Responsive Design**: Enjoy the game on both desktop and mobile devices.
- **Modern Tech Stack**: Utilizes Flask for backend logic and React for the frontend interface.

## Project Structure

`block-puzzle-game/
├── backend/
│ ├── venv/
│ ├── app.py
│ ├── game.py
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── App.js
│ │ ├── index.js
│ ├── package.json
├── README.md`

## Getting Started

### Prerequisites

- Python 3.12
- Node.js and npm

### Backend Setup

1. Clone the repository:

   `bash
   git clone https://github.com/yourusername/block-puzzle-game.git
   cd block-puzzle-game/backend`
2. Create and activate a virtual environment:

    On Windows:
        `bash
        Copy code
        python -m venv venv
        venv\Scripts\activate`
    On macOS/Linux:
        `bash
        Copy code
        python3 -m venv venv
        source venv/bin/activate`

3. Install the dependencies:
    `bash
    Copy code
    pip install -r requirements.txt`

4.Run the Flask application:
`bash
Copy code
python app.py`

### Frontend Setup

1.Navigate to the frontend directory:

`bash
Copy code
cd ../frontend`
2. Install the dependencies:

`bash
Copy code
npm install`
3. Start the React application:

`bash
Copy code
npm start`

### Accessing the Game

- Open your web browser and go to [http://localhost:3000](http://localhost:3000) to start playing the game.

## Usage

-**Start Game:** Begin a new game.
-**Move Piece:** Use arrow keys or buttons to move the pieces left, right, or down.
Rotate Piece: Use the up arrow key or button to rotate the pieces.
-**Drop Piece:** Quickly drop the piece using the spacebar.

## Contributing

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://www.example.com) file for details.

## Acknowledgements

- Inspired by the classic Tetris game.
- Built with Flask and React.
  