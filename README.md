Topics: 
1. Understanding the requirement and the Decision on the Technology Stack used. 
2. Method To Install and Run the application
3. Features to be Developed in Future and Alterations If required
4. Conclusion & Tests
5. Integration with Gulp.js (if required for file minification and workflow automation)
6. Continous Integration with AWS (if required)

Details
1. Understanding the requirement and the Decision on the tech stack used
	From the requirements provided, with the need for MV* Architecture to be used. It was very clear that there should a provision for being able to handle CRUD operations. But for the simple showcase of an e-commerce app, there was a products.json provided. 

	Which essentially meant that I would have to be able to render data IN & OUT to JSON file. And for this feature to be implemented, NodeJS should be the right server for RESTful API's. Building an entire solution on NodeJS would not be the right decision and hence i chose to use AngularJS for the Frontend. 

	At this point, another decision has to be made in terms of, If I should use a Template engine or utilize the full potential of a framework, keeping the future scope in Mind. Hence AngularJS for the frontend. Options for the templating engine were EJS, Handlebars with prior experience and optionally JADE. 

	Now the tech for Backend and Frontend ready, a Decision was to be taken in terms of the Responsive Solution. Bootstrap was the best choice with prior expertise and having built the niche skills in Bootstrap. 

	Folder Structure and Port Number to be decided keeping in mind the Automation workflow and Deployment to OS Agnostic Server had to be made. 

	Currently chosing a Port number of 9000. The solution could have been directly built on angular and run as a folder on any OS but this would definately not scale. Hence the MEAN Stack ,utilizing, Node & Angular of MEAN Stack. Provision for MongoDB or MySQL is also possible with this solution. 

	Folder Structure
	AKQA
	-- app
	---- app.js
	---- public
	------ angular-app
	-------- css
	---------- style.css
	-------- images <!-- all product images to this folder -->
	-------- js 
	---------- app.js 
	---------- controllers.js 
	---------- products.json 
	-------- lib
	---------- angular
	------------ angular-animate.min.js
	------------ angular-route.min.js
	------------ angular.min.js
	-------- partials
	---------- list.html 
	---------- details.html
	-- node_modules 
	---- NOTE A*  node_modules/* 
	-- package.json
	-- README.md
	
NOTE A:<!-- All node modules would be required for which it is important to run "sudo npm install ". It is better to load modules dynamically on the server than to save it to the git repository. -->

2. Method To Install and Run the application
	a. sudo git clone https://github.com/vabtrix/AKQA-Test.git
	b. sudo npm install
	c. sudo npm start
	d. Goto "localhost:9000"

3. Features to be Developed in Future and Alterations If required
	a. Being able to work on the Detail Page with features such as 
		a.1 Add to Cart
		a.2 Select Size of Product
		a.3 Quantity of Product
		a.4 Provide Details Description of Product
		a.5 Related Products in detail page. 
	b. Search Feature for products
	c. Order by Ascending or descending order of the products
	d. Add or Remove products from inventory...
	...many more
4. Conclusion & Test (Recommend using Mocha for testing)
5. Integration with Gulp.js (if required for file minification and workflow automation)
	5.a GULP can be used to minify the product images
	5.b GULP for uglify js for the frontend tech 
6. Continous Integration with AWS (if required)
	6.a JENKINS can be used for CI and Deployment



Additional Notes: 
	a. GULP can be used here as additional extension for Workflow automation
	b. Mongo and MYSQL integration or API Integration to S3 for order details to be saved for analytics
	c. Mocha can be used for Testing the app
	d. Browserify Can be used for Compatibility Testing. 

