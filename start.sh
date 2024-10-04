#!/bin/bash

cd backend || exit
npm start &
BACKEND_PID=$!

cd ../frontend || { kill $BACKEND_PID; exit 1; }
npm start

# Optionally, if you need to keep this script running or handle process management:
# wait $BACKEND_PID