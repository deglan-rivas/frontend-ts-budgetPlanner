<div align="center">
  <h2>Budget Planner</h2>
  <p>
    Solo Frontend
  </p>
  <img src="portada.png"></img>
</div>

## 📜 Description

- Due to its practicality, **Vite** was chosen to initialize, minify, and create the production *bundle*.
- **TypeScript** was employed to enhance code quality with static typing and improved developer tooling.
- **React**, **TailwindCSS** were used to quickly layout complex components.
- **ShadcnUI** was utilized for providing a set of accessible and customizable UI components based on *Tailwind*.
- **React-circular-progressbar** was implemented to visually represent progress in a circular format.
- The project is deployed on [**Netlify**](https://wonderful-sfogliatella-ecf148.netlify.app/). Additionally, the final code is dockerized for local testing.
- **Update1 - release/migrate_useReducer**: Integrated **useReducer** and **useContext** for state management to simplify and structure the component logic.
- **Update2 - release/add_testing**: Added testing frameworks **React Testing Library**, **Jest**, and **Mock Service Worker** for unit and integration testing.

## 🚀 Getting Started

### **Online Version**

Use this [link](https://wonderful-sfogliatella-ecf148.netlify.app/ "Test Demo") to try the code deployed on Netlify.


### **Local Version**
1. Run the following commands for *Linux*. You must have [**Docker**](https://docs.docker.com/engine/install/) and its [**post-installation**](https://docs.docker.com/engine/install/linux-postinstall/) set up beforehand.

```bash
# Download the latest image from DockerHub:
docker pull deglanrivas/frontend-ts-budgetplanner:latest

# Create a container based on that image:
docker run --rm -d -p 8080:80 --name demo_container deglanrivas/frontend-ts-budgetplanner:latest

```

2. Open [**http://localhost:8080**](http://localhost:8080/) in your browser to see the result 🚀

3. Once the test is complete, remove the image and container:
```bash
# Stop the containers:
docker stop demo_container && docker rmi deglanrivas/frontend-ts-budgetplanner:latest

# Verify they were correctly removed:
docker images
docker ps -a
```