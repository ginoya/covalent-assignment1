# Step to Run Aplication

## Deployed website
Deployed website can be accessed at https://ginoya.github.io/covalent-assignment1/

## In Locall
Clone repo from github https://github.com/ginoya/covalent-assignment1
runcommand `yarn install` to install required depedency package
run command `yarn start` to access local developement environment at http://localhost:3000

# Development approach
Splitted required main page in to three major component CryptoTable, AllBookmarks and CoinInfoModal

Divided above three component into smaller component to maintain modulariy and increase reusability

Created separate reducers for all three main components keeping in mind the possibility of adding new features 

Created shared Utils file to handle reusable function which might be need in other components as well 

Create constant file to maintain all configuarable variables at same place and avoid hard coding at in all other files

# Challenges encountered

Faced challenge in preventing unrequire re-rendering of all bookmarks when removing a single bookmark. Resolved it by adding a key with map in AllBookmarks component.