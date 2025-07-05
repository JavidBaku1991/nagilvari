# Nagilvari Backend

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/nagilvari
JWT_SECRET=your-super-secure-secret-key-change-this-in-production
ADMIN_USER=adminos
ADMIN_PASS=1357
NODE_ENV=development
```

3. Start development server:
```bash
npm run dev
```

## Production Deployment

### 1. Build the application:
```bash
npm run build
```

### 2. Set up environment variables:
```env
PORT=4000
NODE_ENV=production
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/nagilvari
JWT_SECRET=your-super-secure-secret-key-at-least-32-characters-long
ADMIN_USER=adminos
ADMIN_PASS=1357
FRONTEND_URL=https://yourdomain.com
```

### 3. Start production server:
```bash
npm start
```

## API Endpoints

- `GET /health` - Health check
- `GET /api/products` - Get all products
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)
- `POST /api/auth/login` - Admin login

## Security Features

- CORS protection
- JWT authentication
- Security headers
- Input validation
- Error handling

## File Upload

Images are stored in the `uploads/` directory. For production, consider using cloud storage (AWS S3, Cloudinary, etc.). 