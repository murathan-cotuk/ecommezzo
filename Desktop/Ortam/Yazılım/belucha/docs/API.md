# Belucha API Documentation

## Base URL

Development: `http://localhost:3001`
Production: `https://api.belucha.com`

## Authentication

Most endpoints require authentication via JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### Register
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "customer" // optional: "customer" | "seller"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

### Products

#### Get Products
```http
GET /api/products
Query Parameters:
  - limit: number (default: 10)
  - page: number (default: 1)
  - where[category][equals]: string
  - where[featured][equals]: boolean
  - where[status][equals]: "active" | "draft" | "archived"
```

#### Get Product by ID
```http
GET /api/products/:id
```

#### Get Product by Slug
```http
GET /api/products?where[slug][equals]=product-slug
```

### Categories

#### Get Categories
```http
GET /api/categories
Query Parameters:
  - limit: number
  - page: number
```

#### Get Category by Slug
```http
GET /api/categories?where[slug][equals]=category-slug
```

### Orders

#### Get Orders (Requires Auth)
```http
GET /api/orders
Authorization: Bearer <token>
```

#### Get Order by ID
```http
GET /api/orders/:id
Authorization: Bearer <token>
```

### Checkout

#### Create Checkout Session
```http
POST /api/checkout/create-session
Authorization: Bearer <token>
Content-Type: application/json

{
  "items": [
    {
      "productId": "product_id",
      "quantity": 1,
      "price": 99.99,
      "sellerId": "seller_id"
    }
  ],
  "shippingAddress": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "United States"
  }
}
```

### Webhooks

#### Stripe Webhook
```http
POST /api/webhook/stripe
Content-Type: application/json
Stripe-Signature: <signature>
```

## Response Format

### Success Response
```json
{
  "docs": [...],
  "totalDocs": 100,
  "limit": 10,
  "page": 1,
  "totalPages": 10
}
```

### Error Response
```json
{
  "error": "Error message"
}
```

## Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

