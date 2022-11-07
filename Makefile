# ==================================
#         Development config
# ==================================
start-build: 
	yarn install && docker-compose -f docker-compose.yml up -d --build

# Start the server container
start: 
	docker-compose -f docker-compose.yml up -d

# Stop the server container
stop: 
	docker-compose down

remove-images: 
	docker system prune -a --volumes
