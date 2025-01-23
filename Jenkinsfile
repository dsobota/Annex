pipeline {
    agent {
        any
    }
    stages {
        stage('Test') {
            steps {
                echo 'test'
                sh 'node --eval "console.log(process.platform,process.env.CI)"'
            }
        }
    }
}