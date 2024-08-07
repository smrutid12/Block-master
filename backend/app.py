from flask import Flask, jsonify, request
from flask_cors import CORS
from game import BlockPuzzle

app = Flask(__name__)
CORS(app)

# Create a game instance
game = BlockPuzzle()

@app.route('/start', methods=['GET'])
def start_game():
    game.start()
    return jsonify(game.get_state())

@app.route('/move', methods=['POST'])
def move_piece():
    direction = request.json.get('direction')
    game.move(direction)
    return jsonify(game.get_state())

@app.route('/rotate', methods=['POST'])
def rotate_piece():
    game.rotate()
    return jsonify(game.get_state())

@app.route('/drop', methods=['POST'])
def drop_piece():
    game.drop()
    return jsonify(game.get_state())

@app.route('/score', methods=['GET'])
def get_score():
    return jsonify({"score": game.score, "high_score": game.high_score})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
