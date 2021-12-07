import React, {Component} from 'react'
import SecondaryNav from './SecondaryNav'
import UserIcon from 'react-icons/lib/md/account-circle'
import DateSelect from 'react-icons/lib/fa/caret-square-o-down'
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o'
import Printer from 'react-icons/lib/fa/print'
import ListIcon from 'react-icons/lib/fa/list-alt'
import EditIcon from 'react-icons/lib/fa/edit'



class HelpPage extends Component {

render (){

	return (
		<div id="help-page">
			<SecondaryNav title="🔥 Spicy Pepper 🌶️" routeBack="/" />

			<div className="container">
				<ol id="help-list">
					{/*<h5>What can you do with this web app?</h5>
						<p>This web app can help you with weekly meal preparation and cooking.</p>
						<p>Prepare a menu for the entire week, and save your recipes so you can spend less time creating shopping lists and figuring out what to eat on a daily basis.</p></li>
					<li>*/}
					<li>
						<h5>Getting started</h5>
						<p>You'll need to create an account and sign in with your method of preference.</p>
						{/*<p>If you're a registered user, you can sign in by clicking on the user icon <UserIcon size={15}/> on the top right of the <strong>Weekly Meals</strong> page, and entering your credentials on the sidebar.</p>*/}
						<p>In the <strong>Weekly Meals</strong> section:</p>
						<ul>
							<li>
								<h6>Select a calendar week</h6>
								<p>Pick from the datepicker by clicking the dropdown icon <DateSelect size={15}/> next to <em>Sunday</em>. You can only pick any Sunday of the year to start your week, then the rest of the dates will be automatically populated.</p>
							</li>
							<li>
								<h6>Add a meal recipe for the day</h6>
								<p>Click on the day/meal box <CalendarIcon size={15}/> that you want to add, then you can search the <a href="https://www.edamam.com" target="_blank">Edamam</a> Recipe API by using the search bar, or adding from your own saved personal recipes below.</p>
								<p>Click on each meal in the calendar to see the ingredients list and recipe if available. Click <strong>Save and add to my recipes</strong> to finish adding it to your recipes.</p>
								<p><em>Note: Edamam restricts throttling for too many requests within 5 minutes.</em></p>
							</li>
						</ul>
						<p>In the <strong>My Kitchen</strong> section:</p>
						<ul>
							<li>
								<h6>Add a personal recipe.</h6>
								<p>Click on the <strong>+ Add a recipe</strong> button to create your own custom recipe.</p>
								<p>Then fill in the required fields and click <strong>Save</strong>, to save and add the recipe.</p>
							</li>
						</ul>
					</li>
					<li>
						<h5>Printing the weekly menu</h5>
						<p>To print a simplified version of your weekly meals calendar, click on the print icon <Printer size={15}/>. To return to editing mode click on the edit icon <EditIcon size={15}/>.</p>
						<p><em>Note: For best results print using landscape page orientation.</em></p>
					</li>
					<li>
						<h5>Creating a shopping list</h5>
						<p>To see and edit your shopping list click on the shopping list icon <ListIcon size={15}/>.</p>
					</li>
				</ol>		
			</div>
		</div>
	)
}
}

export default HelpPage;