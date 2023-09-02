# Ebiznes_Zadanie10_Frontend

docker build -t frontend-docker .
docker run -p 80:80 frontend-docker

aws ecr create-repository --repository-name frontend-docker --region eu-central-1
docker tag frontend-docker:latest 289272766788.dkr.ecr.eu-central-1.amazonaws.com/frontend-docker:latest
docker push 289272766788.dkr.ecr.eu-central-1.amazonaws.com/frontend-docker:latest

aws ecs create-cluster --cluster-name my-cluster-1
aws ecs register-task-definition --cli-input-json file://ecs-task-definition.json

aws ecs create-service --cluster my-cluster --service-name frontend-service --task-definition my-task-definition1 --desired-count 1 --launch-type FARGATE --network-configuration "awsvpcConfiguration={subnets=[subnet-0e7168380e0859c8a],securityGroups=[sg-040930c9e4d8f8ebc],assignPublicIp=ENABLED}"

https://github.com/Jakub-Syrek/Ebiznes_Zadanie10_Frontend/actions/workflows/deploy.yml