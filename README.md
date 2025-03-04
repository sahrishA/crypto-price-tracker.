# Crypto Price Tracker

## Project Overview

This is a simple Crypto Price Tracker built with Next.js. It fetches live cryptocurrency prices from the CoinCap API and displays them in a user-friendly dashboard. The project includes a search bar, a refresh button, and uses React Query for state management.

## Installation & Setup

### Prerequisites

- Node.js installed (Recommended version: 18+)
- npm or yarn installed

### Steps to Set Up and Run

1. **Clone the Repository:**
   ```sh
   git clone [https://github.com/sahrishA/crypto-price-tracker..git]
   cd crypto-price-tracker./web-app
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   ```
3. **Start the Development Server:**
   ```sh
   npm run dev
   ```
4. Open your browser and go to `http://localhost:3000`

## API Integration Details

- The app fetches data from the [CoinCap API](https://docs.coincap.io/).
- API Endpoint used: `https://api.coincap.io/v2/assets?limit=5`
- Authorization is handled using an API key provided in the request headers.

## State Management

- **React Query** is used for efficient data fetching and caching.
- It automatically handles refetching, caching, and error handling.
- `useQuery` hook manages API calls and re-fetches data when needed.

## Features

- Displays live prices of 5 cryptocurrencies.
- Search bar for filtering cryptocurrencies.
- Refresh button to manually update prices.
- Loading indicator while fetching data.
- Mobile responsive design.
- <img width="361" alt="image" src="https://github.com/user-attachments/assets/b1d2c3fa-0b0b-4e03-bf4a-79173126c6e0" />
## Contributing

Feel free to fork the repository and submit a pull request!

## License

MIT License

