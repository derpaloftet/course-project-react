# API

## Restaurant APIs

1. GET /api/restaurants/ - get all restaurants;
2. GET /api/restaurant/:restaurantId - get a restaurant by id (/api/restaurant/d32n32d8huasj);

## Dishes APIs

1. GET /api/dishes?restaurantId=:restaurantId - get dishes by restaurantId (/api/dishes?restaurantId=d32n32d8huasj);
2. GET /api/dish/:dishId - get a dish by id (/api/dish/djshfusdhfi29);

## Reviews APIs

1. GET /api/reviews?restaurantId=:restaurantId - get reviews by restaurantId (/api/reviews?restaurantId=d32n32d8huasj);
2. POST /api/review/:restaurantId - create a review by restaurantId (/api/review/d32n32d8huasj, and the review itself is in the request body);
3. PATCH /api/review/:reviewId - change a review by restaurantId (/api/review/d32n32d8huasj, and the review itself is in the request body);

## Users APIs

1. GET /api/users/ - get all users;