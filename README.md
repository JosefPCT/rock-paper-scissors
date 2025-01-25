# rock-paper-scissors
Play a rock paper scissors game in the console using javascript


SET user score to zero
SET computer score to zero
WHILE user choose to continue playing
    GET user choice
    DETERMINE computer choice 
    DETERMINE game logic
        IF user choice is the same as computer choice
            DISPLAY "tie"
        ELSE IF user choice is scissors and computer choice is rock
            DISPLAY "computer wins"
            INCREMENT computer score 
        ELSE IF user choice is scissors and computer choice is paper
            DISPLAY "user wins"
            INCREMENT user score
        ELSE IF user choice is rock and computer choice is paper
            DISPLAY "computer wins"
            INCREMENT computer score
        ELSE IF user choice is rock and computer choice is scissors
            DISPLAY "user wins"
            INCREMENT user score
        ELSE IF  user choice is paper and computer choice is scissors
            DISPLAY "computer wins"
            INCREMENT computer score
        ELSE IF user choice is paper and computer choice is rock
            DISPLAY "user wins"
            INCREMENT user score
        ELSE
            DISPLAY invalid output
        END IF
    DISPLAY user score
    DISPLAY computer score
END WHILE 


