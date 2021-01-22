import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID o3uReUa8oDUYQ3pb91VtT8LZxIdLgzpYFP9Nauz-_M4",
	},
});
