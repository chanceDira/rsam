# Declare ARGS
ARG SERVER_PORT

# Use a Node.js base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port on which the application will run
EXPOSE ${SERVER_PORT}

# Start the application
CMD ["npm", "start"]
