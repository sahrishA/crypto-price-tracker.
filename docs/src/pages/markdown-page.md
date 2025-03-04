

# Crypto Price Tracker - Developer Documentation

## Overview
The Crypto Price Tracker is a web application built using Next.js. It fetches real-time cryptocurrency prices from the CoinCap API and displays them in a user-friendly interface. The project utilizes React Query for state management and caching.

---
## **Project Setup**

### **Prerequisites**
- Node.js (Recommended version: 18+)
- npm or yarn installed

### **Installation**
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/crypto-price-tracker.git
   cd crypto-price-tracker
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
4. Open the browser at `http://localhost:3000`

---
## **API Integration Details**

### **API Used**
- **CoinCap API** ([Docs](https://docs.coincap.io/))
- Endpoint used: `https://api.coincap.io/v2/assets?limit=5`
- Authorization: API Key is passed in the headers

### **Fetching Data**
The application fetches data using the `fetch` API wrapped in React Query:
```js
const fetchCryptoPrices = async () => {
  const response = await fetch(
    "https://api.coincap.io/v2/assets?limit=5",
    {
      headers: { Authorization: "Bearer 2941e7c6-fd7a-4904-98b4-7d113c79dd37" },
    }
  );
  if (!response.ok) throw new Error("Failed to fetch prices");
  return response.json();
};
```

---
## **State Management**
- **React Query** is used for efficient data fetching, caching, and state synchronization.
- It provides automatic background refetching and better performance compared to traditional useState/useEffect.
- `useQuery` handles API calls and automatically refetches data when needed.

Example usage in the component:
```js
const { data, error, isLoading, refetch } = useQuery("cryptoPrices", fetchCryptoPrices);
```

---
## **UI Enhancements**
### **Heading**
- The heading "Crypto Price Tracker" is styled with a larger font size and bold typography to make it stand out.

### **Loading State**
- A visually distinct loading indicator (e.g., a spinner or animated dots) is displayed when data is being fetched.
- Example:
  ```js
  {isLoading && <div className="loading-spinner">Loading...</div>}
  ```
  
### **Refresh Button**
- A refresh button is prominently styled to allow users to manually refetch data.
- Example:
  ```js
  <button className="refresh-button" onClick={() => refetch()}>Refresh Data</button>
  ```
- Styled with padding, a hover effect, and a bold color to ensure visibility.

---
## **Challenges & Solutions**

### **1. Handling API Rate Limits**
- Used caching mechanisms of React Query to reduce unnecessary API calls.

### **2. Search Functionality Performance**
- Optimized filtering using `.toLowerCase()` for case-insensitive search.

### **3. UI Responsiveness**
- Implemented CSS flexbox and media queries to make the app mobile-friendly.

---
## **Conclusion**
This Crypto Price Tracker effectively demonstrates API integration, React Query for state management, and real-time data updates. Future improvements could include additional features like historical price trends and user authentication.

