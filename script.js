let move_speed = 3, gravity = 0.5;
let bird = document.querySelector('.bird');
let img = document.getElementById('hawk.png');
let sound_point = new Audio('sounds effect/point.mp3');
let sound_die = new Audio('sounds effect/die.mp3');

let bird_props = bird.getBoundingClientRect();

let background = document.querySelector('.background').getBoundingClientRect();

let score_val = document.querySelector('.score_val');
let message = document.querySelector('.message');
let score_title = document.querySelector('.score_title');

let game_state = 'Start';
img.style.display = 'none';
message.classList.add('messageStyle');

let pipes_passed = 0;
let points = 0;
let initial_pipe_gap = 35;
let pipe_gap = initial_pipe_gap;
let tokens_earned = 0;
let gambleAmount = 0;

document.addEventListener('DOMContentLoaded', () => {
    const gambleAmountInput = document.getElementById('gamble-amount');
    const decreaseAmountButton = document.getElementById('decrease-amount');
    const increaseAmountButton = document.getElementById('increase-amount');
    const startGameButton = document.getElementById('start-game');

    // Decrease the gamble amount
    decreaseAmountButton.addEventListener('click', () => {
        let amount = parseInt(gambleAmountInput.value, 10);
        if (amount > 0) {
            amount -= 1;
            gambleAmountInput.value = amount;
        }
    });

    // Increase the gamble amount
    increaseAmountButton.addEventListener('click', () => {
        let amount = parseInt(gambleAmountInput.value, 10);
        amount += 1;
        gambleAmountInput.value = amount;
    });

    // Start the game with the entered gamble amount
    startGameButton.addEventListener('click', () => {
        gambleAmount = parseInt(gambleAmountInput.value, 10);
        if (gambleAmount > 0) {
            // Hide the gamble section and start the game
            document.querySelector('.gamble-section').style.display = 'none';
            message.innerHTML = 'Press Enter to Start';
            message.classList.remove('messageStyle');
        } else {
            alert('Please enter a valid token amount.');
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && game_state !== 'Play' && gambleAmount > 0) {
        document.querySelectorAll('.pipe_sprite').forEach((e) => {
            e.remove();
        });
        img.style.display = 'block';
        bird.style.top = '40vh';
        game_state = 'Play';
        message.innerHTML = '';
        score_title.innerHTML = 'Score : ';
        score_val.innerHTML = '0';
        message.classList.remove('messageStyle');
        play();
    }
});

function play() {
    function move() {
        if (game_state !== 'Play') return;

        let pipe_sprite = document.querySelectorAll('.pipe_sprite');
        pipe_sprite.forEach((element) => {
            let pipe_sprite_props = element.getBoundingClientRect();
            bird_props = bird.getBoundingClientRect();

            if (pipe_sprite_props.right <= 0) {
                element.remove();
            } else {
                if (bird_props.left < pipe_sprite_props.left + pipe_sprite_props.width && bird_props.left + bird_props.width > pipe_sprite_props.left && bird_props.top < pipe_sprite_props.top + pipe_sprite_props.height && bird_props.top + bird_props.height > pipe_sprite_props.top) {
                    game_state = 'End';
                    message.innerHTML = '<span style="color: red;">GAME OVER</span><br>Your score is: <span style="color: red;">' + score_val.innerHTML + '</span><br>Final tokens earned: <span style="color: red;">' + gambleAmount*(points / 15).toFixed(2) + '</span><br>Tokens spent: <span style="color: red;">' + gambleAmount + '</span><br>Press Enter To Restart';
                    message.classList.add('messageStyle');
                    img.style.display = 'none';
                    sound_die.play();
                    return;
                } else {
                    if (pipe_sprite_props.right < bird_props.left && pipe_sprite_props.right + move_speed >= bird_props.left && element.increase_score === '1') {
                        points++;
                        score_val.innerHTML = points;
                        if (points % 15 === 0) {
                            tokens_earned++;
                        }
                        sound_point.play();
                    }
                    element.style.left = pipe_sprite_props.left - move_speed + 'px';
                }
            }
        });
        requestAnimationFrame(move);
    }
    requestAnimationFrame(move);

    let bird_dy = 0;
    function apply_gravity() {
        if (game_state !== 'Play') return;
        bird_dy += gravity;
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp' || e.key === ' ') {
                img.src = 'images/hawk.png';
                bird_dy = -7.6;
            }
        });

        document.addEventListener('keyup', (e) => {
            if (e.key === 'ArrowUp' || e.key === ' ') {
                img.src = 'images/hawk.png';
            }
        });

        if (bird_props.top <= 0 || bird_props.bottom >= background.bottom) {
            game_state = 'End';
            message.style.left = '28vw';
            message.innerHTML = '<span style="color: red;">GAME OVER</span><br>Your score is: <span style="color: red;">' + score_val.innerHTML + '</span><br>Final tokens earned: <span style="color: red;">' + (points / 15).toFixed(2) + '</span><br>Tokens Spent: <span style="color: red;">' + gambleAmount + '</span><br>Press Enter To Restart';
            message.classList.add('messageStyle');
            window.location.reload();
            return;
        }
        bird.style.top = bird_props.top + bird_dy + 'px';
        bird_props = bird.getBoundingClientRect();
        requestAnimationFrame(apply_gravity);
    }
    requestAnimationFrame(apply_gravity);

    let pipe_separation = 0;

    function create_pipe() {
        if (game_state !== 'Play') return;

        if (pipe_separation > 115) {
            pipe_separation = 0;

            let pipe_posi = Math.floor(Math.random() * 43) + 8;
            let pipe_sprite_inv = document.createElement('div');
            pipe_sprite_inv.className = 'pipe_sprite';
            pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh';
            pipe_sprite_inv.style.left = '100vw';

            document.body.appendChild(pipe_sprite_inv);
            let pipe_sprite = document.createElement('div');
            pipe_sprite.className = 'pipe_sprite';
            pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
            pipe_sprite.style.left = '100vw';
            pipe_sprite.increase_score = '1';

            document.body.appendChild(pipe_sprite);

            pipes_passed++;
            if (points > 0 && points % 5 === 0) {
                move_speed++;
            }
            if (points >= 10 && points % 10 === 0) {
                pipe_gap -= 5;
            }
        }
        pipe_separation++;
        requestAnimationFrame(create_pipe);
    }
    requestAnimationFrame(create_pipe);
}

