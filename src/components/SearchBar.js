import React from "react";

class SearchBar extends React.Component {
	state = { searchTerm: "" };

	OnFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.searchTerm);
	};

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.OnFormSubmit}>
					<label> Image Search </label>
					<input
						type="text"
						value={this.state.searchTerm}
						onChange={(e) =>
							this.setState({ searchTerm: e.target.value })
						}
					/>
				</form>
			</div>
		);
	}
}

export default SearchBar;
