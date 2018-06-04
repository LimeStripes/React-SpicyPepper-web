import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteFromMyRecipes } from '../actions'


class RecipeDetails extends Component {

deleteRecipe = (e) => {
	e.preventDefault();
	const currentRecipes = this.props.recipes.myRecipes;
	const recipe = this.props.match.params.recipe_id;
	let newRecipes = currentRecipes.filter((r) => (r.id !== recipe));
	
	//Dispatch and nav back to kitchen
	this.props.dispatch(deleteFromMyRecipes(newRecipes));
	this.props.history.push('/kitchen');
}

render(){
	const {recipe_id} = this.props.match.params;
	return (
		<div className="recipe-wrap">
			<nav id="secondaryNav" className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<div className="left-nav-links">
					<Link to="/kitchen" className="close-create-recipe" />
				</div>
				<div className="app-brandname">
					<h4>Recipe Details</h4>
				</div>
			</div>
			</nav>
			{ this.props.recipes.myRecipes.filter((recipe) => recipe.id === recipe_id).map((recipe, index) => 
				<div className="recipe-detail-item" key={index}>
				<div className="recipe-image-banner" style={{backgroundImage: `url(${recipe.image})`}}></div>
					<div className="container recipe-detail-textbox">
					<p className="recipe-detail-title">{recipe.label}</p>
					{recipe.ingredients.length > 0
						? <div className="recipe-detail-ingredients">
							<h6>Ingredients:</h6>
							<ul>
								{ recipe.ingredients.map((ing, index) =>
									<li key={index}>{`${ing.quantity} ${ing.unit} ${ing.name}`}</li>
									)
								}
							</ul>
						  </div>
						: null
					}


					{ recipe.instructions
						? <div className="recipe-detail-instructions">
							<h6>Instructions:</h6>
							<p>{recipe.instructions}</p>
						  </div>
						: null
					}
					
					{ recipe.wwPoints !== null
						? <div className="recipe-detail-instructions">
							<h6><span className="ww-circle-logo"></span> {recipe.wwPoints} {recipe.wwPoints > 1 ? 'Points' : 'Point'}</h6>
						  </div>
						: null
					}

					<br/>
					<a href="" className="btn btn-sm btn-danger" onClick={(e) => this.deleteRecipe(e)}>Delete Recipe</a>
					</div>
				</div>
			)}

		</div>
	)
}
}

function mapStateToProps({recipes}){
	return {recipes}
}

export default connect(mapStateToProps)(RecipeDetails);