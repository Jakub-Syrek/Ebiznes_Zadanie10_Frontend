# Ebiznes_Zadanie10_Frontend

docker build -t frontend-docker .
docker run -p 80:80 frontend-docker

aws ecr create-repository --repository-name frontend-docker --region eu-central-1
docker tag frontend-docker:latest 289272766788.dkr.ecr.eu-central-1.amazonaws.com/frontend-docker:latest
docker push 289272766788.dkr.ecr.eu-central-1.amazonaws.com/frontend-docker:latest