#!/bin/bash

# kill old instances
lsof -t -i:41920 | ifne kill $(lsof -t -i:41920)
echo Killed old instances

# cd into Backend root and run Production server
cd ~/BrettSpiel_Backend
nohup npm run runProd &
echo Started
