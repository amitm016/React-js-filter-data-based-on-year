# javaScript
Programming language that allows you to run logic on the browser and load the page

# React-Js
> It is a client side javaScript library used for building reach user interface
	* Can be used for single page Applications
	* Can be used for multiple page Applications. Some pages can loaded from backed server throuh javaScript

> Alternativies to React
	* Angular : component based UI FramWork .
		* Packed with lots of features.
	* Vue: component based UI FramWork. 
		* Includes more core features.
		* It has less features compared to Angular but more compared to React js.
		* It is less popular compared to React and Angular.

> Component
  * Components are reusable building blocks in UI
	* Combination of css,Html,javaScript for code logic 
	* React is all about components
	* uses
		* reusable
		* helps to manage and maitain the code
	* building components
		* its uses html and javaScript and css to build reusable component

> Creating project
	* need node js package
	* npx create-react-app projectName : it will build a project with configuration files
		* npx(Node Package Execute): it comes with npm in 5.6 version
			*  It is an npm package runner that can execute any package that you want from the npm registry without even installing that package
	* cd projectName
	* npm run start : runs the react app
		* npm (Node Package Manager) : it is the default package manager for the JavaScript runtime environment Node.js
	* Folder Structure
		> projectName
		> node_modules
		> public
		> src
			> index.js
			> App.js
		package.json

		* node_modules: all node module dependencies packages are installed in this folder
			* npm install or npm i : it will install all the node modules
		* public: it contains the single html file 
				index.html: it will render our react code
		* src: holds source code of the project
			* index.js: this the first code file will be excuted when project is runned
		* packages.json: holds the dependencies of the project

> ReactDOM: it is object from react library
	* ReactDOM.render(<App />, document.getElementById('root'))
	* root is id which will be defined in the Html file
	* render is the method from ReactDOM will place the react code inside the html file finding by id('root').

> JSX: JavaScript XML which allows us to write HTML in React.
	* XML stands for eXtensible Markup Language. XML is a markup language much like HTML.

> How React Works?
	* React allows you to create custom Html element

> Creating Custome Component
	* Name of the component should be capital letter
	* function App() {
			return (
				<div className="App">
					<header className="App-header">
						<div> Lets get started </div>
					</header>
					<Expensive></Expensive>
				</div>
			);
		}

		export default App;
		* export default : will export the component that can be used in other components by importing as shown below
	* importing the component in other component
		* import Expensive from './components/Expensive'
	* Rendering the custome component in other component
		* custome component HTML element should begin with upper case letter
		* HTML built in elements tags will begin with lower case letter
		*	<Expensive></Expensive>

> Props: It stands for properties
		* it is an object that allows you to pass data from once component to another
		* passing data to Component
			*   <ExpenseItem
						expenseDate={data.expenseDate}
						expenseTitle={data.expenseTitle}
						expensePrice={data.expensePrice}
					/>
		* Reteriving data in custom component passed from another component
			* function Expensive(props) {
					return (
						<div className="expensive_item">
							<div>{props.expenseDate.toISOString()}</div>
							<div className="expensive_item_desc">
								<h2>{props.expenseTitle}</h2>
								<div className="expensive_item_price">{props.expensePrice}</div>
							</div>
						</div>
					)
				}
> Custom rapper or Composition
		* we can create a custom rapper to rap the custom components
			* function Card(props) {
					const className = 'card ' + props.className
					return(
						<div className={className}>{props.children}</div>
					)
				}
		* To use the custome component and HTML element inside wrapper component we need to add props.children inside rapper component
			* function Expense() {
					return(
						<Card className="expenses">
							{
								expenseData.length > 0 && expenseData.map((data, id) => {
									return (
										<ExpenseItem
											key={id}  
											expenseDate={data.expenseDate}
											expenseTitle={data.expenseTitle}
											expensePrice={data.expensePrice}
										/>
									)
								})
							}
						</Card>
					)
				}





