pipeline {
  agent any

  parameters {
    string(name: 'IMAGE_TAG', defaultValue: 'latest', description: 'The tag to apply to the Docker image')
  }

  environment {
    REGISTRY_REPO = 'sierrapablo/api-test'
    DOCKER_HUB_CREDENTIALS_ID = 'docker-hub-credentials'
  }

  stages {
    stage('Build') {
      steps {
        script {
          if (params.IMAGE_TAG != 'latest') {
            echo "Building image with tag: ${params.IMAGE_TAG}"
            dockerTaggedImage = docker.build("${env.REGISTRY_REPO}:${params.IMAGE_TAG}")
          }
          echo 'Building image with tag: latest'
          dockerLatestImage = docker.build("${env.REGISTRY_REPO}:latest")
        }
      }
    }

    stage('Push') {
      steps {
        script {
          echo 'Pushing image to Docker Hub...'
          docker.withRegistry('', DOCKER_HUB_CREDENTIALS_ID) {
            if (params.IMAGE_TAG != 'latest') {
              dockerTaggedImage.push()
            }
            dockerLatestImage.push()
          }
        }
      }
    }
  }
}
