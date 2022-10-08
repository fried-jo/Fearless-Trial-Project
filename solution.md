The solution can be tested by running 'npm test' from the command line in the project directory. The user can start the solution by running 'npm start' from the project directory -- the user will need node.js installed locally on their machine for this to work. 

The project has been docker containerized successfully, and is able to be built and run with the following commands: 'docker build . -t <your username>/fearless' to build, and then 'docker run -p 49160:8080 -d <your username>/fearless'. However, I was not able to in the time allotted succesfully query the API inside the docker container.

User can easily change ports by editing the .env file in the root directory.

This solution implements the following features (which can be tested with a tool such as Postman):

Get a list of all items (Send a get request to the '/items' endpoint)

Add an item (Post request to '/items', using 'newName' as a query parameter key)

Delete all items (Delete request to '/items')

Get an item by id (Get request to '/items/id' with the 'id' as a query parameter)

Update an item by id (Patch request to '/items/id' with the 'id' and 'newName' as query params)

Delete an item by id (Delete request to '/items/id' with the 'id' as query param)


A future change that I would have liked to implement would be persisting data through an object store. This would require asynchronous interaction with the file system to access items.json, and was not possible within the time limits of the project. 

The code is modularized to be able to be easily iterable and extensible. A client could be added to the root of the project without interfering with the server side. Additional controllers can be added to the controllers folder as necessary, and likewise with routes. 