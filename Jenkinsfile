pipeline {
    agent none
    stages {
        stage('build'){
        agent {
            label'build'
        }
        steps {
            deleteDir()
            sh '''
                git clone https://github.com/ASwinav12/project1.git
                ls -la
            '''
            stash name:'web', includes: 'project1/**'
        }
    }
    stage('deploy'){
        agent{
            label 'deploy'
        }
        steps{
            deleteDir()
            unstash 'web'
            sh '''
                sudo rm -rf /var/www/html/*
                sudo cp -r project1/* /var/www/html/
                ls -la /var/www/html/
            '''
            }
        }
    }
}
