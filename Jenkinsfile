pipeline {
    agent {
       docker { image 'luisbytes/capacitor:v5-2024.04.26' }
    }
    stages {
        stage('Test') {
            steps {
                echo 'test'
                sh 'ionic capacitor sync'
            }
        }
    }
}