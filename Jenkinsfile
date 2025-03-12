pipeline {
    agent {
        docker {
            image 'node:18-alpine' // Usa una imagen de Docker con Node.js
            args '-u root' // Asegura que el contenedor se ejecute como root
        }
    }
    stages {
        stage('Declarative: Checkout SCM') 
        {
            steps 
            {
                sh 'rm -rf test-results' // Elimina el directorio test-results
                sh 'whoami' // Verifica el usuario que está ejecutando los comandos
                checkout scm
            }
        }
        stage('Install Dependencies') 
        {
            steps {
                sh 'npm install' // Instala las dependencias de Node.js
                sh 'npx playwright install' // Instala los navegadores de Playwright
                sh 'npm install -g artillery' // Instala Artillery globalmente
            }
        }

       stage('Playwright Tests') 
       {
    steps {
        sh 'npx playwright install --with-deps' // Instala Playwright con dependencias
        sh 'npm test' // Ejecuta las pruebas de Playwright
    }
    post 
    {
        always 
        {
            archiveArtifacts artifacts: 'playwright-report/**'
        }
    }
    }   

        stage('Artillery Tests') 
        {
            steps {
                sh 'artillery run artillery.yml --output artillery-report.json' // Ejecuta las pruebas de Artillery y genera un JSON
            }
        }
        stage('Generate Reports') 
        {
            steps {
                publishHTML([ // Publica el HTML de Playwright
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'
                ])
                sh 'artillery report artillery-report.json --output artillery-report.html' // Genera el reporte HTML de Artillery
                archiveArtifacts artifacts: 'artillery-report.html' // Archiva el reporte HTML de Artillery
            }
        }
    }
}