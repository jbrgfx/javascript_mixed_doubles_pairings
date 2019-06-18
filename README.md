Purpose: Build mixed doubles randomly paired rosters for as many as
four courts from lists of registered players.

index.js is a command-line interface utility and requires node.js to run

$ node index.js

The utility is a prototype.

Only first names are used in the prototype.
Full names should be used to set the index of each type of player object.
The utility can take one or two lists in CSV format, although the CSV
reader and parser is a separate utility and not included at this time.
The prototype is using one list for ladies and a second for men;
each list is paired down to 8 players of each gender, if either list
contains more than 8, and the extras are added to waitlists.

A single CSV file could be used for each round of mixed doubles rosters.
