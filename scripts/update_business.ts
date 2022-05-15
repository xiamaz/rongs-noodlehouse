/**
 * Update google business page
 */
"https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/foodMenus"

interface BusinessLocation {
	accountId: string;
	locationId: string;
}

/**
 * Return business location information from environment variables.
 */
function getLocationFromEnv(): BusinessLocation {
	return {accountId: "", locationId: ""}
}