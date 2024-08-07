import random
from utils import SHAPES

# Define the colors for the shapes
SHAPE_COLORS = [
    (0, 255, 0),    # Green
    (255, 0, 0),    # Red
    (0, 255, 255),  # Cyan
    (255, 255, 0),  # Yellow
    (255, 165, 0),  # Orange
    (0, 0, 255),    # Blue
    (128, 0, 128)   # Purple
]

class Piece:
    def __init__(self, x, y, shape):
        self.x = x
        self.y = y
        self.shape = shape
        self.color = SHAPE_COLORS[SHAPES.index(shape)]
        self.rotation = 0

class BlockPuzzle:
    def __init__(self):
        self.grid = self.create_grid()
        self.locked_positions = {}
        self.current_piece = self.get_shape()
        self.next_piece = self.get_shape()
        self.score = 0
        self.high_score = self.load_high_score()
        self.game_over = False

    def create_grid(self):
        return [[(0, 0, 0) for _ in range(10)] for _ in range(20)]

    def convert_shape_format(self, shape):
        positions = []
        format = shape.shape[shape.rotation % len(shape.shape)]

        for i, line in enumerate(format):
            row = list(line)
            for j, column in enumerate(row):
                if column == '0':
                    positions.append((shape.x + j, shape.y + i))

        for i, pos in enumerate(positions):
            positions[i] = (pos[0] - 2, pos[1] - 4)

        return positions

    def valid_space(self, shape):
        accepted_pos = [[(j, i) for j in range(10) if self.grid[i][j] == (0, 0, 0)] for i in range(20)]
        accepted_pos = [j for sub in accepted_pos for j in sub]

        formatted = self.convert_shape_format(shape)

        for pos in formatted:
            if pos not in accepted_pos:
                if pos[1] > -1:
                    return False
        return True

    def check_lost(self):
        for pos in self.locked_positions:
            _, y = pos
            if y < 1:
                return True
        return False

    def get_shape(self):
        return Piece(5, 0, random.choice(SHAPES))

    def clear_rows(self):
        inc = 0
        for i in range(len(self.grid) - 1, -1, -1):
            row = self.grid[i]
            if (0, 0, 0) not in row:
                inc += 1
                ind = i
                for j in range(len(row)):
                    try:
                        del self.locked_positions[(j, i)]
                    except:
                        continue

        if inc > 0:
            for key in sorted(list(self.locked_positions), key=lambda x: x[1])[::-1]:
                x, y = key
                if y < ind:
                    newKey = (x, y + inc)
                    self.locked_positions[newKey] = self.locked_positions.pop(key)

        return inc

    def move(self, direction):
        if direction == 'left':
            self.current_piece.x -= 1
            if not self.valid_space(self.current_piece):
                self.current_piece.x += 1
        elif direction == 'right':
            self.current_piece.x += 1
            if not self.valid_space(self.current_piece):
                self.current_piece.x -= 1
        elif direction == 'down':
            self.current_piece.y += 1
            if not self.valid_space(self.current_piece):
                self.current_piece.y -= 1
                self.lock_piece()

    def rotate(self):
        self.current_piece.rotation = (self.current_piece.rotation + 1) % len(self.current_piece.shape)
        if not self.valid_space(self.current_piece):
            self.current_piece.rotation = (self.current_piece.rotation - 1) % len(self.current_piece.shape)

    def drop(self):
        while self.valid_space(self.current_piece):
            self.current_piece.y += 1
        self.current_piece.y -= 1
        self.lock_piece()

    def lock_piece(self):
        for pos in self.convert_shape_format(self.current_piece):
            p = (pos[0], pos[1])
            self.locked_positions[p] = self.current_piece.color
        self.current_piece = self.next_piece
        self.next_piece = self.get_shape()
        self.score += self.clear_rows() * 10
        if self.check_lost():
            self.game_over = True
            self.update_high_score()

    def start(self):
        self.__init__()

    def get_state(self):
        grid_copy = self.create_grid()
        for pos in self.locked_positions:
            p = self.locked_positions[pos]
            grid_copy[pos[1]][pos[0]] = p
        return {
            'grid': grid_copy,
            'score': self.score,
            'high_score': self.high_score,
            'game_over': self.game_over,
            'current_piece': self.convert_shape_format(self.current_piece),
            'next_piece': self.convert_shape_format(self.next_piece)
        }

    def load_high_score(self):
        try:
            with open("scores.txt", "r") as file:
                return int(file.readline().strip())
        except:
            return 0

    def update_high_score(self):
        if self.score > self.high_score:
            self.high_score = self.score
            with open("scores.txt", "w") as file:
                file.write(str(self.high_score))
