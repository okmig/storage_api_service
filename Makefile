up-dev:
	docker-compose up

up-dev-build:
	docker-compose up --build

up-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d

down: 
	docker-compose down