pipeline {
  //  agent {
       // docker { image 'node:22.13.1-alpine3.21' }
 //   }
    stages {
        stage('Test') {
            steps {
                echo 'test'
                sh 'node --eval "console.log(process.platform,process.env.CI)"'
            }
        }
    }
}