# Deployment Checklist

## ✅ Pre-Deployment Checklist

### 1. Environment Variables
Create a `.env.production` file with:
```env
PORT=4000
NODE_ENV=production
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/naghilvari
JWT_SECRET=your-super-secure-secret-key-at-least-32-characters-long
ADMIN_USER=your-admin-username
ADMIN_PASS=your-secure-admin-password
FRONTEND_URL=https://your-frontend-domain.com
```

### 2. Database Setup
- [ ] Set up MongoDB Atlas or production MongoDB instance
- [ ] Update MONGO_URI with production database connection string
- [ ] Test database connection

### 3. Security
- [ ] Generate a secure JWT_SECRET (at least 32 characters)
- [ ] Change default admin credentials
- [ ] Update FRONTEND_URL to your actual frontend domain
- [ ] Ensure HTTPS is configured on your deployment platform

### 4. File Storage (Optional)
For production, consider replacing local file storage with:
- [ ] AWS S3
- [ ] Cloudinary+++
- [ ] Google Cloud Storage
- [ ] Azure Blob Storage

### 5. Build & Test
```bash
# Build the application
npm run build

# Test the build locally
npm start
```

## 🚀 Deployment Platforms

### Heroku
1. Create Heroku app
2. Set environment variables in Heroku dashboard
3. Deploy with: `git push heroku main`

### Railway
1. Connect your GitHub repository
2. Set environment variables in Railway dashboard
3. Deploy automatically

### DigitalOcean App Platform
1. Create app from GitHub repository
2. Set environment variables
3. Configure build command: `npm run build`
4. Configure run command: `npm start`

### Vercel
1. Import GitHub repository
2. Set environment variables
3. Configure build settings

## 🔧 Post-Deployment

1. Test all API endpoints
2. Verify file uploads work
3. Test admin authentication
4. Monitor logs for errors
5. Set up monitoring/alerting

## 📊 Health Check

Your backend includes a health check endpoint:
- `GET /health` - Returns server status and timestamp

Use this for monitoring and load balancer health checks. 