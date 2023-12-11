# js-assignment
````
instructions.txt has the instructions to run the service
guidelines.txt has the guidelines to be followed while solving and submitting the assignment
problem-statement.txt has the problem statements to be solved
````
 ## Problem 1 - Endpoint /tour/matches returns all the matches for a given tour name.
 The endpoint latency increases linearly with the number of tours. Modify the endpoint to increase the performance.

#### Solution
- created an index on the name column on the tour table
- Pagination on the API ... the endpoint looks like:- 
- ```localhost:3000/tour/matches?name=India%20Super%20League%2C%202023&pageNumber=1&pageSize=10```
you can change the pageSize and pageNumber when number of tours increases.
- implement an in-memory cache to serve requests which are frequently asked for.
```const cacheKey = `matches:${params.name}:${params.pageNumber}:${params.pageSize} ```
- Limit the Result Set
- Removed select * and only returing the required columns
- Asynchronous Processing

## Problem 2
Modify the endpoint /sport/tour/match to also return match's id, startTime and format
 ##### completed

## Problem 3
 Requirement: News Support for Matches and Tours
##### added in news model and test cases have also been added in ```\test\integration```



