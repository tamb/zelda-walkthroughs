// Deployment configuration for GitHub Pages
export const deploymentConfig = {
  // Repository name (used for asset prefix)
  repositoryName: 'zelda-walkthroughs',
  
  // GitHub username (for URL construction)
  githubUsername: 'tom', // Update this with your actual GitHub username
  
  // Deployment URL
  get deploymentUrl() {
    return `https://${this.githubUsername}.github.io/${this.repositoryName}/`;
  },
  
  // Asset prefix for GitHub Pages
  get assetPrefix() {
    return `/${this.repositoryName}/`;
  }
};

// Environment variables for deployment
export const envVars = {
  GITHUB_PAGES: 'true',
  REPOSITORY_NAME: deploymentConfig.repositoryName
};
