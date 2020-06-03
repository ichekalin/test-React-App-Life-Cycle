import React from "react";

class ErrorBaundary extends React.Component{
	state = {
		hasError: false
	}
	componentDidCatch(error, errorInfo) {
		this.setState({
			hasError: true
		})
	}
}

export default ErrorBaundary