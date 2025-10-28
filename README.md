# Food Delivery App

A responsive React project built during my React course — your go-to place for exploring and ordering delicious meals

## What is Food Delivery App

This app lets users browse restaurants, explore menus, and order food

It includes:
- **Home Page**: Intro screen with a link to explore restaurants
- **Restaurants Layout**: Tabs showcasing all available restaurant options
- **Restaurant Page**: Each restaurant’s page includes Menu and Reviews tabs
- **Menu Page**: Clickable list of menu items
- **Dish Page**: Detailed view of a selected dish with ingredients and price
- **Reviews Page**: Displays restaurant reviews
- **Logged-In Users**:
  - Can add dishes to cart from the Dish Page
  - Can post reviews on the Reviews Page

## Technical Overview

Food Delivery App is built using **React** and **Redux Toolkit** with **RTK Query** for state management

### App Structure:

- Pages: Layout-level route components that get data from the URLs. For example: [RestaurantPage](./src/pages/RestaurantPage.jsx)
- Container Components: Handle data fetching, pass props, and delegate UI to child components. For example: [RestaurantContainer](./src/components/Restaurant/Restaurant-container.jsx)
- Presentational Components: Focus on UI rendering. For example: [Restaurant](./src/components/Restaurant/Restaurant.jsx)

### Core Features:

**React Router**:
- Persistent Header and Footer and Restaurant Tabs with route-based content changes using `Outlet`
- `NavLink` for styled active states
- Dynamic route parameters. For example: dish/:dishId
- Fallback route for unmatched paths

**State Management and Hooks**:
- `useState`: Manages local state in [ProgressBar](./src/components/ProgressBar/ProgressBar.jsx), theme context and user context
- `useEffect`: Adds and cleans up scroll event listeners in [ProgressBar](./src/components/ProgressBar/ProgressBar.jsx)
- `createContext`: Provides user, logged-in user, and theme contexts. Example: [UserContext](./src/components/User-context/index.js)
- `useCallback`: Memoizes count logic in [useCount](./src/components/Dishes-counter/useCount.js)
- `use`: Reads context values. Example: [LogInUser](./src/components/LogInUser/LogInUser.jsx)
- `useParams`: Extracts route parameters. Example: `dishId` in [DishPage](./src/pages/DishPage.jsx)
- Custom Hook - [useCount](./src/components/Dishes-counter/useCount.js): Adds/removes dishes from the cart

**Redux with Redux Toolkit**:
- **Store**: Manages API state (via RTK Query) and global cart state
- `api.reducer`: The [RTK Query API slice](./src/redux/services/api.js) handles caching, refetching, and tag-based invalidation (using `reviews` tag)
- `cartSlice`: Contains reducers and selectors for adding/removing items from the cart
- `useQuery` hooks: Fetch and read data from the API/store. Example: [useGetRestaurantsQuery() ](./src/pages/RestaurantsPage/RestaurantsPage.jsx)
- `useMutation` hook: Handles the POST request for adding reviews - [useAddReviewMutation()](./src/components/Restaurant/Restaurant-container.jsx)
- `useSelector` Extracts data from the Redux store for components. Example: [Cart](./src/components/Cart/Cart.jsx)

**Additional Functionality**:
- **Theme Switcher**: Toggles between light and dark modes
- **ProgressBar**: Gives visual feedback during scroll

**Styled Components**: Handles CSS styling

**Node.js mock API server**: Simulates backend endpoints for restaurants, dishes, reviews, and users, using normalized data

**Developer Tools**:
- **ESLint**: Ensures clean, consistent code
- **Prettier**: Handles code formatting

## How to start locally
Start the Vite dev server:
```shell
npm run dev
```

In another terminal tab, start the API server:
```shell
npm run start-server
```
---

Built as part of a React course project to explore modern React concepts using Next.js App Router and Redux Toolkit