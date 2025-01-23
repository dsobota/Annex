pipeline {
    agent {
       docker { image 'luisbytes/capacitor' }
    }
    stages {
        stage('Test') {
            steps {
                echo 'test'
                npx cap sync
            }
        }
    }
}