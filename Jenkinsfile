pipeline {
  agent any

  parameters {
    string(name: 'IMAGE_TAG', defaultValue: 'latest', description: 'The tag to apply to the Docker image')
  }

  environment {
    REGISTRY_REPO = 'sierrapablo/image-test'
    DOCKER_HUB_CREDENTIALS_ID = 'docker-hub-credentials'
  }

  stages {
    stage('Build') {
      steps {
        script {
          echo "Building image with tag: ${params.IMAGE_TAG}"
          dockerImage = docker.build("${env.REGISTRY_REPO}:${params.IMAGE_TAG}")
        }
      }
    }

    stage('Push') {
      steps {
        script {
          echo 'Pushing image to Docker Hub...'
          docker.withRegistry('', DOCKER_HUB_CREDENTIALS_ID) {
            dockerImage.push()
          }
        }
      }
    }
  }
}
