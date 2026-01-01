# ===========================================
# Design OS Docker Configuration
# Multi-stage build for dev and production
# ===========================================

# ------------------------------------------
# Development Stage
# ------------------------------------------
FROM node:22-alpine AS dev

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Expose Vite dev server port
EXPOSE 3000

# Run dev server with host binding for Docker
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]


# ------------------------------------------
# Build Stage (for production)
# ------------------------------------------
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Build production assets
RUN npm run build


# ------------------------------------------
# Production Stage (nginx)
# ------------------------------------------
FROM nginx:alpine AS production

# Copy custom nginx config
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose nginx port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
