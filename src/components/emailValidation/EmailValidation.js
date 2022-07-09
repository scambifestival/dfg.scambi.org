import "./EmailValidation.css";

import React from "react";
const emailState = {
	email: "",
	error: ""
};
class FormComponent extends React.Component {
	constructor() {
		super();
		this.state = emailState;
		this.onChange = this.onChange.bind(this);
	}
	onChange(e) {
		this.setState({
			email: e.target.value
		});
	}
	emailValidation() {
		const regex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!this.state.email || regex.test(this.state.email) === false) {
			this.setState({
				error: "Email is not valid!"
			});
			return false;
		}
		return true;
	}
	onSubmit() {
		if (this.emailValidation()) {
			console.log(this.state);
			this.setState(emailState);
		}
	}
	render() {
		return (
			<div>
				<div className="mb-3 flex flex-col">
					<input
						type="email"
						id="email"
						aria-describedby="helper-text-explanation"
						className=""
						style={{
							borderColor: this.state.error && "red"
						}}
						placeholder="Enter your email"
						value={this.state.email}
						onChange={this.onChange}
					/>
					<span className="incorrectText">{this.state.error}</span>
				</div>
				<div>
					<button
						type="submit"
						className="purpledBtn w-36 h-12 mt-3 ml-8"
						onClick={() => this.onSubmit()}>
						Submit
					</button>
				</div>
			</div>
		);
	}
}

export default FormComponent;
