pipeline {
    agent {
       docker { image 'node' }
    }
    stages {
        stage('Test') {
            steps {
                echo 'test'
                sh 'npm install'
            }
        }
    }
}